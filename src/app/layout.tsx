import { Providers } from '@/providers/providers'
import { comicFont, sansFont, serifFont } from '../config/fonts'
import '@/styles/index.css'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body
        className={`${sansFont.variable} ${comicFont.variable} ${serifFont.variable} antialiased`}
      >
        <Providers>
          {/* <Header></Header> */}
          {children}
        </Providers>
      </body>
    </html>
  )
}
