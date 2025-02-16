import Link from 'next/link'
import React from 'react'
import { LuArrowRight } from 'react-icons/lu'

const CustomLink = ({
  href,
  text,
  className,
  arrow = true,
  secondary = false,
}) => {
  return (
    <Link
      href={href}
      className={`capitalize ${
        secondary ? 'bg-background border border-purple' : 'bg-dark-blue'
      }  px-4 py-2 w-fit text-lg flex items-center gap-4 hover:shadow-2xl transition-all duration-300 ${className}`}
    >
      <span className={`${secondary ? 'text-purple' : 'text-background'} `}>
        {text}
      </span>
      {arrow && (
        <LuArrowRight
          size={24}
          className={`${secondary ? 'text-purple' : 'text-background'} `}
        />
      )}
    </Link>
  )
}

export default CustomLink
