import { OFFSET_Y, SECTION_Y } from '@/constants/page-config'
import { motion, useScroll, useTransform } from 'framer-motion'
import { IntroCard } from './intro-card'

export function CenterImg() {
  const { scrollY } = useScroll()

  const filterOpacity = useTransform(
    scrollY,
    [SECTION_Y - OFFSET_Y, SECTION_Y + OFFSET_Y],
    [0.25, 1],
  )

  const cardOpacity = useTransform(
    scrollY,
    [SECTION_Y - OFFSET_Y, SECTION_Y + OFFSET_Y],
    [1, 0],
  )

  const backgroundSize = useTransform(
    scrollY,
    [0, SECTION_Y],
    ['140%', '100%'],
  )

  return (
    <div className="sticky top-0 h-screen w-full">
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/imgs/bg.jpg")',
          backgroundSize,
        }}
      >
        <motion.div className="absolute inset-0 z-10 bg-black" style={{ opacity: filterOpacity }} />
      </motion.div>

      <motion.div className="flex-center relative z-20 h-full flex-col" style={{ opacity: cardOpacity }}>
        <IntroCard />
      </motion.div>
    </div>
  )
}
