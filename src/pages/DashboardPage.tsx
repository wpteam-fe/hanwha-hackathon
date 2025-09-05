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
import { TrendingUp, Coins, PieChart, History, Wallet } from "lucide-react";
import { formatCurrency, formatCurrencyShort } from "@/lib/utils";
import {
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const DashboardPage: React.FC = () => {
  const setCurrentStep = useAppStore((state) => state.setCurrentStep);
  const assetInfo = useAppStore((state) => state.assetInfo);
  const pensionInfo = useAppStore((state) => state.pensionInfo);
  const user = useAuthStore((state) => state.user);

  const handleStartAnalysis = () => {
    setCurrentStep("auth");
  };

  // 차트 데이터
  const pieData = [
    {
      name: "국민연금",
      value: pensionInfo?.nationalPension.expectedMonthlyPension || 0,
      color: "#e5640e",
    },
    {
      name: "퇴직연금",
      value: pensionInfo?.retirementPension.totalExpectedMonthlyPension || 0,
      color: "#f97316",
    },
    {
      name: "개인연금",
      value: pensionInfo?.privatePension.totalExpectedMonthlyPension || 0,
      color: "#fb923c",
    },
  ];

  const investmentHistory = [
    { date: "2024-01", value: 1000000 },
    { date: "2024-02", value: 1050000 },
    { date: "2024-03", value: 1100000 },
    { date: "2024-04", value: 1080000 },
    { date: "2024-05", value: 1150000 },
    { date: "2024-06", value: 1200000 },
  ];

  const investmentAccounts = assetInfo?.investmentAccounts || [];
  const totalInvestmentValue = investmentAccounts.reduce(
    (sum, acc) => sum + acc.value,
    0
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">H</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-900">HSD Life</h1>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-600">안녕하세요, {user?.name}님</p>
            <p className="text-xs text-gray-500">
              {user?.age}세, 은퇴 목표: {user?.retirementAge}세
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          {/* AI 자산 분석 섹션 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-gradient-to-r from-primary/10 to-orange-100 border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center space-x-2">
                  <TrendingUp className="w-6 h-6 text-primary" />
                  <span>AI 자산 분석</span>
                </CardTitle>
                <CardDescription>
                  내 총 연금자산 현황을 한눈에 확인하세요
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <p className="text-sm text-gray-600 mb-1">총 연금 자산</p>
                    <p className="text-3xl font-bold text-primary">
                      {formatCurrencyShort(assetInfo?.totalPensionAssets || 0)}
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-600 mb-1">예상 월 수령액</p>
                    <p className="text-3xl font-bold text-green-600">
                      {formatCurrency(
                        assetInfo?.totalExpectedMonthlyPension || 0
                      )}
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-600 mb-1">월 부족분</p>
                    <p className="text-3xl font-bold text-red-600">
                      {formatCurrency(assetInfo?.monthlyShortfall || 0)}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* 투자 현황 차트 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <PieChart className="w-5 h-5 text-primary" />
                  <span>연금 유형별 분포</span>
                </CardTitle>
                <CardDescription>
                  각 연금 유형별 예상 수령액 현황
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <RechartsPieChart>
                      <Pie
                        data={pieData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={100}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {pieData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip
                        formatter={(value) => formatCurrency(Number(value))}
                      />
                    </RechartsPieChart>
                  </ResponsiveContainer>
                </div>
                <div className="flex justify-center space-x-6 mt-4">
                  {pieData.map((item, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: item.color }}
                      ></div>
                      <span className="text-sm text-gray-600">{item.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* 투자 이력 및 계좌 정보 */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* 투자 이력 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <History className="w-5 h-5 text-primary" />
                    <span>투자 이력</span>
                  </CardTitle>
                  <CardDescription>
                    스테이블코인 투자 수익률 추이
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-48">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={investmentHistory}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" />
                        <YAxis />
                        <Tooltip
                          formatter={(value) => formatCurrency(Number(value))}
                        />
                        <Line
                          type="monotone"
                          dataKey="value"
                          stroke="#e5640e"
                          strokeWidth={2}
                          dot={{ fill: "#e5640e" }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* 투자 계좌 정보 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Wallet className="w-5 h-5 text-primary" />
                    <span>투자 계좌</span>
                  </CardTitle>
                  <CardDescription>
                    현재 투자 중인 스테이블코인 계좌
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {investmentAccounts.map((account, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                            <Coins className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">
                              {account.tokenType}
                            </p>
                            <p className="text-sm text-gray-600">
                              {account.accountNumber}
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-medium text-gray-900">
                            {account.amount.toFixed(4)} {account.tokenType}
                          </p>
                          <p className="text-sm text-gray-600">
                            {formatCurrency(account.value)}
                          </p>
                        </div>
                      </div>
                    ))}

                    <div className="border-t pt-4">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-900">
                          총 투자 자산
                        </span>
                        <span className="text-lg font-bold text-primary">
                          {formatCurrency(totalInvestmentValue)}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* 액션 버튼 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <Button
              size="lg"
              onClick={handleStartAnalysis}
              className="text-lg px-8 py-4 h-auto"
            >
              새로운 분석 시작하기
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
