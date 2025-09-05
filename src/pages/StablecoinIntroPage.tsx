import React from "react";
import { Button } from "@/components/ui/button";
import { useAppStore } from "@/stores/appStore";

const StablecoinIntroPage: React.FC = () => {
  const setCurrentStep = useAppStore((state) => state.setCurrentStep);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleBackToLanding = () => {
    setCurrentStep("landing");
  };

  return (
    <div className="min-h-screen bg-[#0b1220] text-[#e2e8f0] font-['Pretendard']">
      {/* Background gradients */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[1200px] h-[600px] bg-gradient-radial from-[#e5640e]/18 to-transparent opacity-60"></div>
        <div className="absolute top-0 right-0 w-[1000px] h-[500px] bg-gradient-radial from-[#e5640e]/18 to-transparent opacity-60"></div>
      </div>

      <div className="max-w-[1100px] mx-auto px-6 relative z-10">
        {/* Header */}
        <header className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 items-center pt-16 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-gradient-to-r from-[#e5640e] to-[#f97316] text-[#06202c] font-bold text-xs tracking-wider mb-4 shadow-[0_8px_30px_rgba(229,100,14,0.25)]">
              HANWHA STABLE COIN · HSD
            </div>
            <h1 className="text-[clamp(28px,5vw,44px)] leading-[1.15] tracking-[-0.02em] font-bold mb-2">
              보험사의 신뢰 × 국채의 안정성 × 블록체인의 투명성
            </h1>
            <p className="text-[clamp(15px,1.8vw,18px)] text-[#94a3b8] mb-6 leading-relaxed">
              한화 스테이블 코인(HSD)은 국채·공공채 70%와 보험사의 지급여력 기반
              30%를 결합한 하이브리드 담보 모델로 설계된 원화 페깅(₩1=1 HSD)
              디지털 머니입니다.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Button
                onClick={() => scrollToSection("features")}
                className="px-4 py-3 rounded-2xl bg-gradient-to-r from-[#e5640e] to-[#f97316] text-white font-bold shadow-[0_6px_24px_rgba(229,100,14,0.35)] hover:brightness-105 hover:-translate-y-0.5 transition-all duration-200"
              >
                특징 보기
              </Button>
              <Button
                onClick={() => scrollToSection("how")}
                className="px-4 py-3 rounded-2xl bg-[#2d1b0e] border border-[#e5640e]/40 text-[#f4a261] hover:brightness-105 hover:-translate-y-0.5 transition-all duration-200"
              >
                어떻게 작동하나요?
              </Button>
            </div>
          </div>
          <div className="relative aspect-[1.1/1] rounded-2xl bg-gradient-to-b from-[#0b1328] to-[#0a0f1f] shadow-[0_20px_60px_rgba(2,8,23,0.6)] overflow-hidden">
            <div className="absolute top-0 left-0 w-[140px] h-[140px] bg-gradient-radial from-[#e5640e]/30 to-transparent"></div>
            <div className="absolute bottom-0 right-0 w-[180px] h-[180px] bg-gradient-radial from-[#f97316]/28 to-transparent"></div>
            <div className="absolute bottom-3 right-3 bg-[#081427] border border-[#94a3b8]/20 text-[#cbd5e1] rounded-xl px-3 py-2 text-xs flex items-center gap-2 backdrop-blur-sm shadow-[0_10px_30px_rgba(2,8,23,0.55)]">
              <div className="w-2 h-2 rounded-full bg-[#e5640e]"></div>
              Real-time Proof‑of‑Reserves
            </div>
          </div>
        </header>

        {/* Features Section */}
        <section id="features" className="py-16">
          <div className="text-[#f4a261] uppercase tracking-[0.12em] font-extrabold text-xs mb-4">
            Features
          </div>
          <h2 className="text-[clamp(28px,4vw,36px)] font-bold mb-6">
            한눈에 보는 HSD 핵심 특징 (3)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <article className="bg-gradient-to-b from-[#0d162c] to-[#0b1426] border border-[#94a3b8]/18 rounded-2xl p-6 shadow-[0_12px_40px_rgba(2,8,23,0.5)] hover:border-[#e5640e]/30 transition-colors duration-300">
              <span className="inline-block rounded-full border border-[#e5640e]/45 text-[#f4a261] text-xs font-bold px-3 py-2 tracking-wider bg-[#e5640e]/10 backdrop-blur-sm mb-4">
                안정성
              </span>
              <h3 className="text-xl font-bold mb-3">70:30 하이브리드 담보</h3>
              <p className="text-[#94a3b8] text-sm leading-relaxed">
                담보의 70%는 한국 국채·공공채, 30%는 지급여력(K‑ICS) 기반
                보험부채로 구성하여 안정성과 보험사 신뢰를 동시에 확보합니다.
              </p>
            </article>
            <article className="bg-gradient-to-b from-[#0d162c] to-[#0b1426] border border-[#94a3b8]/18 rounded-2xl p-6 shadow-[0_12px_40px_rgba(2,8,23,0.5)] hover:border-[#e5640e]/30 transition-colors duration-300">
              <span className="inline-block rounded-full border border-[#e5640e]/45 text-[#f4a261] text-xs font-bold px-3 py-2 tracking-wider bg-[#e5640e]/10 backdrop-blur-sm mb-4">
                투명성
              </span>
              <h3 className="text-xl font-bold mb-3">실시간 준비금 검증</h3>
              <p className="text-[#94a3b8] text-sm leading-relaxed">
                온체인 Proof‑of‑Reserves 대시보드와 정기 외부검증을 통해
                발행량과 담보자산을 상시 확인할 수 있습니다.
              </p>
            </article>
            <article className="bg-gradient-to-b from-[#0d162c] to-[#0b1426] border border-[#94a3b8]/18 rounded-2xl p-6 shadow-[0_12px_40px_rgba(2,8,23,0.5)] hover:border-[#e5640e]/30 transition-colors duration-300">
              <span className="inline-block rounded-full border border-[#e5640e]/45 text-[#f4a261] text-xs font-bold px-3 py-2 tracking-wider bg-[#e5640e]/10 backdrop-blur-sm mb-4">
                활용성
              </span>
              <h3 className="text-xl font-bold mb-3">헬스·투자 연계 생태계</h3>
              <p className="text-[#94a3b8] text-sm leading-relaxed">
                건강 데이터 개선 리워드, 보험료 납입, 토큰화된 해외자산 투자까지
                한 번에. 실물 경제와 연결된 실사용 케이스를 제공합니다.
              </p>
            </article>
          </div>
        </section>

        {/* How it works Section */}
        <section id="how" className="py-16">
          <div className="text-[#f4a261] uppercase tracking-[0.12em] font-extrabold text-xs mb-4">
            How it works
          </div>
          <h2 className="text-[clamp(28px,4vw,36px)] font-bold mb-6">
            간단한 4단계
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            <div className="border border-dashed border-[#94a3b8]/30 rounded-2xl p-5 bg-[#081927]/40 hover:border-[#e5640e]/40 transition-colors duration-300">
              <strong className="block mb-2 text-[#e5640e]">① 예치</strong>
              <span className="text-sm text-[#cbd5e1]">
                KRW 입금 또는 온램프 연동
              </span>
            </div>
            <div className="border border-dashed border-[#94a3b8]/30 rounded-2xl p-5 bg-[#081927]/40 hover:border-[#e5640e]/40 transition-colors duration-300">
              <strong className="block mb-2 text-[#e5640e]">② 발행</strong>
              <span className="text-sm text-[#cbd5e1]">
                담보 대비 1:1로 HSD 발행
              </span>
            </div>
            <div className="border border-dashed border-[#94a3b8]/30 rounded-2xl p-5 bg-[#081927]/40 hover:border-[#e5640e]/40 transition-colors duration-300">
              <strong className="block mb-2 text-[#e5640e]">③ 사용</strong>
              <span className="text-sm text-[#cbd5e1]">
                보험료 납입, 리워드, 자산 토큰 투자
              </span>
            </div>
            <div className="border border-dashed border-[#94a3b8]/30 rounded-2xl p-5 bg-[#081927]/40 hover:border-[#e5640e]/40 transition-colors duration-300">
              <strong className="block mb-2 text-[#e5640e]">④ 상환</strong>
              <span className="text-sm text-[#cbd5e1]">
                HSD 반환 시 소각 & KRW 지급
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-[#0a1a30] border border-[#94a3b8]/16 rounded-2xl p-4 text-[#cbd5e1] text-sm hover:border-[#e5640e]/30 transition-colors duration-300">
              <strong className="text-[#e5640e]">페그</strong>
              <br />₩ 1 : 1 HSD
            </div>
            <div className="bg-[#0a1a30] border border-[#94a3b8]/16 rounded-2xl p-4 text-[#cbd5e1] text-sm hover:border-[#e5640e]/30 transition-colors duration-300">
              <strong className="text-[#e5640e]">담보</strong>
              <br />
              국채·공공채 70% + 지급여력 기반 30%
            </div>
            <div className="bg-[#0a1a30] border border-[#94a3b8]/16 rounded-2xl p-4 text-[#cbd5e1] text-sm hover:border-[#e5640e]/30 transition-colors duration-300">
              <strong className="text-[#e5640e]">감사/공시</strong>
              <br />
              온체인 PoR + 정기 외부검증
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="text-[#f4a261] uppercase tracking-[0.12em] font-extrabold text-xs mb-4">
            FAQ
          </div>
          <h2 className="text-[clamp(28px,4vw,36px)] font-bold mb-6">
            자주 묻는 질문
          </h2>
          <div className="space-y-4 mt-6">
            <details className="bg-[#0a1a30] border border-[#94a3b8]/16 rounded-xl p-4 hover:border-[#e5640e]/30 transition-colors duration-300">
              <summary className="cursor-pointer font-bold mb-3 text-[#e5640e]">
                왜 하이브리드 담보 구조인가요?
              </summary>
              <p className="text-sm text-[#94a3b8] leading-relaxed">
                국채 중심의 안정성에 더해 보험사의 지급능력 신뢰를 결합하여,
                전통 스테이블 대비 차별화된 안전성과 브랜드 신뢰를 제공합니다.
              </p>
            </details>
            <details className="bg-[#0a1a30] border border-[#94a3b8]/16 rounded-xl p-4 hover:border-[#e5640e]/30 transition-colors duration-300">
              <summary className="cursor-pointer font-bold mb-3 text-[#e5640e]">
                어디에 쓸 수 있나요?
              </summary>
              <p className="text-sm text-[#94a3b8] leading-relaxed">
                보험료 납입, 건강개선 리워드 지급·사용, 토큰화된 해외자산 투자
                등 실사용 시나리오를 중심으로 설계됩니다.
              </p>
            </details>
            <details className="bg-[#0a1a30] border border-[#94a3b8]/16 rounded-xl p-4 hover:border-[#e5640e]/30 transition-colors duration-300">
              <summary className="cursor-pointer font-bold mb-3 text-[#e5640e]">
                준비금은 어떻게 확인하나요?
              </summary>
              <p className="text-sm text-[#94a3b8] leading-relaxed">
                온체인 Proof‑of‑Reserves 대시보드에서 실시간 확인 가능하며, 요약
                리포트가 정기적으로 공개됩니다.
              </p>
            </details>
          </div>
        </section>

        {/* Back to Landing Button */}
        <div className="py-12 text-center">
          <Button
            onClick={handleBackToLanding}
            className="px-8 py-4 rounded-2xl bg-gradient-to-r from-[#e5640e] to-[#f97316] text-white font-bold shadow-[0_6px_24px_rgba(229,100,14,0.35)] hover:brightness-105 hover:-translate-y-0.5 transition-all duration-200 text-lg"
          >
            메인으로 돌아가기
          </Button>
        </div>

        {/* Footer */}
        <footer className="text-[#64748b] text-xs mt-16 pt-8 border-t border-[#94a3b8]/18">
          <div>
            © 2025 Hanwha (Concept Page). 본 페이지는 내부 제안용 시안입니다.
          </div>
        </footer>
      </div>
    </div>
  );
};

export default StablecoinIntroPage;
