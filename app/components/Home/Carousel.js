'use client'

import Image from 'next/image'
import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'


// TODO: Make the carousel full-screen
const items = [
  {
    image_name: 'broadcom',
    title: 'Broadband Communication Networks Ltd.',
    desc: "We're a communication technologies solution provider, utilizing advanced technologies to serve large business organizations in Africa.",
  },
  {
    image_name: 'network_solutions',
    title: 'End-to-End Network Solutions',
    desc: 'From mobile broadband to optic fiber solutions, we provide comprehensive telecommunication infrastructure to keep businesses connected across Africa.',
  },
  {
    image_name: 'green_energy',
    title: 'Green Energy Solutions',
    desc: 'With our solar, wind, and hybrid energy systems, we offer sustainable energy solutions tailored for telecom infrastructure and remote sites.',
  },
]

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5500,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  }

  return (
    <div className="w-full p-4 pb-12 md:py-8 md:px-12 md:pb-12 bg-background shadow-2xl">
      <Slider {...settings}>
        {items.map((item, index) => (
          <div className="" key={index}>
            <div className="w-full flex-shrink-0 flex flex-col md:flex-row items-center gap-6 md:pb-12">
              <Image
                src={`/images/${item.image_name}.webp`}
                alt="broadcom"
                width={1000}
                height={1000}
                className="w-full md:w-1/2 aspect-[4/3]"
              />
              <div className="w-full md:w-1/2 flex flex-col items-center gap-6 md:px-8">
                <h2 className="text-center">{item.title}</h2>
                <p className="text-center">{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default Carousel
