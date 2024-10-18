import React from 'react'
import CustomLink from '../CustomLink'

const ContactUs = () => {
  return (
    <section className="bg-transparent py-24 flex flex-col items-center gap-8">
      <h2 className="text-center text-background">Ready to Transform Your Network?</h2>

      <video muted autoPlay playsInline loop>
        <source src="/videos/tower.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <p className="text-center">
        Get in touch with us today and find out how we can help you optimize
        your communication infrastructure.
      </p>

      <CustomLink href={'/contact'} text={'contact us'} className={"border border-background"} />
    </section>
  )
}

export default ContactUs
