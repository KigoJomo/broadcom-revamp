import React from 'react'

const Landing = ({heading, paragraph}) => {
  return (
    <section className="h-screen flex flex-col items-center justify-center gap-8">
      <h1 className="md:text-center">{heading}</h1>
      <p>{paragraph}</p>
    </section>
  )
}

export default Landing
