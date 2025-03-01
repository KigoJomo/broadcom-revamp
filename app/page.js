import Image from 'next/image'
import Landing from './components/Landing'
import Carousel from './components/Home/Carousel'
import Who from './components/Home/Who'
import What from './components/Home/What'
import Featured from './components/Home/Featured'
import ChooseUs from './components/Home/ChooseUs'
import ContactUs from './components/Home/ContactUs'

export default function Home() {
  return (
    <>
      <Landing className={'gap-0 p-6 md:p-16 h-fit md:justify-center'}>
        <Carousel />
      </Landing>
      <Who />
      <What />
      {/* <Featured /> */}
      <ChooseUs />
      <ContactUs />
    </>
  )
}
