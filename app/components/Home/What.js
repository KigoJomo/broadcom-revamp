import Link from 'next/link'
import React from 'react'
import {  
  FaNetworkWired, 
  FaWrench, 
  FaCogs, 
  FaServer, 
  FaSolarPanel
} from "react-icons/fa";
import { GiRadioTower } from "react-icons/gi";

const services = [
  {
    name: 'Project Implementation',
    href: '/division/solutions-division',
    icon: GiRadioTower,
  },
  {
    name: 'Enterprise Network',
    href: '/division/enterprise-division',
    icon: FaNetworkWired,
  },
  {
    name: 'Maintenance and Support',
    href: '/division/managed-services-division',
    icon: FaWrench,
  },
  {
    name: 'Network Solutions',
    href: '/division/network-implementation-division',
    icon: FaCogs,
  },
  {
    name: 'Network Green Energy Solutions',
    href: '/products/green-energy-solutions',
    icon: FaSolarPanel,
  },
  {
    name: 'Data Center Solutions',
    href: '/products/enterprise-network-infrastructure',
    icon: FaServer,
  },
];


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

const What = ({heading = 'Core Solutions & Services'}) => {
  return (
    <section className="overflow-x-hidden bg-background flex flex-col gap-6">
      <h1 className='w-fit mx-auto lines-header'>{heading}</h1>
      <p className='md:text-center'>
        We specialize in providing
        comprehensive  quality Telecommunication and IT Solutions and Services that drive connectivity,
        enhance network performance and drive enterprise operations efficiency.
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
