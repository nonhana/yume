'use client'

import { HoverTrigger } from './hover-trigger'
import { Logo } from './logo'

import { NavBar } from './nav-bar'

export function Header() {
  return (
    <header
      className="fixed inset-x-0 top-0 z-50 px-9 py-5 text-white mix-blend-difference backdrop-opacity-30"
    >
      <HoverTrigger className="flex-between">
        <Logo />
        <NavBar />
      </HoverTrigger>
    </header>
  )
}
