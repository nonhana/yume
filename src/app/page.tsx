import { Fcp } from './components/fcp'
import { PreLoad } from './components/pre-load'

export default function Home() {
  return (
    <PreLoad>
      <main>
        <Fcp />
        <div className="h-screen bg-black">
          <p className="text-white mix-blend-difference">
            rest of the page
          </p>
        </div>
        <div className="h-screen bg-white">
          <p className="text-white mix-blend-difference">
            rest of the page
          </p>
        </div>
        <div className="h-screen bg-blue-300">
          <p className="text-white mix-blend-difference">
            rest of the page
          </p>
        </div>
      </main>
    </PreLoad>
  )
}
