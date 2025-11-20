import type { Metadata } from 'next'
import { Noto_Sans_KR } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import { FontSizeProvider } from '@/components/FontSizeProvider'
import { ContentWrapper } from '@/components/ContentWrapper'
import { Header } from '@/components/Header'

const notoSansKR = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-noto-sans-kr',
})

export const metadata: Metadata = {
  title: '신라 금관, 권력과 위신 | 국립경주박물관',
  description: '5~6세기 신라 귀족들의 화려한 금제 장신구 특별전',
  keywords: ['경주박물관', '신라', '금관', '금허리띠', '특별전', '국립경주박물관'],
  openGraph: {
    title: '신라 금관, 권력과 위신',
    description: '국립경주박물관 특별전 - 5~6세기 신라 귀족들의 화려한 금제 장신구',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={`${notoSansKR.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <FontSizeProvider>
            <Header />
            <ContentWrapper>
              <main className="min-h-screen">{children}</main>
            </ContentWrapper>
          </FontSizeProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
