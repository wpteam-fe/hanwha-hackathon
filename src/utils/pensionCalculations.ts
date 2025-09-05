import { PensionInfo } from "@/types";

/**
 * 연금 총액 계산을 위한 공통 유틸리티 함수들
 */

// 연금 수령 기간 상수 (20년)
export const PENSION_DURATION_YEARS = 20;
export const PENSION_DURATION_MONTHS = PENSION_DURATION_YEARS * 12; // 240개월

/**
 * 총 연금 자산 계산
 * - 국민연금: 현재까지의 납부 총액
 * - 퇴직연금: 월 예상 수령액 × 240개월
 * - 개인연금: 월 예상 수령액 × 240개월
 */
export const calculateTotalPensionAssets = (pensionInfo: PensionInfo): number => {
  const nationalPensionAmount = pensionInfo.nationalPension.totalContribution;
  
  const retirementPensionAmount = pensionInfo.retirementPension.accounts.reduce(
    (sum, acc) => sum + acc.expectedMonthlyPension * PENSION_DURATION_MONTHS,
    0
  );
  
  const privatePensionAmount = pensionInfo.privatePension.accounts.reduce(
    (sum, acc) => sum + acc.expectedMonthlyPension * PENSION_DURATION_MONTHS,
    0
  );
  
  return nationalPensionAmount + retirementPensionAmount + privatePensionAmount;
};

/**
 * 총 월 예상 수령액 계산
 */
export const calculateTotalExpectedMonthlyPension = (pensionInfo: PensionInfo): number => {
  return (
    pensionInfo.nationalPension.expectedMonthlyPension +
    pensionInfo.retirementPension.totalExpectedMonthlyPension +
    pensionInfo.privatePension.totalExpectedMonthlyPension
  );
};

/**
 * 월 부족분 계산
 */
export const calculateMonthlyShortfall = (
  targetMonthlyIncome: number,
  totalExpectedMonthlyPension: number
): number => {
  const shortfall = targetMonthlyIncome - totalExpectedMonthlyPension;
  return Math.max(0, shortfall); // 음수가 나오면 0으로 처리
};