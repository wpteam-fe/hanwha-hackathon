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
import {
  ArrowLeft,
  CheckCircle,
  Building2,
  CreditCard,
  PiggyBank,
} from "lucide-react";
import { delay } from "@/lib/utils";
import { PensionInfo } from "@/types";

const PensionFetchPage: React.FC = () => {
  const setCurrentStep = useAppStore((state) => state.setCurrentStep);
  const setPensionInfo = useAppStore((state) => state.setPensionInfo);
  const setLoading = useAppStore((state) => state.setLoading);
  const setError = useAppStore((state) => state.setError);
  const user = useAuthStore((state) => state.user);

  const [currentStep, setCurrentStepState] = useState(0);
  const [progress, setProgress] = useState(0);

  const fetchSteps = [
    {
      id: "health",
      name: "건강보험공단",
      description: "국민연금 정보 조회 중...",
      icon: <Building2 className="w-6 h-6" />,
      duration: 2000,
    },
    {
      id: "tax",
      name: "국세청",
      description: "퇴직연금 정보 조회 중...",
      icon: <CreditCard className="w-6 h-6" />,
      duration: 2500,
    },
    {
      id: "pension",
      name: "국민연금공단",
      description: "국민연금 상세 정보 조회 중...",
      icon: <PiggyBank className="w-6 h-6" />,
      duration: 2000,
    },
    {
      id: "mydata",
      name: "마이데이터",
      description: "개인연금 정보 조회 중...",
      icon: <CheckCircle className="w-6 h-6" />,
      duration: 3000,
    },
  ];

  useEffect(() => {
    const fetchPensionData = async () => {
      setLoading(true);
      setError(null);

      try {
        for (let i = 0; i < fetchSteps.length; i++) {
          setCurrentStepState(i);
          setProgress((i / fetchSteps.length) * 100);

          await delay(fetchSteps[i].duration);
        }

        // 모든 조회 완료
        setCurrentStepState(fetchSteps.length);
        setProgress(100);

        // 프로토타입: 더미 연금 데이터 생성
        const mockPensionInfo: PensionInfo = {
          nationalPension: {
            monthlyContribution: 150000,
            expectedMonthlyPension: 1200000,
            totalContribution: 45000000,
          },
          retirementPension: {
            accounts: [
              {
                accountNumber: "123-456-789",
                companyName: "삼성전자",
                productType: "확정급여형",
                expectedMonthlyPension: 800000,
              },
              {
                accountNumber: "987-654-321",
                companyName: "LG전자",
                productType: "확정기여형",
                expectedMonthlyPension: 600000,
              },
            ],
            totalExpectedMonthlyPension: 1400000,
          },
          privatePension: {
            accounts: [
              {
                accountNumber: "555-777-999",
                companyName: "삼성생명",
                productType: "연금저축",
                paymentType: "월납",
                expectedMonthlyPension: 300000,
              },
            ],
            totalExpectedMonthlyPension: 300000,
          },
        };

        setPensionInfo(mockPensionInfo);
      } catch (error) {
        setError("연금 정보 조회에 실패했습니다. 다시 시도해주세요.");
      } finally {
        setLoading(false);
      }
    };

    fetchPensionData();
  }, []);

  const handleBack = () => {
    setCurrentStep("auth");
  };

  const handleGoToConversion = () => {
    setCurrentStep("conversion");
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
              <CardTitle className="text-2xl">연금 정보 조회</CardTitle>
              <CardDescription>
                {user?.name}님의 연금 정보를 안전하게 조회하고 있습니다
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Progress Bar */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>진행률</span>
                  <span>{Math.round(progress)}%</span>
                </div>
                <Progress value={progress} className="h-2" />
              </div>

              {/* Fetch Steps */}
              <div className="space-y-4">
                {fetchSteps.map((step, index) => (
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
                        <CheckCircle className="w-6 h-6" />
                      ) : (
                        step.icon
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
                        조회 중...
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Status Message */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className={`p-4 rounded-lg ${
                  currentStep < fetchSteps.length ? "bg-blue-50" : "bg-green-50"
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div
                    className={`w-2 h-2 rounded-full ${
                      currentStep < fetchSteps.length
                        ? "bg-blue-500 animate-pulse"
                        : "bg-green-500"
                    }`}
                  ></div>
                  <p
                    className={`text-sm ${
                      currentStep < fetchSteps.length
                        ? "text-blue-800"
                        : "text-green-800"
                    }`}
                  >
                    {currentStep < fetchSteps.length
                      ? `${fetchSteps[currentStep].name}에서 정보를 조회하고 있습니다...`
                      : "모든 연금 정보 조회가 완료되었습니다!"}
                  </p>
                </div>
              </motion.div>

              {/* Conversion Button - Show only when completed */}
              {currentStep >= fetchSteps.length && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-center"
                >
                  <Button
                    onClick={handleGoToConversion}
                    size="lg"
                    className="w-full"
                  >
                    스테이블 코인 전환하기
                  </Button>
                </motion.div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default PensionFetchPage;
