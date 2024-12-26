import { clerkModalAtom } from '@/atoms/clerk'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import { useAtom } from 'jotai'
import { LogIn } from 'lucide-react'
import { useEffect } from 'react'

export function ClerkSign() {
  const [_isModalOpen, setIsModalOpen] = useAtom(clerkModalAtom)

  useEffect(() => {
    const checkModalStatus = () => {
      const modalBackdrop = document.querySelector('.cl-modalBackdrop')
      setIsModalOpen(!!modalBackdrop)
    }

    checkModalStatus()

    const observer = new MutationObserver(checkModalStatus)

    observer.observe(document.body, { childList: true, subtree: true })

    return () => observer.disconnect()
  }, [])

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
