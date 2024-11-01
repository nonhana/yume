import { Header } from '@/layout/header'
import { ReactLenis } from 'lenis/react'
import { Fcp } from './components/fcp'

export default function Home() {
  return (
    <main className="bg-neutral-50">
      <ReactLenis root>
        <Header></Header>
        <Fcp />
        <div className="h-screen bg-black">
          rest of the page
        </div>
      </ReactLenis>
    </main>
  )
}
