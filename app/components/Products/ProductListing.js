import React from 'react'
import { promises as fs } from 'fs'
import Link from 'next/link'
import CustomLink from '../CustomLink'
import CategoryItem from './CategoryItem'

export default async function ProductListing() {
  const file = await fs.readFile(
    process.cwd() + '/public/data/services.json',
    'utf-8'
  )
  const data = JSON.parse(file)

  return (
    <section className="py-0 px-0 flex flex-col gap-0">
      {data.map((category, index) => (
        <CategoryItem
          key={index}
          title={category.category}
          services={category.services}
        />
      ))}
    </section>
  )
}

const Category = ({ title, services }) => {
  return (
    <div className="w-full px-4 md:px-32 py-12 flex flex-col gap-6 bg-white bg-opacity-75">
      <h2 className="">{title}</h2>

      <div className="w-full overflow-x-scroll scrollbar-hidden flex gap-8">
        {services.map((service, index) => (
          <ServiceItem key={index} {...service} />
        ))}
      </div>
    </div>
  )
}

const ServiceItem = ({ title, slug, description, image }) => {
  return (
    <Link
      href={`/products/${slug}`}
      className="w-[60vw] md:w-[25vw] aspect-[9/16] md:aspect-[3/4] border border-background flex-shrink-0 flex flex-col gap-4  bg-background relative before:absolute before:z-[1] before:top-0 before:left-0 before:w-full before:h-full before:bg-cyan before:opacity-20 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
    >
      <div className="w-full aspect-square bg-gradient-to-tl from-indigo via-purple to-blue z-[5]"></div>

      <div className="w-full h-[43.75%] px-4 pb-4 flex flex-col justify-end gap-4">
        <h4 className="text-foreground font-bold z-[5]">{title}</h4>

        <p className="text-xs text-ellipsis whitespace-nowrap text-nowrap overflow-hidden opacity-50 z-[5]">
          {description}
        </p>

        <CustomLink
          href={`/products/${slug}`}
          text={'discover'}
          arrow={false}
          className={''}
        />
      </div>
    </Link>
  )
}
