import Link from 'next/link'
import React from 'react'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const linkGroups = [
  {
    title: 'Corporate',
    links: [
      { title: 'About Us', href: '/about' },
      { title: 'Careers', href: '/careers' },
      { title: 'Partners', href: '/partners' },
      { title: 'Investor Relations', href: '/investor-relations' },
      { title: 'News Releases', href: '/news' },
      { title: 'Corporate Social Responsibility', href: '/csr' },
    ],
  },
  {
    title: 'Areas of Expertise',
    links: [
      { title: 'Mobile Broadband', href: '/products/mobile-broadband' },
      { title: 'Telecom Networks', href: '/products/telecom-networks' },
      { title: 'Network Management', href: '/products/network-management' },
      { title: 'Civil Works', href: '/products/civil-works' },
      { title: 'Green Energy', href: '/products/green-energy' },
    ],
  },
  {
    title: 'Support',
    links: [
      { title: 'Customer Service', href: '/support/customer-service' },
      { title: 'Technical Assistance', href: '/support/technical-assistance' },
      { title: 'Documentation', href: '/support/documentation' },
      { title: 'FAQs', href: '/support/faqs' },
    ],
  },
]

const socialAccounts = [
  {
    title: 'Facebook',
    link: 'https://www.facebook.com/broadcom.co.ke',
    icon: FaFacebookF,
  },
  {
    title: 'Twitter / X',
    link: 'https://twitter.com/Broadband_Kenya',
    icon: FaXTwitter,
  },
  {
    title: 'LinkedIn',
    link: 'https://www.linkedin.com/company/broadband-communication-networks-ltd/',
    icon: FaLinkedinIn,
  },
]

const Footer = () => {
  return (
    <footer className="w-full flex flex-col">
      <div className="footer-top w-full px-8 md:px-12 py-12 md:py-24 bg-gray grid grid-cols-1 md:grid-cols-4 gap-6">
        {linkGroups.map((group, index) => (
          <div key={index} className="w-full">
            <h4 className="text-lg text-background font-semibold mb-4">{group.title}</h4>
            <ul className="flex flex-col gap-2">
              {group.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <Link href={link.href} className="hover:underline hover:opacity-100 opacity-55">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="w-full flex flex-col gap-4 md:gap-0 mt-6 md:m-0">
          <h2 className='text-purple md:text-right'>broadcom</h2>
          <p className='md:text-right capitalize text-xs'>broadband communication networks</p>
          <div className="w-full flex md:justify-end gap-6 md:mt-6">
            {socialAccounts.map((account, index) => (
              <Link
                key={index}
                href={account.link}
                target="_blank"
                className="flex flex-col items-center gap-4 h-fit relative before:absolute before:top-[150%] before:w-[120%] before:h-0.5 before:bg-background before:transition-all before:duration-300 before:ease-in-out before:opacity-0 hover:before:opacity-100"
              >
                <account.icon className="" />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-bottom bg-foreground flex flex-col md:flex-row justify-between px-8 md:px-12 py-6">
        <Link href={'/'} className="text-center hover:underline">
          © 2024 Broadband Communication Networks Ltd.
        </Link>
        <Link href={'/privacy-policy'} className="text-center hover:underline">
          Privacy Policy
        </Link>
      </div>
    </footer>
  )
}

export default Footer
