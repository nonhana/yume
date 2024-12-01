import { Icons } from '@/components/icons/icon'
import { Card, CardContent } from '@/components/ui/card'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface GoToProps {
  href: string
  children: React.ReactNode
  icon: keyof typeof Icons.Theme
}

export function GoTo({ href, children, icon }: GoToProps) {
  const Icon = Icons.Theme[icon]

  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.2 },
      }}
    >
      <Link href={href}>
        <Card className="w-64 border-none bg-white/10 backdrop-blur-sm">
          <CardContent className="flex flex-col items-center justify-center gap-4 p-6">
            <Icon className="size-8 text-white" />
            <span className="text-lg font-medium text-white transition-colors hover:text-green-200">
              {children}
            </span>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  )
}
