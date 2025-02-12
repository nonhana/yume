import { clerkModalAtom } from "@/atoms/clerk"
import {
  SignedIn,
  SignedOut,
  SignInButton,
  useClerk,
  UserButton,
} from "@clerk/nextjs"
import { useAtom } from "jotai"
import { Loader2, LogIn } from "lucide-react"
import { useEffect } from "react"

export function ClerkSign() {
  const [_isModalOpen, setIsModalOpen] = useAtom(clerkModalAtom)
  const { loaded } = useClerk()

  useEffect(() => {
    const checkModalStatus = () => {
      const modalBackdrop = document.querySelector(".cl-modalBackdrop")
      setIsModalOpen(!!modalBackdrop)
    }

    checkModalStatus()

    const observer = new MutationObserver(checkModalStatus)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => observer.disconnect()
  }, [setIsModalOpen])

  if (!loaded) {
    return <Loader2 className='size-5 animate-spin' />
  }

  return (
    <div className='flex-center size-5'>
      <SignedIn>
        <UserButton />
      </SignedIn>
      <SignedOut>
        <SignInButton mode='modal'>
          <LogIn className='size-5' />
        </SignInButton>
      </SignedOut>
    </div>
  )
}
