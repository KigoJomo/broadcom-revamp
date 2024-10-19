"use client"

import Link from 'next/link'
import React, {useState} from 'react'
import { RiMenu3Fill } from 'react-icons/ri'
import { MdChevronRight } from 'react-icons/md'
import { IoMdClose } from "react-icons/io";

const pages = [
  { name: 'home', href: '/' },
  { name: 'products & services', href: '/products' },
  { name: 'partners', href: '/partners' },
  { name: 'about us', href: '/about' },
  { name: 'contact us', href: '/contact' },
]

const Header = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className="w-full h-[10vh] sticky z-10 top-0 flex-shrink-0 px-4 md:px-12 flex items-center justify-between    bg-background shadow-2xl border-b border-purple">
      <Link href="/" className="logo">
        <h3 className='text-'>Broadcom</h3>
      </Link>

      <nav className={`absolute top-0 ${open ? 'left-0' : '-left-full'} transition-all ease-in duration-700 z-10 md:static h-screen md:h-fit w-[75vw]  md:w-fit py-6 px-8 md:p-0 flex flex-col md:flex-row md:items-center md:gap-12 bg-background md:bg-transparent shadow-2xl md:shadow-none`}>
        <div className="w-full flex items-center justify-between md:hidden logo mb-8">
          <h3>Broadcom</h3>
          <button className='close-menu' onClick={() => setOpen(!open)}>
            <IoMdClose size={24} />
          </button>
        </div>

        {pages.map((page, index) => (
          <Link
            key={index}
            href={page.href}
            className="flex items-center justify-between w-full md:w-fit border-b md:border-0 border-black border-opacity-25 py-4 md:py-0 hover:pl-8 md:hover:pl-0 transition-all duration-300" onClick={() => setOpen(false)}
          >
            <p className="capitalize md:uppercase text-foreground">
              {page.name}
            </p>
            <MdChevronRight className="md:hidden" size={24} />
          </Link>
        ))}
      </nav>

      <button className="menu-button flex md:hidden" onClick={() => setOpen(!open)}>
        <RiMenu3Fill size={32} />
      </button>
    </header>
  )
}

export default Header
