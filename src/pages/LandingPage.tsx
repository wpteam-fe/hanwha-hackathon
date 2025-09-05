import React from "react";
import { Button } from "@/components/ui/button";
import { useAppStore } from "@/stores/appStore";

const LandingPage: React.FC = () => {
  const setCurrentStep = useAppStore((state) => state.setCurrentStep);

  const handleStartAnalysis = () => {
    setCurrentStep("auth");
  };

  return (
    <div className="min-h-screen bg-black text-white font-['Pretendard']">
      {/* Header */}
      <header className="bg-[#141414] fixed top-0 left-0 right-0 z-50 h-16">
        <div className="max-w-[1100px] mx-auto px-5">
          <div className="flex justify-between items-center h-16 py-3">
            <div
              className="flex items-center h-[25px] cursor-pointer"
              onClick={() => setCurrentStep("landing")}
            >
              <img
                src="/images/ic_logo.svg"
                alt="HSD Life 로고"
                className="w-[100px] h-[25px] object-contain"
              />
            </div>
            <div className="flex items-center gap-4">
              {/* User Profile */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-semibold">김</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-white text-sm font-medium">김투자</span>
                  <span className="text-gray-400 text-xs">kim@hanwha.com</span>
                </div>
              </div>

              {/* Menu Button */}
              <Button
                onClick={() =>
                  window.open("https://ai-hackathon-blond.vercel.app", "_blank")
                }
                className="w-[160px] h-10 bg-transparent text-white border border-white rounded-lg text-[13px] font-normal hover:bg-white hover:text-[#141414] transition-all duration-200"
              >
                AI 자산 분배 현황
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-black h-[600px] flex items-center justify-center text-center mt-16 relative overflow-hidden">
        {/* Video Background */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-10"
          autoPlay
          muted
          loop
        >
          <source src="/videos/video_1.mp4" type="video/mp4" />
        </video>
        <div className="absolute top-0 left-0 w-full h-full bg-black/30 z-10"></div>

        <div className="max-w-[1100px] mx-auto px-5">
          <div className="max-w-[600px] mx-auto relative z-20">
            <h1 className="text-[40px] font-bold mb-4 leading-[52px] text-center text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
              HSD Life. 당신의 생애를 설계합니다
            </h1>
            <p className="text-xl mb-6 leading-7 text-center text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
              삶의 모든 순간을 함께하는 안정된 투자와 연금 관리
            </p>
            <Button
              onClick={handleStartAnalysis}
              className="bg-[#141414] text-white border-none px-5 h-14 text-base font-bold rounded-xl hover:bg-[#555] transition-colors duration-200"
            >
              AI 자산 분석 시작하기
            </Button>
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="py-[120px] text-center bg-black">
        <div className="max-w-[1100px] mx-auto px-5">
          <h2 className="text-[40px] font-bold text-white mb-6 leading-[52px] text-center">
            왜 한화 스테이블일까요?
          </h2>
          <p className="text-xl text-[#868E96] mb-[29px] leading-7 text-center">
            한화 스테이블달러(HSD)는 안정성과 신뢰를 기반으로, 글로벌 자산
            투자와 생애 설계의 출발점이 됩니다
          </p>
          <Button className="bg-[#141414] text-white border-none w-60 h-14 text-base font-bold rounded-xl mb-[60px] hover:bg-[#555] transition-colors duration-200">
            한화 스테이블 더 알아보기
          </Button>

          <div className="flex justify-between items-center gap-10 max-w-[1100px] mx-auto">
            <div className="text-center w-80 flex flex-col items-center gap-6">
              <div className="w-20 h-20 rounded-full flex items-center justify-center relative overflow-hidden">
                <img
                  src="/images/ic_dollar.png"
                  alt="안정된 가치 아이콘"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-bold text-white leading-7 mb-0">
                안정된 가치
              </h3>
              <p className="text-[15px] text-[#ADB5BD] leading-[22px] w-80">
                달러와 1:1로 연동되는 스테이블 자산으로, 언제나 변함없는 기준이
                됩니다
              </p>
            </div>
            <div className="text-center w-80 flex flex-col items-center gap-6">
              <div className="w-20 h-20 rounded-full flex items-center justify-center relative overflow-hidden">
                <img
                  src="/images/ic_hanwha.png"
                  alt="신뢰의 한화 아이콘"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-bold text-white leading-7 mb-0">
                신뢰의 한화
              </h3>
              <p className="text-[15px] text-[#ADB5BD] leading-[22px] w-80">
                한화 금융그룹의 안정성과 글로벌 네트워크를 바탕으로 안전하게
                설계되었습니다
              </p>
            </div>
            <div className="text-center w-80 flex flex-col items-center gap-6">
              <div className="w-20 h-20 rounded-full flex items-center justify-center relative overflow-hidden">
                <img
                  src="/images/ic_robot.png"
                  alt="투자의 출발점 아이콘"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-bold text-white leading-7 mb-0">
                투자의 출발점
              </h3>
              <p className="text-[15px] text-[#ADB5BD] leading-[22px] w-80">
                HSD는 모든 글로벌 자산 투자와 AI 포트폴리오 설계의 기본 단위가
                됩니다
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Life Moments Section */}
      <section className="py-[120px] bg-black">
        <div className="max-w-[1100px] mx-auto px-5">
          <h2 className="text-[40px] font-bold text-white leading-[52px] text-left mb-8">
            당신의 삶, 그 순간마다 함께합니다
          </h2>

          <div className="flex gap-5 justify-between items-start w-[1100px]">
            <div className="w-[340px] flex flex-col gap-5 text-left">
              <div className="w-[340px] h-60 bg-[#e9ecef] rounded-lg overflow-hidden relative">
                <img
                  src="/images/img_people_01.png"
                  alt="30대 시작과 기반의 시기"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="flex flex-col gap-[11px]">
                <h3 className="text-[22px] font-bold text-white leading-[30px]">
                  시작과 기반의 시기, 30대
                </h3>
                <p className="text-[17px] text-[#ADB5BD] leading-6">
                  AI가 안정적인 기초를 지키면서도, 성장 자산에 도전할 수 있도록
                  도와줍니다.
                </p>
              </div>
            </div>
            <div className="w-[340px] flex flex-col gap-5 text-left">
              <div className="w-[340px] h-60 bg-[#e9ecef] rounded-lg overflow-hidden relative">
                <img
                  src="/images/img_people_02.png"
                  alt="40대 성장의 시기"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="flex flex-col gap-[11px]">
                <h3 className="text-[22px] font-bold text-white leading-[30px]">
                  성장의 시기, 40대
                </h3>
                <p className="text-[17px] text-[#ADB5BD] leading-6">
                  AI가 공격적이면서도 균형 잡힌 전략으로 미래 가치를 키워줍니다.
                </p>
              </div>
            </div>
            <div className="w-[340px] flex flex-col gap-5 text-left">
              <div className="w-[340px] h-60 bg-[#e9ecef] rounded-lg overflow-hidden relative">
                <img
                  src="/images/img_people_03.png"
                  alt="50대 안정의 시기"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="flex flex-col gap-[11px]">
                <h3 className="text-[22px] font-bold text-white leading-[30px]">
                  안정의 시기, 50대
                </h3>
                <p className="text-[17px] text-[#ADB5BD] leading-6">
                  채권과 스테이블 자산 중심의 포트폴리오로, 든든한 노후를 준비할
                  수 있어요.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Section */}
      <section className="py-[120px] bg-black">
        <div className="max-w-[1100px] mx-auto px-5">
          <div className="flex flex-col gap-6 items-start mb-[60px]">
            <h2 className="text-[40px] font-bold text-white leading-[52px] text-left">
              HSD Life, AI와 함께하는 생애 설계
            </h2>
            <p className="text-xl text-[#868E96] leading-7 text-left">
              AI 맞춤 포트폴리오로 안정과 성장을 동시에 시작해 보세요
            </p>
            <Button
              onClick={handleStartAnalysis}
              className="bg-[#141414] text-white border-none w-[233px] h-14 text-base font-bold rounded-xl hover:bg-[#333] transition-colors duration-200"
            >
              AI 맞춤 포트폴리오 확인하기
            </Button>
          </div>

          <div className="w-full max-w-[1100px] h-[462px] bg-[#e9ecef] rounded-xl mx-auto mb-10 relative overflow-hidden">
            <video
              className="w-full h-full object-cover rounded-xl block"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/videos/video_2.mp4" type="video/mp4" />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#666] text-base text-center">
                비디오를 재생할 수 없습니다.
              </div>
            </video>
          </div>

          <div className="flex flex-col gap-2 max-w-[600px] mx-auto text-center">
            <p className="text-sm text-[#666] leading-[1.6] m-0">
              한화 스테이블은 당신의 나이, 자산, 목표에 맞춰 생애주기별로 투자
              전략을 설계해 드립니다.
            </p>
            <p className="text-sm text-[#666] leading-[1.6] m-0">
              AI 코파일럿이 시장 변화에 맞춰 자산 배분을 조정하고, 안정과 성장을
              동시에 이끌어갑니다.
            </p>
          </div>
        </div>
      </section>

      {/* Pension Section */}
      <section className="py-[200px] bg-black">
        <div className="max-w-[1100px] mx-auto px-5">
          <div className="flex flex-col gap-[15px] items-start mb-16">
            <h2 className="text-[40px] font-bold text-white leading-[52px] text-left">
              내 연금, 지금 한 번에 확인하세요
            </h2>
            <p className="text-xl text-[#868E96] leading-7 text-left">
              국민연금부터 개인연금, 퇴직연금까지. 카카오톡 인증 한 번으로 모든
              연금을 통합 조회합니다.
            </p>
          </div>

          <div className="flex justify-between items-center gap-10 max-w-[1100px] mx-auto">
            <div className="w-[229px] flex flex-col items-center gap-6 text-center">
              <div className="w-[120px] h-[120px] rounded-full flex items-center justify-center relative overflow-hidden">
                <img
                  src="/images/img_section_5_1.png"
                  alt="연금 정보 통합 조회"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold text-white leading-7">
                  연금 정보 통합 조회
                </h3>
                <p className="text-[15px] text-[#ADB5BD] leading-[22px] w-[229px]">
                  여러 금융기관에 흩어진 연금을 한눈에 확인해요
                </p>
              </div>
            </div>
            <div className="w-[229px] flex flex-col items-center gap-6 text-center">
              <div className="w-[120px] h-[120px] rounded-full flex items-center justify-center relative overflow-hidden">
                <img
                  src="/images/img_section_5_2.png"
                  alt="중복·휴면 계좌 정리"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold text-white leading-7">
                  중복·휴면 계좌 정리
                </h3>
                <p className="text-[15px] text-[#ADB5BD] leading-[22px] w-[229px]">
                  방치된 소액 계좌까지 찾아내어 자산의 사각지대를 해소해요
                </p>
              </div>
            </div>
            <div className="w-[229px] flex flex-col items-center gap-6 text-center">
              <div className="w-[120px] h-[120px] rounded-full flex items-center justify-center relative overflow-hidden">
                <img
                  src="/images/img_section_5_3.png"
                  alt="수익률·비용 비교"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold text-white leading-7">
                  수익률·비용 비교
                </h3>
                <p className="text-[15px] text-[#ADB5BD] leading-[22px] w-[229px]">
                  상품별 성과와 수수료를 비교해 비효율을 없애요
                </p>
              </div>
            </div>
            <div className="w-[229px] flex flex-col items-center gap-6 text-center">
              <div className="w-[120px] h-[120px] rounded-full flex items-center justify-center relative overflow-hidden">
                <img
                  src="/images/img_section_5_4.png"
                  alt="세제·이관 지원"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold text-white leading-7">
                  세제·이관 지원
                </h3>
                <p className="text-[15px] text-[#ADB5BD] leading-[22px] w-[229px]">
                  세액공제 내역과 이관 효과까지 분석해 최적의 의사결정을
                  돕습니다
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Section */}
      <section className="py-[120px] bg-black">
        <div className="max-w-[1100px] mx-auto px-5">
          <div className="flex flex-col gap-[15px] items-start mb-20">
            <h2 className="text-[40px] font-bold text-white leading-[52px] text-left">
              나의 노후, 지금 미리 그려보세요
            </h2>
            <p className="text-xl text-[#868E96] leading-7 text-left mb-5">
              AI가 은퇴 후 예상 수령액과 목표 생활비를 비교해 부족분과 여유분을
              계산합니다.
            </p>
            <div className="flex gap-8 items-center">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#F37521]"></div>
                <span className="text-sm text-[#ADB5BD] leading-5">
                  HSD 스테이블 투자로 체계적 자산 관리를 하는 사람
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#BBDAF9]"></div>
                <span className="text-sm text-[#ADB5BD] leading-5">
                  일반적인 퇴직연금만으로 노후를 준비하는 사람
                </span>
              </div>
            </div>
          </div>

          <div className="w-full max-w-[1100px] mx-auto relative">
            <svg
              viewBox="0 0 1100 478"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-auto max-h-[478px] overflow-visible"
            >
              {/* Define gradient */}
              <defs>
                <linearGradient
                  id="areaGradient"
                  x1="0%"
                  y1="0%"
                  x2="0%"
                  y2="100%"
                >
                  <stop
                    offset="0%"
                    style={{ stopColor: "#F37521", stopOpacity: 0.3 }}
                  />
                  <stop
                    offset="100%"
                    style={{ stopColor: "#F37521", stopOpacity: 0 }}
                  />
                </linearGradient>
              </defs>

              {/* Chart background */}
              <rect x="0" y="0" width="1100" height="428" fill="#000" rx="12" />

              {/* Grid lines */}
              <g stroke="#e9ecef" strokeWidth="1" strokeOpacity="0.4">
                <line x1="0" y1="85.6" x2="1100" y2="85.6" />
                <line x1="0" y1="171.2" x2="1100" y2="171.2" />
                <line x1="0" y1="256.8" x2="1100" y2="256.8" />
                <line x1="0" y1="342.4" x2="1100" y2="342.4" />
              </g>

              {/* Y-axis labels */}
              <g
                fill="#fff"
                fontFamily="Pretendard"
                fontSize="12"
                fontWeight="500"
                fillOpacity="0.4"
              >
                <text x="20" y="83" textAnchor="start">
                  10억원
                </text>
                <text x="20" y="171" textAnchor="start">
                  7.5억원
                </text>
                <text x="20" y="259" textAnchor="start">
                  5억원
                </text>
                <text x="20" y="347" textAnchor="start">
                  2.5억원
                </text>
                <text x="20" y="390" textAnchor="start">
                  0원
                </text>
              </g>

              {/* Regular retirement fund curve (without investment) */}
              <path
                d="M 137.5 390 Q 275 385, 412.5 380 Q 550 375, 687.5 370 Q 825 365, 1100 360"
                fill="none"
                stroke="#BBDAF9"
                strokeWidth="2"
                strokeLinecap="round"
              />

              {/* Asset growth curve */}
              <path
                d="M 137.5 365 Q 275 330, 412.5 270 Q 550 210, 687.5 170 Q 825 110, 1100 70"
                fill="none"
                stroke="#F37521"
                strokeWidth="2"
                strokeLinecap="round"
              />

              {/* Age labels */}
              <g
                fill="#fff"
                fontFamily="Pretendard"
                fontSize="18"
                fontWeight="700"
                fillOpacity="0.4"
              >
                <text x="137.5" y="468" textAnchor="middle">
                  30대
                </text>
                <text x="412.5" y="468" textAnchor="middle">
                  40대
                </text>
                <text x="687.5" y="468" textAnchor="middle">
                  50대
                </text>
                <text x="962.5" y="468" textAnchor="middle">
                  60대
                </text>
              </g>

              {/* Hover areas for each age section */}
              <rect
                className="age-hover-area"
                data-age="30"
                x="0"
                y="0"
                width="275"
                height="428"
                fill="transparent"
              />
              <rect
                className="age-hover-area"
                data-age="40"
                x="275"
                y="0"
                width="275"
                height="428"
                fill="transparent"
              />
              <rect
                className="age-hover-area"
                data-age="50"
                x="550"
                y="0"
                width="275"
                height="428"
                fill="transparent"
              />
              <rect
                className="age-hover-area"
                data-age="60"
                x="825"
                y="0"
                width="275"
                height="428"
                fill="transparent"
              />

              {/* Investment description boxes */}
              <g
                className="investment-tooltip tooltip-30"
                fill="#fff"
                opacity="0"
              >
                <rect x="22.5" y="238" width="280" height="146" rx="12" />
              </g>
              <g
                className="investment-tooltip tooltip-40"
                fill="#fff"
                opacity="0"
              >
                <rect x="297.5" y="150" width="280" height="146" rx="12" />
              </g>
              <g
                className="investment-tooltip tooltip-50"
                fill="#fff"
                opacity="0"
              >
                <rect x="572.5" y="50" width="280" height="146" rx="12" />
              </g>
              <g
                className="investment-tooltip tooltip-60"
                fill="#fff"
                opacity="0"
              >
                <rect x="820" y="-50" width="280" height="146" rx="12" />
              </g>

              {/* Orange dots for hover effect */}
              <g className="hover-dots">
                <circle
                  className="dot-30"
                  cx="137.5"
                  cy="365"
                  r="6"
                  fill="#F37521"
                  opacity="0"
                />
                <circle
                  className="dot-40"
                  cx="412.5"
                  cy="270"
                  r="6"
                  fill="#F37521"
                  opacity="0"
                />
                <circle
                  className="dot-50"
                  cx="687.5"
                  cy="170"
                  r="6"
                  fill="#F37521"
                  opacity="0"
                />
                <circle
                  className="dot-60"
                  cx="1100"
                  cy="70"
                  r="6"
                  fill="#F37521"
                  opacity="0"
                />
              </g>

              {/* Blue dots for hover effect (regular retirement fund) */}
              <g className="hover-gray-dots">
                <circle
                  className="gray-dot-30"
                  cx="137.5"
                  cy="390"
                  r="6"
                  fill="#BBDAF9"
                  opacity="0"
                />
                <circle
                  className="gray-dot-40"
                  cx="412.5"
                  cy="380"
                  r="6"
                  fill="#BBDAF9"
                  opacity="0"
                />
                <circle
                  className="gray-dot-50"
                  cx="687.5"
                  cy="370"
                  r="6"
                  fill="#BBDAF9"
                  opacity="0"
                />
                <circle
                  className="gray-dot-60"
                  cx="1100"
                  cy="360"
                  r="6"
                  fill="#BBDAF9"
                  opacity="0"
                />
              </g>

              {/* Investment descriptions */}
              <g className="investment-text tooltip-30" opacity="0">
                <text
                  x="34.5"
                  y="268"
                  textAnchor="start"
                  fill="#141414"
                  fontFamily="Pretendard"
                  fontSize="18"
                  fontWeight="700"
                >
                  30대
                </text>
                <text
                  x="34.5"
                  y="296"
                  textAnchor="start"
                  fill="#868e96"
                  fontFamily="Pretendard"
                  fontSize="14"
                >
                  성장형 투자와 적극적 자산 증식을 지향해요.
                </text>
                <text
                  x="34.5"
                  y="324"
                  textAnchor="start"
                  fill="#868e96"
                  fontFamily="Pretendard"
                  fontSize="15"
                >
                  스테이블 투자
                </text>
                <text
                  x="280"
                  y="324"
                  textAnchor="end"
                  fill="#F37521"
                  fontFamily="Pretendard"
                  fontSize="15"
                  fontWeight="700"
                >
                  5천만 원
                </text>
                <text
                  x="34.5"
                  y="348"
                  textAnchor="start"
                  fill="#868e96"
                  fontFamily="Pretendard"
                  fontSize="15"
                >
                  일반적 퇴직연금
                </text>
                <text
                  x="280"
                  y="348"
                  textAnchor="end"
                  fill="#BBDAF9"
                  fontFamily="Pretendard"
                  fontSize="15"
                  fontWeight="700"
                >
                  3천만 원
                </text>
              </g>
              <g className="investment-text tooltip-40" opacity="0">
                <text
                  x="309.5"
                  y="180"
                  textAnchor="start"
                  fill="#141414"
                  fontFamily="Pretendard"
                  fontSize="18"
                  fontWeight="700"
                >
                  40대
                </text>
                <text
                  x="309.5"
                  y="208"
                  textAnchor="start"
                  fill="#868e96"
                  fontFamily="Pretendard"
                  fontSize="14"
                >
                  균형형 투자와 안정적 수익 추구를 지향해요.
                </text>
                <text
                  x="309.5"
                  y="236"
                  textAnchor="start"
                  fill="#868e96"
                  fontFamily="Pretendard"
                  fontSize="15"
                >
                  스테이블 투자
                </text>
                <text
                  x="555"
                  y="236"
                  textAnchor="end"
                  fill="#F37521"
                  fontFamily="Pretendard"
                  fontSize="15"
                  fontWeight="700"
                >
                  3억 원
                </text>
                <text
                  x="309.5"
                  y="260"
                  textAnchor="start"
                  fill="#868e96"
                  fontFamily="Pretendard"
                  fontSize="15"
                >
                  일반적 퇴직연금
                </text>
                <text
                  x="555"
                  y="260"
                  textAnchor="end"
                  fill="#BBDAF9"
                  fontFamily="Pretendard"
                  fontSize="15"
                  fontWeight="700"
                >
                  7천만 원
                </text>
              </g>
              <g className="investment-text tooltip-50" opacity="0">
                <text
                  x="584.5"
                  y="80"
                  textAnchor="start"
                  fill="#141414"
                  fontFamily="Pretendard"
                  fontSize="18"
                  fontWeight="700"
                >
                  50대
                </text>
                <text
                  x="584.5"
                  y="108"
                  textAnchor="start"
                  fill="#868e96"
                  fontFamily="Pretendard"
                  fontSize="14"
                >
                  보수형 투자와 원금 보존 중심을 지향해요.
                </text>
                <text
                  x="584.5"
                  y="136"
                  textAnchor="start"
                  fill="#868e96"
                  fontFamily="Pretendard"
                  fontSize="15"
                >
                  스테이블 투자
                </text>
                <text
                  x="830"
                  y="136"
                  textAnchor="end"
                  fill="#F37521"
                  fontFamily="Pretendard"
                  fontSize="15"
                  fontWeight="700"
                >
                  6억 원
                </text>
                <text
                  x="584.5"
                  y="160"
                  textAnchor="start"
                  fill="#868e96"
                  fontFamily="Pretendard"
                  fontSize="15"
                >
                  일반적 퇴직연금
                </text>
                <text
                  x="830"
                  y="160"
                  textAnchor="end"
                  fill="#BBDAF9"
                  fontFamily="Pretendard"
                  fontSize="15"
                  fontWeight="700"
                >
                  1억 원
                </text>
              </g>
              <g className="investment-text tooltip-60" opacity="0">
                <text
                  x="832"
                  y="-20"
                  textAnchor="start"
                  fill="#141414"
                  fontFamily="Pretendard"
                  fontSize="18"
                  fontWeight="700"
                >
                  60대
                </text>
                <text
                  x="832"
                  y="8"
                  textAnchor="start"
                  fill="#868e96"
                  fontFamily="Pretendard"
                  fontSize="14"
                >
                  초보수형 투자와 안전 자산 위주를 지향해요.
                </text>
                <text
                  x="832"
                  y="36"
                  textAnchor="start"
                  fill="#868e96"
                  fontFamily="Pretendard"
                  fontSize="15"
                >
                  스테이블 투자
                </text>
                <text
                  x="1078"
                  y="36"
                  textAnchor="end"
                  fill="#F37521"
                  fontFamily="Pretendard"
                  fontSize="15"
                  fontWeight="700"
                >
                  9억 원
                </text>
                <text
                  x="832"
                  y="60"
                  textAnchor="start"
                  fill="#868e96"
                  fontFamily="Pretendard"
                  fontSize="15"
                >
                  일반적 퇴직연금
                </text>
                <text
                  x="1078"
                  y="60"
                  textAnchor="end"
                  fill="#BBDAF9"
                  fontFamily="Pretendard"
                  fontSize="15"
                  fontWeight="700"
                >
                  1.5억 원
                </text>
              </g>
            </svg>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-[240px] text-center overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-10"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/videos/video_3.mp4" type="video/mp4" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#666] text-base text-center">
            비디오를 재생할 수 없습니다.
          </div>
        </video>
        <div className="relative z-20 w-full h-full">
          <div className="max-w-[1100px] mx-auto px-5">
            <div className="flex flex-col items-center gap-10">
              <h2 className="text-[40px] font-bold text-white leading-[52px] drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                삶의 모든 순간을 설계하는 힘
              </h2>
              <p className="text-xl text-white leading-7 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                한화 스테이블, HSD Life. 당신의 생애를 설계합니다.
              </p>
              <Button
                onClick={handleStartAnalysis}
                className="bg-[#141414] text-white border-none w-40 h-14 text-base font-bold rounded-xl hover:bg-[#333] transition-colors duration-200"
              >
                투자 시작하기
              </Button>
            </div>
          </div>
        </div>
      </footer>

      {/* Bottom Footer */}
      <div className="bg-black py-10">
        <div className="max-w-[1100px] mx-auto px-5">
          <div className="flex flex-col items-center gap-3">
            <img
              src="/images/ic_logo.svg"
              alt="HSD Life 로고"
              className="w-[120px] h-[30px] object-contain"
            />
            <p className="text-[13px] text-white leading-[18px] text-center">
              Ⓒ Hanwha Life Insurance Co.,Ltd. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
