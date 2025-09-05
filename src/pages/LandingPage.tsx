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
import { TrendingUp, Shield, PieChart, Users } from "lucide-react";

const LandingPage: React.FC = () => {
  const setCurrentStep = useAppStore((state) => state.setCurrentStep);

  const handleStartAnalysis = () => {
    setCurrentStep("auth");
  };

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
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            지속가능한 라이프를 위한
            <br />
            <span className="text-primary">은퇴후 여유자금</span> 준비
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            AI 자산 분석을 통해 내 연금 현황을 한눈에 파악하고,
            <br />
            스테이블 코인 투자로 부족한 노후 자금을 채워보세요.
          </p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button
              size="lg"
              onClick={handleStartAnalysis}
              className="text-lg px-8 py-4 h-auto"
            >
              AI 자산 분석 시작하기
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            HSD Life의 특별한 기능
          </h3>
          <p className="text-lg text-gray-600">
            복잡한 연금 정보를 쉽고 간편하게 관리하세요
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: <TrendingUp className="w-8 h-8 text-primary" />,
              title: "AI 자산 분석",
              description:
                "국민연금, 퇴직연금, 개인연금을 통합 분석하여 총 자산 현황을 파악합니다.",
            },
            {
              icon: <PieChart className="w-8 h-8 text-primary" />,
              title: "투자 현황 차트",
              description:
                "스테이블 코인 투자 현황을 직관적인 차트로 확인할 수 있습니다.",
            },
            {
              icon: <Shield className="w-8 h-8 text-primary" />,
              title: "안전한 본인인증",
              description:
                "금감원 API를 통한 안전하고 신뢰할 수 있는 본인인증 시스템입니다.",
            },
            {
              icon: <Users className="w-8 h-8 text-primary" />,
              title: "맞춤형 투자 추천",
              description:
                "개인별 상황에 맞는 스테이블 코인 투자 전략을 제안합니다.",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">{feature.icon}</div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-primary rounded-2xl p-12 text-center text-white"
        >
          <h3 className="text-3xl font-bold mb-4">지금 시작하세요</h3>
          <p className="text-xl mb-8 opacity-90">
            복잡한 연금 관리, 이제 AI가 도와드립니다
          </p>
          <Button
            size="lg"
            variant="secondary"
            onClick={handleStartAnalysis}
            className="text-lg px-8 py-4 h-auto"
          >
            무료로 시작하기
          </Button>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 border-t">
        <div className="text-center text-gray-600">
          <p>&copy; 2024 HSD Life. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
