# 경주박물관 금관 전시 모바일 브로셔

국립경주박물관 "신라 금관, 권력과 위신" 특별전시 모바일 브로셔 웹사이트

## 기술 스택

- Next.js 15 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- next-themes (다크모드)

## 시작하기

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인합니다.

### 빌드

```bash
npm run build
npm start
```

## 프로젝트 구조

```
gyeongju-brochure/
├── app/
│   ├── layout.tsx         # Root Layout
│   ├── page.tsx           # 메인 페이지
│   └── globals.css        # Global styles
├── components/
│   ├── Header.tsx         # 헤더 (로고 + 다크모드)
│   ├── DarkModeToggle.tsx # 다크모드 토글
│   ├── ThemeProvider.tsx  # 다크모드 Provider
│   ├── HeroSection.tsx    # Hero 섹션
│   ├── ExhibitionInfo.tsx # 전시 소개
│   ├── ArtifactCard.tsx   # 유물 카드
│   ├── GoldCrownGallery.tsx    # 금관 갤러리
│   ├── GoldBeltGallery.tsx     # 금허리띠 갤러리
│   └── VisitInfo.tsx      # 관람 안내
├── lib/
│   ├── data.ts            # 데이터 export
│   ├── types.ts           # TypeScript 타입
│   └── exhibition-data.json    # 전시 데이터
└── public/
    └── logo.jpg           # 경주박물관 로고
```

## 주요 기능

- ✅ 다크 모드 지원
- ✅ 모바일 최적화 (인스타그램 스타일)
- ✅ 큰 글자 (5060 세대 고려)
- ✅ 금관 및 금허리띠 갤러리
- ✅ 반응형 디자인
- ✅ Next.js Image 최적화

## 중요 안내

### 로고 파일
`public/logo.jpg` 파일을 추가해야 합니다. 경주박물관 로고 이미지를 이 위치에 배치하세요.

### 이미지 사용
이미지는 경주박물관 웹사이트에서 가져옵니다. 상업적 사용 전 저작권 확인이 필요합니다.

## 데이터 출처

[국립경주박물관 공식 페이지](https://gyeongju.museum.go.kr/_prog/bbs/?mode=V&site_dvs_cd=kor&menu_dvs_cd=0407&code=0403_2025&no=5378)
