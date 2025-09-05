# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 기술 스택

- **Frontend Framework**: React + Vite + TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Charts**: shadcn/ui Chart components
- **Package Manager**: pnpm
- **Form & Validation**: react-hook-form, zod
- **Global State Management**: zustand
- **API Integration**: axios + @tanstack/react-query
- **Data Processing**: Client-side JavaScript (no backend)
- **Storage**: localStorage (temporary session data only)
- **UI/UX Animation, Interaction**: motion/react

## 개발 명령어

- `pnpm dev` - 개발 서버 실행 (http://localhost:5173 또는 다음 사용 가능한 포트)
- `pnpm build` - 프로덕션 빌드 (TypeScript 컴파일 후 Vite 빌드)
- `pnpm lint` - ESLint로 코드 검사
- `pnpm preview` - 빌드된 앱 미리보기
- `pnpm dlx shadcn@latest add [component-name]` - shadcn/ui 컴포넌트 추가

## 아키텍처 및 구조

### Path Mapping

- `@/*` 경로는 `./src/*`로 매핑됨
- TypeScript 및 Vite 모두에서 설정됨

### shadcn/ui 구성

- 테마: light theme 고정
- 스타일: new-york 스타일 사용
- 베이스 컬러: neutral
- CSS 변수 사용: true
- 아이콘 라이브러리: lucide-react
- 컴포넌트는 `@/components/ui`에 설치됨

### 프로젝트 구조

```
src/
├── components/     # React 컴포넌트 (shadcn/ui 컴포넌트는 components/ui/)
├── hooks/         # 커스텀 React 훅 (useApi.ts - API 호출 훅들)
├── lib/           # shadcn/ui 유틸리티 및 기타 라이브러리 (query-client.ts)
├── pages/         # 페이지 컴포넌트
├── providers/     # React 컨텍스트 프로바이더 (QueryProvider.tsx)
├── services/      # API 서비스 및 비즈니스 로직 (api.service.ts)
├── stores/        # Zustand 전역 상태 스토어
├── types/         # TypeScript 타입 정의 (api.types.ts - API 관련 타입)
├── utils/         # 유틸리티 함수
```

### TypeScript 설정

- 엄격한 타입 검사 활성화
- 미사용 로컬 변수/매개변수 검사
- 모든 switch 케이스 폴스루 검사

### Tailwind CSS v4 특징

- CSS 변수 기반 테마 시스템
- 다크 모드 지원 (`dark` 클래스 사용)
- 사용자 정의 반경 및 색상 변수 정의
- PostCSS 플러그인: `@tailwindcss/postcss` 사용
