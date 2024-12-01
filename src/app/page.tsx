import { BlogSection } from './components/blog-section'
import { Fcp } from './components/fcp'
import { PreLoad } from './components/pre-load'

export default function Home() {
  return (
    <PreLoad>
      <main>
        <Fcp />
        <BlogSection />
        <section className="h-screen bg-white">

        </section>
      </main>
    </PreLoad>
  )
}
