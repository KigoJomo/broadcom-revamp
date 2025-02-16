import React from 'react'
import { promises as fs } from 'fs'
import CategoryItem from './CategoryItem'

export default async function ProductListing() {
  const file = await fs.readFile(
    process.cwd() + '/public/data/services.json',
    'utf-8'
  )
  const data = JSON.parse(file)

  return (
    <section className="py-0 flex flex-col gap-0 bg-background">
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