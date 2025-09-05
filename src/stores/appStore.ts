import { create } from "zustand";
import { PensionInfo, AssetInfo, AppState } from "@/types";

interface AppStore extends AppState {
  // Actions
  setCurrentStep: (step: AppState["currentStep"]) => void;
  setPensionInfo: (pensionInfo: PensionInfo | null) => void;
  setAssetInfo: (assetInfo: AssetInfo | null) => void;
  setLoading: (isLoading: boolean) => void;
  setError: (error: string | null) => void;
  reset: () => void;
}

const initialState: AppState = {
  currentStep: "landing",
  pensionInfo: null,
  assetInfo: null,
  isLoading: false,
  error: null,
};

export const useAppStore = create<AppStore>((set) => ({
  ...initialState,

  setCurrentStep: (step) => set({ currentStep: step }),
  setPensionInfo: (pensionInfo) => set({ pensionInfo }),
  setAssetInfo: (assetInfo) => set({ assetInfo }),
  setLoading: (isLoading) => set({ isLoading }),
  setError: (error) => set({ error }),
  reset: () => set(initialState),
}));
