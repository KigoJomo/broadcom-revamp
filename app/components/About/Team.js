'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { LuChevronLeft as ChevronLeft, LuChevronRight as ChevronRight } from 'react-icons/lu'

const members = [
  {
    role: 'CEO',
    name: 'Bernard G. Wahome',
    image: '/images/team/bernard.webp',
    description:
      'Bernard is the Founder, CEO, and Managing Director of Broadband Group with 28 years of experience in Telecommunications. He has driven mobile network deployments across East Africa. Bernard holds an MBA (JKUAT), Mini Telecom MBA (UK), BSc IT (JKUAT), and a Telecom Engineering Diploma. He is a member of the Kenya Institute of Management (KIM) and is committed to ICT transformation and improving customer experience across Africa.',
  },
  {
    role: 'General Manager, Managed Services',
    name: 'Edwin Wafula',
    image: '/images/team/patrick.webp',
    description:
      'Edwin is the GM of Managed Services at Broadband Group, handling Business Development, Service Management, and Key Accounts. With 25 years in Telecoms, his experience spans PSTN and PLMN networks, having held management roles at Telekom Kenya, Vivendi, Celtel, and Nokia Siemens. He holds a Diploma in Telecom (KNEC), Advanced Diploma from Multimedia University, and a Mini MBA from Wits Business School. He focuses on business processes re-engineering, innovation, and operational excellence.',
  },
  {
    role: 'General Manager, Finance and Administration',
    name: 'Susan Gichia',
    image: '/images/team/susan.webp',
    description:
      'Susan, GM of Finance & Admin, directs financial management, ensuring resource optimization to meet the company’s goals. With 27 years in various industries, she has expertise in product costing, project accounting, and statutory regulations. Susan’s aim is to enhance internal and external customer experiences while driving financial growth. She holds a degree from Strathmore University and is a member of ICPAK.',
  },
  {
    role: 'General Manager, Implementation Solutions',
    name: 'Michael Wambugu',
    image: '/images/team/michael.webp',
    description:
      'Michael is the GM of Implementation at Broadband Group, leading project rollouts from initiation to closure. He has 14 years of expertise in project and technical schedule management, focusing on high-standard operations and business growth. Michael’s leadership has driven effective in-house teams and project success. He holds an MBA in Strategic Management from Moi University and a Civil Engineering degree from the University of Nairobi.',
  },
]

const SLIDE_INTERVAL = typeof window !== 'undefined' && window.innerWidth <= 768 ? 3000 : 6000
const SLIDE_TRANSITION = 0.7

export default function Team() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [expandedDescription, setExpandedDescription] = useState(false)

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % members.length)
      }, SLIDE_INTERVAL)
      return () => clearInterval(interval)
    }
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % members.length)
    setIsAutoPlaying(false)
    setExpandedDescription(false)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + members.length) % members.length)
    setIsAutoPlaying(false)
    setExpandedDescription(false)
  }

  return (
    <section className="py-12 md:py-32 bg-background">
      <h1 className="w-fit mx-auto mb-6 lines-header">our team</h1>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Desktop Layout */}
        <div className="hidden md:grid grid-cols-4 gap-4 mb-8">
          {members.map((member, index) => (
            <motion.div
              key={member.name}
              className="relative cursor-pointer"
              animate={{
                opacity: index === currentIndex ? 1 : 0.5,
                scale: index === currentIndex ? 1 : 0.85,
              }}
              onClick={() => {
                setCurrentIndex(index)
                setIsAutoPlaying(false)
              }}
              transition={{ duration: SLIDE_TRANSITION }}
            >
              <div className="aspect-[3/4] relative overflow-hidden shadow-2xl">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover border border-purple"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <h3 className="text-background">{member.name}</h3>
                  <p className="text-background text-sm">{member.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden relative">
          <div className="overflow-hidden">
            <motion.div
              className="flex"
              animate={{
                x: `${-100 * currentIndex}%`
              }}
              transition={{ duration: SLIDE_TRANSITION }}
            >
              {members.map((member, index) => (
                <div key={member.name} className="w-full flex-shrink-0">
                  <div className="aspect-[3/4] relative overflow-hidden shadow-2xl">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover border border-purple"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#000000] via-[#000000d2] to-transparent p-4">
                      <h3 className="text-background shadow-2xl">{member.name}</h3>
                      <p className="text-cyan text-sm mb-2">{member.role}</p>
                      <div className="text-background/90 text-sm">
                        <p className={`${expandedDescription ? '' : 'line-clamp-2'} text-background text-sm`}>
                          {member.description}
                        </p>

                        <button
                            onClick={(e) => {
                              e.stopPropagation()
                              setExpandedDescription(!expandedDescription)
                              setIsAutoPlaying(!isAutoPlaying)
                            }}
                            className="text-cyan ml-auto mt-1 text-sm font-medium"
                          >
                            {!expandedDescription && 'Read more'}
                            {expandedDescription && 'Hide'}
                          </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Mobile Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 p-2 rounded-full text-white"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 p-2 rounded-full text-white"
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Desktop Description */}
        <div className="hidden md:block">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: SLIDE_TRANSITION }}
              className="max-w-2xl mx-auto text-center px-4"
            >
              <p className="text-base/relaxed">
                {members[currentIndex].description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Shared Navigation Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {members.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index)
                setIsAutoPlaying(false)
                setExpandedDescription(false)
              }}
              className={`w-4 h-4 rounded-full transition-colors duration-300 ${
                index === currentIndex ? 'bg-indigo' : 'bg-gray opacity-50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}