import React from "react";
import { Button } from "@/components/ui/button";
import { useAppStore } from "@/stores/appStore";
import { motion } from "framer-motion";

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
              보험사의 신뢰 ✨ 국채의 안정성 ✨ 블록체인의 투명성
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
            {/* Animated moving gradient circles */}
            <motion.div
              className="absolute w-[140px] h-[140px] bg-gradient-radial from-[#e5640e]/50 to-transparent rounded-full"
              animate={{
                x: [0, 400, 200, 100, 0],
                y: [0, 100, 300, 200, 0],
                opacity: [0.5, 0.2, 0.6, 0.3, 0.5],
                scale: [1, 0.8, 1.2, 0.9, 1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute w-[180px] h-[180px] bg-gradient-radial from-[#f97316]/45 to-transparent rounded-full"
              animate={{
                x: [0, 100, 300, 200, 0],
                y: [0, 200, 100, 300, 0],
                opacity: [0.45, 0.15, 0.55, 0.25, 0.45],
                scale: [1, 1.1, 0.7, 1.3, 1],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              }}
            />
            <motion.div
              className="absolute w-[120px] h-[120px] bg-gradient-radial from-[#e5640e]/40 to-transparent rounded-full"
              animate={{
                x: [0, 300, 160, 400, 0],
                y: [0, 160, 240, 120, 0],
                opacity: [0.4, 0.1, 0.5, 0.2, 0.4],
                scale: [1, 0.6, 1.4, 0.8, 1],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 4,
              }}
            />

            {/* Animated moving small rectangles */}
            <motion.div
              className="absolute w-4 h-4 bg-[#e5640e]/70 rounded-sm"
              animate={{
                x: [20, 400, 200, 100, 20],
                y: [30, 160, 300, 240, 30],
                opacity: [0.7, 0.3, 0.9, 0.5, 0.7],
                rotate: [0, 90, 180, 270, 360],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute w-3 h-6 bg-[#f97316]/65 rounded-sm"
              animate={{
                x: [300, 100, 240, 200, 300],
                y: [100, 240, 160, 300, 100],
                opacity: [0.65, 0.25, 0.8, 0.4, 0.65],
                rotate: [0, -90, -180, -270, -360],
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 3,
              }}
            />
            <motion.div
              className="absolute w-5 h-3 bg-[#e5640e]/60 rounded-sm"
              animate={{
                x: [200, 360, 60, 300, 200],
                y: [240, 80, 200, 160, 240],
                opacity: [0.6, 0.2, 0.75, 0.35, 0.6],
                rotate: [0, 45, 90, 135, 180],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 6,
              }}
            />
            <motion.div
              className="absolute w-2 h-8 bg-[#f97316]/55 rounded-sm"
              animate={{
                x: [240, 160, 300, 200, 240],
                y: [200, 280, 120, 240, 200],
                opacity: [0.55, 0.15, 0.7, 0.3, 0.55],
                rotate: [0, 180, 360, 180, 0],
              }}
              transition={{
                duration: 22,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 9,
              }}
            />
            <motion.div
              className="absolute w-3 h-3 bg-[#e5640e]/60 rounded-sm"
              animate={{
                x: [100, 300, 160, 360, 100],
                y: [200, 40, 260, 160, 200],
                opacity: [0.6, 0.2, 0.8, 0.3, 0.6],
                rotate: [0, 120, 240, 360, 0],
              }}
              transition={{
                duration: 16,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            />
            <motion.div
              className="absolute w-6 h-2 bg-[#f97316]/50 rounded-sm"
              animate={{
                x: [240, 60, 200, 100, 240],
                y: [160, 240, 80, 200, 160],
                opacity: [0.5, 0.15, 0.65, 0.25, 0.5],
                rotate: [0, -60, -120, -180, -240],
              }}
              transition={{
                duration: 19,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 5,
              }}
            />
            <motion.div
              className="absolute w-2 h-5 bg-[#e5640e]/65 rounded-sm"
              animate={{
                x: [160, 300, 120, 240, 160],
                y: [80, 200, 220, 120, 80],
                opacity: [0.65, 0.2, 0.75, 0.3, 0.65],
                rotate: [0, 72, 144, 216, 288],
              }}
              transition={{
                duration: 17,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 7,
              }}
            />
            <motion.div
              className="absolute w-4 h-2 bg-[#f97316]/45 rounded-sm"
              animate={{
                x: [160, 300, 80, 240, 160],
                y: [200, 120, 220, 160, 200],
                opacity: [0.45, 0.1, 0.6, 0.2, 0.45],
                rotate: [0, -45, -90, -135, -180],
              }}
              transition={{
                duration: 21,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 11,
              }}
            />
            <motion.div
              className="absolute w-1 h-6 bg-[#e5640e]/70 rounded-sm"
              animate={{
                x: [200, 80, 260, 160, 200],
                y: [120, 200, 40, 220, 120],
                opacity: [0.7, 0.25, 0.85, 0.35, 0.7],
                rotate: [0, 90, 180, 270, 360],
              }}
              transition={{
                duration: 14,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 13,
              }}
            />

            <div className="absolute bottom-3 right-3 bg-[#081427] border border-[#94a3b8]/20 text-[#cbd5e1] rounded-xl px-3 py-2 text-xs flex items-center gap-2 backdrop-blur-sm shadow-[0_10px_30px_rgba(2,8,23,0.55)]">
              <motion.div
                className="w-2 h-2 rounded-full bg-[#e5640e]"
                animate={{
                  opacity: [1, 0.3, 1],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
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
