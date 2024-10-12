import Image from 'next/image'
import Landing from './components/Home/Landing'

export default function Home() {
  return (
    <>
      <Landing
        heading={'broadband communication network'}
        paragraph={
          "We're a communication technologies        solution provider, utilizing advanced technologies to serve large business organizations in Africa."
        }
      />
    </>
  )
}
