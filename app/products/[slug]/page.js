// app/products/[slug]/page.js

import { promises as fs } from 'fs'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import ServiceTabs from '@/app/components/Products/ServiceTabs'

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
    <section className="p-0 pb-16 flex flex-col gap-12">
      <div className="hero w-full p-0 aspect-[1/1] md:aspect-[23/9] grid grid-cols-1 grid-rows-1">
        <Image
          src={service.image}
          alt={`Broadband Communication Networks Ltd ${service.title}`}
          width={1000}
          height={1000}
          className="w-full h-full col-start-1 row-start-1 m-0 aspect-[1/1] md:aspect-[23/9] object-cover z-[2]"
        />

        <div className="tint w-full h-full col-start-1 row-start-1 z-[3] bg-gradient-to-t from-[#000000ce] to-[#00000000]"></div>

        <h1 className="h-fit col-start-1 row-start-1 mt-auto px-4 md:px-32 py-2 md:py-4 text-background z-[5]">
          {service.title}
        </h1>
      </div>

      <ServiceTabs
        title={service.title}
        description={service.description}
        details={service.details}
      />
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
    title: `Broadband Communication Networks Ltd | ${service.title}`,
    description: service.description,
  }
}
