import { Footer } from '@/layout/footer'
import { Header } from '@/layout/header'
import { Providers } from '@/providers/providers'
import '@/styles/index.css'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
