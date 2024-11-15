import { Fcp } from './components/fcp'
import { PreLoad } from './components/pre-load'

export default function Home() {
  return (
    <PreLoad>
      <main>
        <Fcp />
        <div className="h-screen bg-black">
          rest of the page
        </div>
      </main>
    </PreLoad>
  )
}
