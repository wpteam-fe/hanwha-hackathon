import React from "react";
import { useAppStore } from "@/stores/appStore";
import LandingPage from "@/pages/LandingPage";
import AuthPage from "@/pages/AuthPage";
import PensionFetchPage from "@/pages/PensionFetchPage";
import ConversionPage from "@/pages/ConversionPage";
import CompletionPage from "@/pages/CompletionPage";
import DashboardPage from "@/pages/DashboardPage";

function App() {
  const currentStep = useAppStore((state) => state.currentStep);

  const renderCurrentPage = () => {
    switch (currentStep) {
      case "landing":
        return <LandingPage />;
      case "auth":
        return <AuthPage />;
      case "pension-fetch":
        return <PensionFetchPage />;
      case "conversion":
        return <ConversionPage />;
      case "completion":
        return <CompletionPage />;
      case "dashboard":
        return <DashboardPage />;
      default:
        return <LandingPage />;
    }
  };

  return <div className="App">{renderCurrentPage()}</div>;
}

export default App;
