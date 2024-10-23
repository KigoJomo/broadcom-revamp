// app/products/[slug]/page.js

import { promises as fs } from 'fs'
import Image from 'next/image'
import { notFound } from 'next/navigation'

// Generate static params for all possible slugs
export async function generateStaticParams() {
  const file = await fs.readFile(
    process.cwd() + '/public/data/services.json',
    'utf-8'
  )
  const categories = JSON.parse(file)

  // Flatten all services from all categories into a single array of slugs
  const slugs = categories.flatMap((category) =>
    category.services.map((service) => ({
      slug: service.slug,
    }))
  )

  return slugs
}

// The main page component
export default async function ProductPage({ params }) {
  // Read the data
  const file = await fs.readFile(
    process.cwd() + '/public/data/services.json',
    'utf-8'
  )
  const categories = JSON.parse(file)

  // Find the service with matching slug
  const service = categories
    .flatMap((category) => category.services)
    .find((service) => service.slug === params.slug)

  // If service not found, show 404
  if (!service) {
    notFound()
  }

  return (
    <section className="p-0 flex flex-col gap-12">
      <div className="hero w-full p-0 flex-shrink-0 aspect-[1/1] md:aspect-[23/9]  overlap-parent">
        <Image
          src={service.image}
          alt={`Broadcom ${service.title}`}
          width={1000}
          height={1000}
          className="w-full h-full m-0 flex-shrink-0 aspect-[1/1] md:aspect-[23/9] object-cover z-[2] md:top-0 align-top"
        />

        <div className="tint w-full h-full z-[3] bg-gradient-to-t from-[#000000ce] to-[#00000000]"></div>

        <h1 className='h-fit mt-auto px-4 py-2 text-background z-[5]'>{service.title}</h1>
      </div>

      <div className="w-full p-4">
        <p>{service.description}</p>
      </div>
    </section>
  )
}

// Generate metadata for each product page
export async function generateMetadata({ params }) {
  const file = await fs.readFile(
    process.cwd() + '/public/data/services.json',
    'utf-8'
  )
  const categories = JSON.parse(file)

  const service = categories
    .flatMap((category) => category.services)
    .find((service) => service.slug === params.slug)

  if (!service) {
    return {
      title: 'Product Not Found',
    }
  }

  return {
    title: `Broadcom | ${service.title}`,
    description: service.description,
  }
}
