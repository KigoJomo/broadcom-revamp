import React from 'react'
import Hero from '../components/About/Hero'
import Mission from '../components/About/Mission'
import CoreValues from '../components/About/CoreValues'
import History from '../components/About/History'
import Services from '../components/About/Services'
import Team from '../components/About/Team'
import Collaborations from '../components/About/Collaborations'
import ChooseUs from '../components/Home/ChooseUs'
import ContactUs from '../components/Home/ContactUs'
import ReachOut from '../components/About/ReachOut'

export default function About() {
  return (
    <>
      <Hero />
      <Mission />
      <CoreValues />
      <History />
      <Services />
      <Team />
      <Collaborations />
      <ChooseUs />
      <ReachOut />
    </>
  )
}
