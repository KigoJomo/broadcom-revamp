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

const pages = [
  { name: 'home', href: '/' },
  {
    name: 'solutions & services',
    submenu: divisions,
  },
  { name: 'partners', href: '/partners' },
  { name: 'about us', href: '/about' },
  { name: 'contact us', href: '/contact' },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  // const [isSolutionsHovered, setIsSolutionsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [selectedDivision, setSelectedDivision] = useState(null);
  const [selectedMobileDivision, setSelectedMobileDivision] = useState(null);
  const pathname = usePathname();

  const isSolutionsActive = divisions.some((division) =>
    division.services.some((service) =>
      pathname.includes(`/products/${service.slug}`)
    )
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
        {/* Mobile overlay */}
        <div
          className="absolute top-0 left-full w-[25vw] h-full md:hidden"
          onClick={() => setOpen(!open)}></div>

        {/* Mobile header */}
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
                // onMouseEnter={() => setIsSolutionsHovered(true)}
                // onMouseLeave={() => {
                //   setIsSolutionsHovered(false);
                //   setSelectedDivision(null);
                // }}
              >
                {/* Desktop Dropdown */}
                <div className="hidden md:block w-full">
                  <button
                    onClick={() => setIsClicked(!isClicked)}
                    className={`uppercase md:text-background opacity-80 ${
                      isSolutionsActive
                        ? 'text-purple underline underline-offset-4'
                        : ''
                    }`}>
                    {page.name}
                  </button>
                  {isClicked && (
                    <div className="fixed top-[2.75rem] left-1/2 -translate-x-1/2 shadow-2xl w-[95vw] pt-6">
                      <div className="bg-background p-6 grid grid-cols-4 gap-8">
                        <div className="col-span-1 border-r border-gray-200 pr-6">
                          <h3 className="text-lg font-bold mb-4">Divisions</h3>
                          {page.submenu.map((division, subIndex) => (
                            <button
                              key={subIndex}
                              onClick={() => setSelectedDivision(division)}
                              className={`w-full text-left p-3 rounded-lg ${
                                selectedDivision?.slug === division.slug
                                  ? 'bg-purple/10 text-purple'
                                  : 'hover:bg-gray-100'
                              }`}>
                              {division.name}
                            </button>
                          ))}
                        </div>

                        <div className="col-span-3 pl-6">
                          {selectedDivision ? (
                            <>
                              <h3 className="text-lg font-bold mb-4">
                                {selectedDivision.name} Services
                              </h3>
                              <div className="grid grid-cols-2 gap-4 max-h-[70vh] overflow-y-scroll">
                                {selectedDivision.services.map(
                                  (service, serviceIndex) => (
                                    <Link
                                      key={serviceIndex}
                                      href={`/products/${service.slug}`}
                                      className="p-3 [&>p]:hover:text-purple"
                                      onClick={() => {
                                        setOpen(false);
                                        setIsClicked(false);
                                      }}>
                                      <p className="font-medium opacity-100 transition-all duration-300">
                                        {service.title}
                                      </p>
                                      <span className="text-sm text-gray-600 line-clamp-2 opacity-80">
                                        {service.description}
                                      </span>
                                    </Link>
                                  )
                                )}
                              </div>
                            </>
                          ) : (
                            <div className="h-full flex items-center justify-center text-gray-500">
                              Select a division to view services
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Mobile Dropdown */}
                <div className="md:hidden w-full">
                  <button
                    onClick={() => setSelectedMobileDivision(null)}
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
                        selectedMobileDivision ? 'rotate-90' : ''
                      }`}
                      size={24}
                    />
                  </button>

                  {selectedMobileDivision ? (
                    <div className="pl-4">
                      <button
                        onClick={() => setSelectedMobileDivision(null)}
                        className="flex items-center w-full py-2 text-purple">
                        <MdChevronRight className="rotate-180 mr-2" size={16} />
                        Back to divisions
                      </button>
                      {page.submenu
                        .find((d) => d.slug === selectedMobileDivision)
                        ?.services.map((service, serviceIndex) => (
                          <Link
                            key={serviceIndex}
                            href={`/products/${service.slug}`}
                            className="flex items-center justify-between w-full border-b border-black border-opacity-25 py-4 pr-4 hover:pl-8 transition-all duration-300"
                            onClick={() => {
                              setOpen(false);
                              setSelectedMobileDivision(null);
                            }}>
                            <p className="text-base">{service.title}</p>
                            <MdChevronRight size={16} />
                          </Link>
                        ))}
                    </div>
                  ) : (
                    <div className="pl-4">
                      {page.submenu.map((division, subIndex) => (
                        <button
                          key={subIndex}
                          onClick={() =>
                            setSelectedMobileDivision(division.slug)
                          }
                          className="flex items-center justify-between w-full border-b border-black border-opacity-25 py-4 pr-4 hover:pl-8 transition-all duration-300">
                          <p className="text-base">{division.name}</p>
                          <MdChevronRight size={16} />
                        </button>
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
        <RiMenu3Fill size={32} className="text-background" />
      </button>
    </header>
  );
};

export default Header;
