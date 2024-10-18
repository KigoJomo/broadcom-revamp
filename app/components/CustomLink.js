import Link from 'next/link'
import React from 'react'

const CustomLink = ({ href, text, className }) => {
  return (
    <Link href={href} className={`capitalize bg-purple px-4 py-2 w-fit text-lg ${className}`}>{text}</Link>
  )
}

export default CustomLink