import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useAppStore } from "@/stores/appStore";
import { useAuthStore } from "@/stores/authStore";
import { CheckCircle, TrendingUp, Coins, ArrowRight } from "lucide-react";
import { formatCurrency, formatCurrencyShort } from "@/lib/utils";

const CompletionPage: React.FC = () => {
  const setCurrentStep = useAppStore((state) => state.setCurrentStep);
  const assetInfo = useAppStore((state) => state.assetInfo);
  const user = useAuthStore((state) => state.user);

  const handleGoToDashboard = () => {
    setCurrentStep("dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <div
          className="flex items-center space-x-2 cursor-pointer"
          onClick={() => setCurrentStep("landing")}
        >
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">H</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-900">HSD Life</h1>
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
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex justify-center mb-6"
              >
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-12 h-12 text-white" />
                </div>
              </motion.div>
              <CardTitle className="text-3xl text-green-600 mb-2">
                자산 설정 완료!
              </CardTitle>
              <CardDescription className="text-lg">
                {user?.name}님의 연금 자산이 성공적으로 스테이블코인으로
                변환되었습니다
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Summary Cards */}
              <div className="grid md:grid-cols-2 gap-4">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                          <TrendingUp className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p className="text-sm text-blue-600 font-medium">
                            총 연금 자산
                          </p>
                          <p className="text-xl font-bold text-blue-800">
                            {formatCurrencyShort(
                              assetInfo?.totalPensionAssets || 0
                            )}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                          <Coins className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p className="text-sm text-green-600 font-medium">
                            투자 자산
                          </p>
                          <p className="text-xl font-bold text-green-800">
                            {formatCurrencyShort(
                              assetInfo?.investmentAccounts[0]?.value || 0
                            )}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>

              {/* Investment Summary */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="bg-gray-50 p-6 rounded-lg"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  투자 포트폴리오 요약
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">예상 월 연금 수령액</span>
                    <span className="font-medium">
                      {formatCurrency(
                        assetInfo?.totalExpectedMonthlyPension || 0
                      )}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">목표 월 생활비</span>
                    <span className="font-medium">
                      {formatCurrency(user?.targetMonthlyIncome || 0)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center border-t pt-3">
                    <span className="text-gray-600">월 부족분</span>
                    <span className="font-medium text-red-600">
                      {formatCurrency(assetInfo?.monthlyShortfall || 0)}
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Next Steps */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="bg-primary/10 p-6 rounded-lg"
              >
                <h3 className="text-lg font-semibold text-primary mb-3">
                  다음 단계
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>대시보드에서 실시간 투자 현황을 확인하세요</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>스테이블코인 투자 수익률을 모니터링하세요</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>정기적으로 포트폴리오를 재조정하세요</span>
                  </li>
                </ul>
              </motion.div>

              {/* Action Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="text-center"
              >
                <Button
                  size="lg"
                  onClick={handleGoToDashboard}
                  className="text-lg px-8 py-4 h-auto"
                >
                  대시보드로 이동
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default CompletionPage;
