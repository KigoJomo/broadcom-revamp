import Link from 'next/link'
import React from 'react'
import {
  FaMobileAlt,
  FaNetworkWired,
  FaTools,
  FaBroadcastTower,
  FaBuilding,
} from 'react-icons/fa'

const services = [
  {
    name: 'Mobile Broadband Solutions',
    href: '/products',
    icon: FaMobileAlt,
  },
  {
    name: 'Telecommunication Network Installations',
    href: '/products',
    icon: FaNetworkWired,
  },
  {
    name: 'Network Management Solutions',
    href: '/products',
    icon: FaTools,
  },
  {
    name: 'End-to-End Mobile Network Solutions',
    href: '/products',
    icon: FaBroadcastTower,
  },
  {
    name: 'Civil Works and Site Facilitation',
    href: '/products',
    icon: FaBuilding,
  },
]

const ServiceLink = ({ name, href, icon }) => {
  return (
    <Link href={href} className="animated-link-wrapper flex items-center gap-6">
      <div className="icon animated-link flex items-center justify-center">
        {React.createElement(icon, { size: 32, className: 'text-light-blue' })}
      </div>
      <p>{name}</p>
    </Link>
  )
}

const What = ({heading = 'Our Core Services'}) => {
  return (
    <section className="overflow-x-hidden bg-background flex flex-col gap-6">
      <h1 className='w-fit mx-auto lines-header'>{heading}</h1>
      <p className='md:text-center'>
        At Broadband Communication Networks, we specialize in providing
        comprehensive telecommunication solutions that drive connectivity and
        enhance network performance. 
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:mt-6">
        {services.map((service, index) => (
          <ServiceLink key={index} {...service} />
        ))}
      </div>
    </section>
  )
}

export default What
