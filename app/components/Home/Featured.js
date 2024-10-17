import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

const products = [
  {
    name: 'fibre-splicer',
    image: 'splicer',
    description: 'High precision fibre splicing for all your network needs',
  },
  {
    name: 'Tektronix K15 Protocol analyzer',
    image: 'protocol-analyzer',
    description:
      'Powerful, multi-technology analyzer for all networks.',
  },
  {
    name: 'R&S®FSH spectrum analyzer',
    image: 'spectrum-analyzer',
    description: 'A handheld spectrum analyzer for field applications.',
  },
]

const Product = ({ name, image, description, index }) => {
  return (
    <Link
      className={`product ${
        index === 0 ? 'bg-indigo' : index === 1 ? 'bg-blue' : 'bg-cyan'
      } w-full aspect-[3/4] p-6 flex flex-col gap-6 overflow-hidden flex-shrink-0`}
      href={`/products`}
    >
      <h2 className="text-background">{name}</h2>
      <p>{description}</p>
      <Image
        src={`/images/${image}.webp`}
        alt={name}
        width={500}
        height={500}
        className="mt-auto ml-auto -mr-6 w-3/5 img-reflect"
      />
      <div className="flex items-center justify-between gap-2">
        <p>Learn More</p>
        <FaArrowRightLong size={24} className="text-background" />
      </div>
    </Link>
  )
}

const Featured = () => {
  return (
    <section className="bg-background flex flex-col gap-6">
      <h1>featured products</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <Product key={product.name} {...product} index={index} />
        ))}
      </div>
    </section>
  )
}

export default Featured
