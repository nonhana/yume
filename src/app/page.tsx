import { Blogs } from './components/blogs'
import { Fcp } from './components/fcp'
import { Friends } from './components/friends'

export default function Home() {
  return (
    <div className="relative">
      <main>
        {/* <DynamicBg /> */}
        <Fcp />
        <Blogs />
        <Friends />
      </main>
    </div>
  )
}
