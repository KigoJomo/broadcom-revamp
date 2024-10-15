import Image from 'next/image'
import Landing from './components/Landing'
import Carousel from './components/Home/Carousel'

export default function Home() {
  return (
    <>
      <Landing className={'gap-0 p-6'}>
        <Carousel />
      </Landing>
    </>
  )
}
