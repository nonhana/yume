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
          <Blogs />
          <Friends />
        </Normal>
      </main>
    </PreLoad>
  )
}
