'use client'

import { HoverTrigger } from './hover-trigger'
import { Logo } from './logo'

import { NavBar } from './nav-bar'

export function Header() {
  return (
    <header
      className="flex-between fixed inset-x-0 top-0 z-50 bg-transparent px-9 py-5  backdrop-opacity-30"
      style={{ mixBlendMode: 'difference', color: 'white' }}
    >
      <HoverTrigger>
        <Logo />
      </HoverTrigger>
      <HoverTrigger>
        <NavBar />
      </HoverTrigger>
    </header>
  )
}
