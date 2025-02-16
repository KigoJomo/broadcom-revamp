import React from 'react'
import CustomLink from '../CustomLink'

const ContactUs = ({className}) => {
  return (
    <section className=" py-24 flex flex-col md:flex-row items-center gap-8 md:gap-12">

      <div className="md:w-1/2 flex flex-col items-center gap-8">
        <h2 className="text-center  md:hidden">
          Ready to Transform Your Network?
        </h2>
        <video muted autoPlay playsInline loop className='shadow-2xl'>
          <source src="/videos/tower.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="md:w-1/2 flex flex-col items-center md:items-start gap-8">
        <h2 className="text-left  hidden md:flex">
          Ready to Transform Your Network?
        </h2>

        <p className="text-center md:text-left">
          Get in touch with us today and find out how we can help you optimize
          your communication infrastructure.
        </p>

        <CustomLink
          href={'/contact'}
          text={'contact us'}
          className={'border border-background'}
        />
      </div>
    </section>
  )
}

export default ContactUs
