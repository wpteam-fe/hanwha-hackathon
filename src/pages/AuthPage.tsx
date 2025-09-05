import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useAppStore } from "@/stores/appStore";
import { useAuthStore } from "@/stores/authStore";
import { ArrowLeft, Shield, CheckCircle } from "lucide-react";
import { formatPhoneNumber, formatResidentNumber, delay } from "@/lib/utils";
import { User } from "@/types";

const AuthPage: React.FC = () => {
  const setCurrentStep = useAppStore((state) => state.setCurrentStep);
  const login = useAuthStore((state) => state.login);
  const setLoading = useAuthStore((state) => state.setLoading);
  const setError = useAuthStore((state) => state.setError);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    carrier: "SKT",
    residentNumber: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const carriers = [
    "SKT",
    "KT",
    "LG U+",
    "SKT 알뜰폰",
    "KT 알뜰폰",
    "LG U+ 알뜰폰",
  ];

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "이름을 입력해주세요.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "휴대폰 번호를 입력해주세요.";
    } else if (!/^010-\d{4}-\d{4}$/.test(formData.phone)) {
      newErrors.phone = "올바른 휴대폰 번호 형식이 아닙니다.";
    }

    if (!formData.residentNumber.trim()) {
      newErrors.residentNumber = "주민등록번호를 입력해주세요.";
    } else if (!/^\d{6}-\d{7}$/.test(formData.residentNumber)) {
      newErrors.residentNumber = "올바른 주민등록번호 형식이 아닙니다.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: string, value: string) => {
    let formattedValue = value;

    if (field === "phone") {
      formattedValue = formatPhoneNumber(value);
    } else if (field === "residentNumber") {
      formattedValue = formatResidentNumber(value);
    }

    setFormData((prev) => ({ ...prev, [field]: formattedValue }));

    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);
    setError(null);

    try {
      // 프로토타입: 본인인증 시뮬레이션
      await delay(2000);

      // 나이 계산 (주민등록번호 앞자리 기준)
      const birthYear = parseInt(formData.residentNumber.substring(0, 2));
      const currentYear = new Date().getFullYear();
      const age =
        currentYear - (birthYear > 50 ? 1900 + birthYear : 2000 + birthYear);

      const user: User = {
        id: Date.now().toString(),
        name: formData.name,
        phone: formData.phone,
        carrier: formData.carrier,
        residentNumber: formData.residentNumber,
        age,
        retirementAge: 65,
        targetMonthlyIncome: 2500000, // 기본값 250만원
      };

      login(user);
      setCurrentStep("pension-fetch");
    } catch (error) {
      setError("본인인증에 실패했습니다. 다시 시도해주세요.");
    } finally {
      setLoading(false);
    }
  };

  const handleBack = () => {
    setCurrentStep("landing");
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
          className="max-w-md mx-auto"
        >
          <Card>
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
              </div>
              <CardTitle className="text-2xl">본인인증</CardTitle>
              <CardDescription>
                안전한 본인인증을 통해 연금 정보를 조회합니다
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    이름
                  </label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder="홍길동"
                    className={errors.name ? "border-red-500" : ""}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    휴대폰 번호
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="010-1234-5678"
                    className={errors.phone ? "border-red-500" : ""}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="carrier"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    통신사
                  </label>
                  <select
                    id="carrier"
                    value={formData.carrier}
                    onChange={(e) =>
                      handleInputChange("carrier", e.target.value)
                    }
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    {carriers.map((carrier) => (
                      <option key={carrier} value={carrier}>
                        {carrier}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="residentNumber"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    주민등록번호
                  </label>
                  <Input
                    id="residentNumber"
                    type="text"
                    value={formData.residentNumber}
                    onChange={(e) =>
                      handleInputChange("residentNumber", e.target.value)
                    }
                    placeholder="901201-1234567"
                    className={errors.residentNumber ? "border-red-500" : ""}
                  />
                  {errors.residentNumber && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.residentNumber}
                    </p>
                  )}
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div className="text-sm text-blue-800">
                      <p className="font-medium mb-1">개인정보 보호</p>
                      <p>
                        입력하신 정보는 본인인증 목적으로만 사용되며, 서버에
                        저장되지 않습니다.
                      </p>
                    </div>
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  disabled={useAuthStore((state) => state.isLoading)}
                >
                  {useAuthStore((state) => state.isLoading)
                    ? "인증 중..."
                    : "본인인증 시작"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default AuthPage;
