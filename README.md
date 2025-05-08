# Simple IoT Dashboard

IoT 기기 상태 모니터링 및 제어를 위한 대시보드

## 기술 스택

- React
- Tailwind CSS
- TypeScript
- CoreUI
- TanStack Query (React Query)
- Recharts
- Zustand
- Axios
- Vitest

## 주요 기능

### 1. 로그인

- JWT 기반 인증 시스템
- 로그인 성공 시 토큰 저장 및 대시보드로 자동 이동
- 모든 API 요청에 자동으로 인증 토큰 포함

### 2. 기기 상태 모니터링 대시보드

- 데이터 시각화 (recharts)
- 최근 10분간의 데이터 표시
- 다음 상태 키 모니터링:
  - wh40batt
  - baromrelin
  - soilad1
  - rainratein
- Interval 값을 통한 데이터 업데이트 간격 표시
- 실시간 데이터 자동 업데이트

### 3. 전구 제어 대시보드

- 슬라이더를 통한 밝기 제어 (0-100%)
- 밝기 값 표시
- 직관적인 전구 시각화

## 설치 및 실행

```bash
# 의존성 설치
yarn install

# 개발 서버 실행
yarn dev

# 빌드
yarn build
```

## 환경 변수 설정

`.env` 파일을 생성하고 다음 변수를 설정하세요:

```env
VITE_API_URL=your_api_url
VITE_DEVICE_ID=your_device_id
```

## 프로젝트 구조

```
src/
├── components/      # 재사용 가능한 컴포넌트
├── pages/           # 페이지 컴포넌트
├── services/        # API 서비스
├── state/           # 서버 상태 관리
├── store/           # Zustand 스토어 (클라이언트 상태 관리)
├── types/           # TypeScript 타입 정의
└── utils/           # 유틸리티 함수
```

## 라이브러리 사용 근거

### Tailwind CSS

- 다양한 유틸리티 기반 CSS 프레임워크로 빠른 UI 개발 가능
- CoreUI와 함께 사용하여 커스텀 스타일링 구현하기 위해 사용

### TanStack Query (React Query)

- 서버 상태 관리에 최적화된 라이브러리 (클라이언트 상태와 서버 상태를 명확하게 분리)
- API 요청 상태(로딩, 에러, 성공) 관리 용이하다

### Recharts

- 커스터마이징이 용이하고 다양한 차트 타입 지원
- SVG 기반으로 고품질 그래픽 렌더링

### Zustand

- 간단하고 직관적인 상태 관리 API
- Redux보다 보일러플레이트가 적고 학습 곡선이 낮아 사용
- TypeScript와의 높은 호환성
- 작은 번들 사이즈로 성능 최적화

### Axios

- Promise 기반의 HTTP 클라이언트
- 요청/응답 인터셉터를 통한 토큰 관리 용이
- 자동 JSON 변환

### Vitest

- 빠르고 효율적인 테스트 코드를 작성하기 위해 사용
- 설정이 간단하고 최적화가 잘 되어있음
