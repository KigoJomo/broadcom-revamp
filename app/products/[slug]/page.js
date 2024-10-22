// app/products/[slug]/page.js

import { promises as fs } from 'fs'
import { notFound } from 'next/navigation'

// Generate static params for all possible slugs
export async function generateStaticParams() {
  const file = await fs.readFile(
    process.cwd() + '/public/data/services.json',
    'utf-8'
  )
  const categories = JSON.parse(file)
  
  // Flatten all services from all categories into a single array of slugs
  const slugs = categories.flatMap(category => 
    category.services.map(service => ({
      slug: service.slug
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
  const service = categories.flatMap(category => category.services)
    .find(service => service.slug === params.slug)
    
  // If service not found, show 404
  if (!service) {
    notFound()
  }

  return (
    <section className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">{service.title}</h1>
      <div className="prose max-w-none">
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
  
  const service = categories.flatMap(category => category.services)
    .find(service => service.slug === params.slug)
    
  if (!service) {
    return {
      title: 'Product Not Found'
    }
  }

  return {
    title: `Broadcom | ${service.title}`,
    description: service.description,
  }
}