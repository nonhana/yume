import { Aboreto, Noto_Serif_SC, Rubik } from 'next/font/google'

const sansFont = Rubik({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-sans',
  display: 'swap',
})

const aboretoFont = Aboreto({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-aboreto',
  display: 'swap',
})

const serifFont = Noto_Serif_SC({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-serif',
  display: 'swap',
})

export { aboretoFont, sansFont, serifFont }
