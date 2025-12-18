import type { Metadata } from 'next';
import './globals.css';

const siteName = '아무거나 - 점심 메뉴 추천';
const siteDescription = '고민 끝! 현재 위치 기반으로 주변 맛집을 찾아드립니다. 점심 메뉴 선택의 고민을 해결해드려요.';
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://lunch.example.com';
const ogImage = `${siteUrl}/icons/lunch-og.png`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: [
    '점심 메뉴 추천',
    '맛집 추천',
    '아무거나',
    '점심 고민',
    '주변 맛집',
    '위치 기반 맛집',
    '카카오맵',
    '음식점 찾기',
  ],
  authors: [{ name: 'Lunch Team' }],
  creator: 'Lunch Team',
  publisher: 'Lunch Team',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: siteUrl,
    siteName,
    title: siteName,
    description: siteDescription,
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: '아무거나 - 점심 메뉴 추천 서비스',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteName,
    description: siteDescription,
    images: [ogImage],
  },
  verification: {
    google: 'mJkJTBBd_7dbU9mLZXwirvRk_8r34RENokY5OZPTz4A',
    other: {
      'naver-site-verification': ['61559f9445f6cb441cb55cf213162651e76d8005'],
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: '/icons/lunch-og.png',
    shortcut: '/icons/lunch-og.png',
    apple: '/icons/lunch-og.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  );
}
