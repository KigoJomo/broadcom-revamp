// app/components/Header.js
'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { RiMenu3Fill } from 'react-icons/ri';
import { MdChevronRight } from 'react-icons/md';
import { IoMdClose } from 'react-icons/io';
import { divisions } from '@/lib/divisions';

// Generate division links
const serviceDivisions = divisions.map((division) => ({
  name: division.name,
  href: `/division/${division.slug}/`,
}));

const pages = [
  { name: 'home', href: '/' },
  {
    name: 'solutions & services',
    submenu: serviceDivisions,
  },
  { name: 'partners', href: '/partners' },
  { name: 'about us', href: '/about' },
  { name: 'contact us', href: '/contact' },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [isSolutionsHovered, setIsSolutionsHovered] = useState(false);
  const [isSolutionsSubmenuOpen, setIsSolutionsSubmenuOpen] = useState(false);
  const pathname = usePathname();

  const isSolutionsActive = serviceDivisions.some((subItem) =>
    pathname.includes(subItem.href)
  );

  return (
    <header className="w-full h-[10vh] sticky z-50 top-0 flex-shrink-0 px-4 md:px-12 flex items-center justify-between bg-light-blue shadow-2xl border-b border-purple">
      <Link href="/" className="logo">
        <Image
          src="/images/logo.png"
          alt="Broadband Communication Networks Ltd"
          width={150}
          height={150}
          className="object-contain"
        />
      </Link>

      <nav
        className={`absolute top-0 ${
          open ? 'left-0' : '-left-full'
        } transition-all ease-in duration-700 z-10 md:static h-screen md:h-fit w-screen md:w-fit py-6 px-8 md:p-0 flex flex-col md:flex-row md:items-center md:gap-12 bg-background md:bg-transparent shadow-2xl md:shadow-none`}>
        <div
          className="absolute top-0 left-full w-[25vw] h-full md:hidden"
          onClick={() => setOpen(!open)}></div>

        <div className="w-full flex items-center justify-between md:hidden logo mb-8">
          <Image
            src="/images/logo-black.png"
            alt="Broadband Communication Networks Ltd"
            width={150}
            height={150}
            className="object-contain"
          />
          <button className="close-menu" onClick={() => setOpen(!open)}>
            <IoMdClose size={24} />
          </button>
        </div>

        {pages.map((page, index) => {
          if (page.submenu) {
            return (
              <div
                key={index}
                className="relative group w-full md:w-auto"
                onMouseEnter={() => setIsSolutionsHovered(true)}
                onMouseLeave={() => setIsSolutionsHovered(false)}>
                {/* Desktop Dropdown */}
                <div className="hidden md:block w-full">
                  <button
                    className={`uppercase md:text-background opacity-80 ${
                      isSolutionsActive
                        ? 'text-purple underline underline-offset-4'
                        : ''
                    }`}>
                    {page.name}
                  </button>
                  {isSolutionsHovered && (
                    <div className="absolute top-full left-0 shadow-2xl w-[45vw] pt-6">
                      <div className="bg-background pt-2 pb-6">
                        {page.submenu.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            href={subItem.href}
                            className="flex items-center gap-2 px-4 py-2 hover:bg-slate-100"
                            onClick={() => setOpen(false)}>
                            <p
                              className={`${
                                pathname.includes(subItem.href)
                                  ? 'text-purple underline underline-offset-4'
                                  : ''
                              }`}>
                              {subItem.name}
                            </p>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Mobile Dropdown */}
                <div className="md:hidden w-full">
                  <button
                    onClick={() =>
                      setIsSolutionsSubmenuOpen(!isSolutionsSubmenuOpen)
                    }
                    className="flex items-center justify-between w-full border-b border-black border-opacity-25 py-4 hover:pl-8 transition-all duration-300">
                    <p
                      className={`capitalize ${
                        isSolutionsActive
                          ? 'text-purple underline underline-offset-4'
                          : ''
                      }`}>
                      {page.name}
                    </p>
                    <MdChevronRight
                      className={`transition-transform ${
                        isSolutionsSubmenuOpen ? 'rotate-90' : ''
                      }`}
                      size={24}
                    />
                  </button>
                  {isSolutionsSubmenuOpen && (
                    <div className="pl-4">
                      {page.submenu.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          href={subItem.href}
                          className="flex items-center justify-between w-full border-b border-black border-opacity-25 py-4 pr-4 hover:pl-8 transition-all duration-300"
                          onClick={() => {
                            setOpen(false);
                            setIsSolutionsSubmenuOpen(false);
                          }}>
                          <p
                            className={`${
                              pathname.includes(subItem.href)
                                ? 'text-purple underline underline-offset-4'
                                : ''
                            } text-base`}>
                            {subItem.name}
                          </p>
                          <MdChevronRight size={16} />
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          }
          return (
            <Link
              key={index}
              href={page.href}
              className={`flex items-center justify-between w-full md:w-fit border-b md:border-0 border-black border-opacity-25 py-4 md:py-0 hover:pl-8 md:hover:pl-0 transition-all duration-300`}
              onClick={() => setOpen(false)}>
              <p
                className={`capitalize md:uppercase md:text-background ${
                  (page.href === '/' && pathname === '/') ||
                  (page.href !== '/' && pathname.includes(page.href))
                    ? 'text-purple underline underline-offset-4'
                    : ''
                }`}>
                {page.name}
              </p>
              <MdChevronRight className="md:hidden" size={24} />
            </Link>
          );
        })}
      </nav>

      <button
        className="menu-button flex md:hidden"
        onClick={() => setOpen(!open)}>
        <RiMenu3Fill size={32} className='text-background' />
      </button>
    </header>
  );
};

export default Header;
