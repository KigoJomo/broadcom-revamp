// app/products/[slug]/page.js
import { divisions } from '@/lib/divisions'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import ServiceTabs from '@/app/components/Products/ServiceTabs'

// Get all services across all divisions
const getAllServices = () => divisions.flatMap(division => division.services)

// Find service by slug
const findServiceBySlug = (slug) => 
  getAllServices().find(service => service.slug === slug)

// Generate static params
export async function generateStaticParams() {
  return getAllServices().map(service => ({
    slug: service.slug
  }))
}

// Generate metadata
export async function generateMetadata({ params }) {
  const slug = (await params).slug
  const service = findServiceBySlug(slug)

  if (!service) {
    return { title: 'Product Not Found' }
  }

  return {
    title: `Broadband Communication Networks Ltd | ${service.title}`,
    description: service.description,
  }
}

// Main component
export default async function ProductPage({ params }) {
  
  const slug = (await params).slug
  const service = findServiceBySlug(slug)

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