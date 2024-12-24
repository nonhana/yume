import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import { LogIn } from 'lucide-react'

// TODO: 打开模态框的时候禁止背景滚动
// fk lenis，接管了原生滚动导致关闭的时候header偏移问题复现

export function ClerkSign() {
  //   const lenis = useLenis()
  //   const [isModalOpen, setIsModalOpen] = useState(false)

  //   useEffect(() => {
  //     if (isModalOpen) {
  //       lenis?.stop()
  //     }
  //     else {
  //       lenis?.start()
  //     }
  //   }, [isModalOpen, lenis])

  //   useEffect(() => {
  //     const checkModalStatus = () => {
  //       const modalBackdrop = document.querySelector('.cl-modalBackdrop')
  //       setIsModalOpen(!!modalBackdrop)
  //     }

  //     checkModalStatus()

  //     const observer = new MutationObserver(checkModalStatus)

  //     observer.observe(document.body, { childList: true, subtree: true })

  //     return () => observer.disconnect()
  //   }, [])

  return (
    <>
      <SignedIn>
        <UserButton />
      </SignedIn>
      <SignedOut>
        <SignInButton
          mode="modal"
        >
          <LogIn className="size-5" />
        </SignInButton>
      </SignedOut>
    </>
  )
}
