import Link from 'next/link'
import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

const CustomLink = ({ href, text, className, arrow=true }) => {
  return (
    <Link
      href={href}
      className={`capitalize bg-purple px-4 py-2 w-fit text-lg flex items-center gap-8 hover:shadow-2xl transition-all duration-300 ${className}`}
    >
      {text}
      {arrow && <FaArrowRightLong size={24} className="text-background" />}
    </Link>
  )
}

export default CustomLink
