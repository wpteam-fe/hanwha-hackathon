import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useAppStore } from "@/stores/appStore";
import { useAuthStore } from "@/stores/authStore";
import { ArrowLeft, ArrowRightLeft, Coins, TrendingUp } from "lucide-react";
import { delay, formatCurrency } from "@/lib/utils";
import { AssetInfo } from "@/types";
import {
  calculateTotalPensionAssets,
  calculateTotalExpectedMonthlyPension,
  calculateMonthlyShortfall,
} from "@/utils/pensionCalculations";

const ConversionPage: React.FC = () => {
  const setCurrentStep = useAppStore((state) => state.setCurrentStep);
  const setAssetInfo = useAppStore((state) => state.setAssetInfo);
  const setLoading = useAppStore((state) => state.setLoading);
  const setError = useAppStore((state) => state.setError);
  const pensionInfo = useAppStore((state) => state.pensionInfo);
  const user = useAuthStore((state) => state.user);

  const [conversionProgress, setConversionProgress] = useState(0);
  const [currentStep, setCurrentStepState] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);

  const conversionSteps = [
    {
      id: "analyze",
      name: "자산 분석",
      description: "연금 자산을 분석하여 변환 가능 금액을 계산합니다",
      duration: 2000,
    },
    {
      id: "convert",
      name: "스테이블코인 변환",
      description: "원화를 USDT로 변환합니다",
      duration: 3000,
    },
    {
      id: "allocate",
      name: "포트폴리오 배분",
      description: "투자 포트폴리오를 구성합니다",
      duration: 2500,
    },
    {
      id: "complete",
      name: "변환 완료",
      description: "모든 변환 작업이 완료되었습니다",
      duration: 1000,
    },
  ];

  useEffect(() => {
    const performConversion = async () => {
      setLoading(true);
      setError(null);

      try {
        // 공통 계산 함수를 사용하여 연금 총액 계산
        const totalPensionAssets = pensionInfo ? calculateTotalPensionAssets(pensionInfo) : 0;
        const totalExpectedMonthlyPension = pensionInfo ? calculateTotalExpectedMonthlyPension(pensionInfo) : 0;
        const monthlyShortfall = calculateMonthlyShortfall(
          user?.targetMonthlyIncome || 0,
          totalExpectedMonthlyPension
        );

        for (let i = 0; i < conversionSteps.length; i++) {
          setCurrentStepState(i);
          setConversionProgress((i / conversionSteps.length) * 100);

          // 변환 금액 애니메이션
          if (i === 1) {
            const targetAmount = totalPensionAssets; // 100% 변환
            const steps = 30;
            const increment = targetAmount / steps;

            // convertedAmount를 0으로 초기화한 후 애니메이션
            setConvertedAmount(0);
            for (let j = 0; j < steps; j++) {
              setConvertedAmount(increment * (j + 1));
              await delay(conversionSteps[i].duration / steps);
            }
          } else {
            await delay(conversionSteps[i].duration);
          }
        }

        // 변환 완료
        setCurrentStepState(conversionSteps.length);
        setConversionProgress(100);

        // 자산 정보 생성
        const assetInfo: AssetInfo = {
          totalPensionAssets,
          totalExpectedMonthlyPension,
          monthlyShortfall,
          investmentAccounts: [
            {
              accountNumber: "USDT-001",
              tokenType: "USDT",
              amount: convertedAmount / 1300, // 1 USDT = 1300원 가정
              value: convertedAmount,
            },
          ],
          investmentHistory: [
            {
              id: "1",
              date: new Date().toISOString(),
              type: "buy",
              amount: convertedAmount / 1300,
              tokenType: "USDT",
              price: 1300,
            },
          ],
        };

        setAssetInfo(assetInfo);

        // 잠시 대기 후 완료 페이지로
        await delay(2000);
        setCurrentStep("completion");
      } catch {
        setError("변환 과정에서 오류가 발생했습니다. 다시 시도해주세요.");
      } finally {
        setLoading(false);
      }
    };

    if (pensionInfo) {
      performConversion();
    }
  }, [pensionInfo, setAssetInfo, setCurrentStep, setError, setLoading, user?.targetMonthlyIncome]);

  const handleBack = () => {
    setCurrentStep("pension-fetch");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={handleBack}
            className="text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => setCurrentStep("landing")}
          >
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">H</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-900">HSD Life</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">스테이블코인 변환</CardTitle>
              <CardDescription>
                연금 자산을 스테이블코인으로 변환하여 투자 포트폴리오를
                구성합니다
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Progress Bar */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>변환 진행률</span>
                  <span>{Math.round(conversionProgress)}%</span>
                </div>
                <Progress value={conversionProgress} className="h-2" />
              </div>

              {/* Conversion Steps */}
              <div className="space-y-4">
                {conversionSteps.map((step, index) => (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`flex items-center space-x-4 p-4 rounded-lg border-2 transition-all ${
                      index < currentStep
                        ? "border-green-500 bg-green-50"
                        : index === currentStep
                        ? "border-primary bg-primary/5"
                        : "border-gray-200 bg-gray-50"
                    }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        index < currentStep
                          ? "bg-green-500 text-white"
                          : index === currentStep
                          ? "bg-primary text-white"
                          : "bg-gray-300 text-gray-600"
                      }`}
                    >
                      {index < currentStep ? (
                        <Coins className="w-6 h-6" />
                      ) : index === currentStep ? (
                        <ArrowRightLeft className="w-6 h-6" />
                      ) : (
                        <TrendingUp className="w-6 h-6" />
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900">{step.name}</h3>
                      <p className="text-sm text-gray-600">
                        {step.description}
                      </p>
                    </div>
                    {index < currentStep && (
                      <div className="text-green-600 text-sm font-medium">
                        완료
                      </div>
                    )}
                    {index === currentStep && (
                      <div className="text-primary text-sm font-medium">
                        진행 중...
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Conversion Amount Display */}
              {convertedAmount > 0 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gradient-to-r from-primary/10 to-orange-100 p-6 rounded-lg text-center"
                >
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <Coins className="w-6 h-6 text-primary" />
                    <span className="text-lg font-medium text-gray-700">
                      변환된 금액
                    </span>
                  </div>
                  <div className="text-3xl font-bold text-primary">
                    {formatCurrency(convertedAmount)}
                  </div>
                  <div className="text-sm text-gray-600 mt-1">
                    ≈ {(convertedAmount / 1300).toFixed(2)} USDT
                  </div>
                </motion.div>
              )}

              {/* Status Message */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-blue-50 p-4 rounded-lg"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  <p className="text-blue-800 text-sm">
                    {currentStep < conversionSteps.length
                      ? `${conversionSteps[currentStep].name} 작업을 진행하고 있습니다...`
                      : "스테이블코인 변환이 완료되었습니다!"}
                  </p>
                </div>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default ConversionPage;
