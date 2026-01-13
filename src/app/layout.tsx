import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import { ThemeProvider } from '@/components/providers'
import Header from '@/components/header'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'My Study Notes',
  description: '프론트엔드 개발자로서의 성장 과정을 기록하는 공간입니다',
  keywords: ['프론트엔드', '개발', '블로그', 'JavaScript', 'React', 'Vue.js'],
  authors: [{ name: 'hastella' }],
  openGraph: {
    title: 'My Study Notes',
    description: '프론트엔드 개발자로서의 성장 과정을 기록하는 공간입니다',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
