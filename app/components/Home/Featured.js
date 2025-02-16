import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

const products = [
  {
    name: 'M2M',
    image: '/images/products/m2m.webp',
    description: 'We develop customized Machine-to-Machine (M2M) solutions for smart metering, vending, and lift systems.',
  },
  {
    name: 'Battery Banks',
    image: '/images/products/battery-banks.webp',
    description:
      'We provide regular maintenance of battery banks to ensure optimal performance and longevity.',
  },
  {
    name: 'Generators',
    image: '/images/products/generators.webp',
    description: 'Our skilled personnel maintain generators per manufacturer recommendations to ensure optimal performance. \nRoutine checks, cleanings, and system tests are done regularly.',
  },
]

const Product = ({ name, image, description, index }) => {
  return (
    <Link
      className={`product ${
        index === 0 ? 'bg-indigo' : index === 1 ? 'bg-blue' : 'bg-cyan'
      } w-full aspect-[3/4] py-6 flex flex-col gap-6 overflow-hidden flex-shrink-0 shadow-2xl hover:-translate-y-4 transition-all duration-300`}
      href={`/products`}
    >
      <h2 className="text-background px-6">{name}</h2>
      <p className=' px-6'>{description}</p>
      <Image
        src={image}
        alt={name}
        width={500}
        height={500}
        className="mt-auto w-full img-reflect aspect-[2/1]"
      />
      <div className=" px-6 flex items-center justify-between gap-2">
        <p>Learn More</p>
        <FaArrowRightLong size={24} className="text-background" />
      </div>
    </Link>
  )
}

const Featured = () => {
  return (
    <section className="bg-background py-12 flex flex-col gap-6">
      <h1 className='md:text-center'>featured products</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <Product key={product.name} {...product} index={index} />
        ))}
      </div>
    </section>
  )
}

export default Featured
