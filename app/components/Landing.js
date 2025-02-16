import React from 'react'

const Landing = ({heading, paragraph, children, className, style}) => {
  return (
    <section className={`flex flex-col items-center gap-8 landing ${className}`} style={style}>
      {heading && <h1 className="md:text-center order-2">{heading}</h1>}
      {paragraph && <p className='order-2'>{paragraph}</p>}
      {children}
    </section>
  )
}

export default Landing
