import { Normal } from '@/layout/container/Normal'
import { Blogs } from './components/blogs'
import { Fcp } from './components/fcp'
import { Friends } from './components/friends'
import { PreLoad } from './components/pre-load'

export default function Home() {
  return (
    <PreLoad>
      <main>
        <Fcp />
        <Normal>
          {/* <div className="absolute start-0 top-0 z-0 h-2/3 w-full opacity-25" style={{ backgroundImage: 'linear-gradient(#1b398e, transparent)' }}></div> */}
          <div className="relative z-10">
            <Blogs />
            <Friends />
          </div>
        </Normal>
      </main>
    </PreLoad>
  )
}
