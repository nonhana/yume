import { Blogs } from './components/blogs'
import { Fcp } from './components/fcp'
import { Friends } from './components/friends'

export default function Home() {
  return (
    <div className="bg-background text-foreground relative">
      <main>
        <Fcp />
        <Blogs />
        <Friends />
      </main>
    </div>
  )
}
