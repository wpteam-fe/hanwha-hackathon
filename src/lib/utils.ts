import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// 숫자를 한국 원화 형식으로 포맷팅
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("ko-KR", {
    style: "currency",
    currency: "KRW",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

// 숫자를 간단한 형식으로 포맷팅 (예: 1.2억원)
export function formatCurrencyShort(amount: number): string {
  if (amount >= 100000000) {
    return `${(amount / 100000000).toFixed(1)}억원`;
  } else if (amount >= 10000) {
    return `${(amount / 10000).toFixed(0)}만원`;
  } else {
    return formatCurrency(amount);
  }
}

// 휴대폰 번호 포맷팅
export function formatPhoneNumber(phone: string): string {
  const cleaned = phone.replace(/\D/g, "");
  const match = cleaned.match(/^(\d{3})(\d{4})(\d{4})$/);
  if (match) {
    return `${match[1]}-${match[2]}-${match[3]}`;
  }
  return phone;
}

// 주민등록번호 포맷팅
export function formatResidentNumber(residentNumber: string): string {
  const cleaned = residentNumber.replace(/\D/g, "");
  const match = cleaned.match(/^(\d{6})(\d{7})$/);
  if (match) {
    return `${match[1]}-${match[2]}`;
  }
  return residentNumber;
}

// 지연 함수 (프로토타입용)
export function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
