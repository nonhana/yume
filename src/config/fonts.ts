import { Noto_Serif_SC } from 'next/font/google'
import localFont from 'next/font/local'

const sansFont = localFont({
  src: '../../public/fonts/SNPro-VariableRegular.ttf',
  variable: '--font-sans',
  display: 'swap',
})

const serifFont = Noto_Serif_SC({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-serif',
  display: 'swap',
})

export { sansFont, serifFont }
