import React from 'react'

const points = [
  {
    title: '20+ years',
    description:
      'With over 20 years in the telecom industry, we’ve built a reputation for delivering high-quality solutions across Africa.',
  },
  {
    title: 'Trusted Partnerships',
    description:
      'Our partnerships with leading companies like Nokia and Redknee allow us to provide top-tier services with cutting-edge technology.',
  },
  {
    title: 'Sustainable Solutions',
    description:
      'We are dedicated to reducing environmental impact by offering green energy solutions tailored to modern telecom needs.',
  },
]

const Point = ({ title, description }) => {
  return (
    <div className="flex flex-col items-center gap-6">
      <h2 className="text-foreground font-black text-4xl text-center">{title}</h2>
      <p className='text-center opacity-75'>{description}</p>
    </div>
  )
}

const ChooseUs = () => {
  return (
    <section className="bg-background py-24 flex flex-col gap-8 md:gap-12">
      <h1 className='w-fit mx-auto mb-6 lines-header'>why choose us</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {points.map((point) => (
          <Point key={point.title} {...point} />
        ))}
      </div>
    </section>
  )
}

export default ChooseUs
