// 사용자 정보 타입
export interface User {
  id: string;
  name: string;
  phone: string;
  carrier: string;
  residentNumber: string;
  age: number;
  retirementAge: number;
  targetMonthlyIncome: number;
}

// 연금 정보 타입
export interface PensionInfo {
  nationalPension: {
    monthlyContribution: number;
    expectedMonthlyPension: number;
    totalContribution: number;
  };
  retirementPension: {
    accounts: Array<{
      accountNumber: string;
      companyName: string;
      productType: string;
      expectedMonthlyPension: number;
    }>;
    totalExpectedMonthlyPension: number;
  };
  privatePension: {
    accounts: Array<{
      accountNumber: string;
      companyName: string;
      productType: string;
      paymentType: string;
      expectedMonthlyPension: number;
    }>;
    totalExpectedMonthlyPension: number;
  };
}

// 자산 정보 타입
export interface AssetInfo {
  totalPensionAssets: number;
  totalExpectedMonthlyPension: number;
  monthlyShortfall: number;
  investmentAccounts: Array<{
    accountNumber: string;
    tokenType: string;
    amount: number;
    value: number;
  }>;
  investmentHistory: Array<{
    id: string;
    date: string;
    type: "buy" | "sell";
    amount: number;
    tokenType: string;
    price: number;
  }>;
}

// 인증 상태 타입
export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  isLoading: boolean;
  error: string | null;
}

// 앱 상태 타입
export interface AppState {
  currentStep:
    | "landing"
    | "auth"
    | "pension-fetch"
    | "conversion"
    | "dashboard"
    | "completion"
    | "stablecoin-intro";
  pensionInfo: PensionInfo | null;
  assetInfo: AssetInfo | null;
  isLoading: boolean;
  error: string | null;
}
