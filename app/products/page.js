import React from 'react'
import Landing from '../components/Landing'
import { LuRadioTower, LuNetwork, LuNfc, LuPodcast } from "react-icons/lu";
import ProductListing from '../components/Products/ProductListing';

export default function Products() {
  return (
    <>
      <Landing
        className={"bg-gradient-to-tl from-indigo via-purple to-blue text-background relative md:items-start py-12"}
        style={{ height: "fit-content"}}
      >
        <h1 className='md:w-4/5'>Comprehensive Telecommunication Solutions</h1>

        <div className="w-full opacity-25 flex items-center md:gap-32">
          <LuNetwork className='-ml-[20%] md:m-0 flex-shrink-0' size={200}/>
          <LuRadioTower className='ml-[20%] md:m-0 flex-shrink-0' size={200}/>

          <LuPodcast className="hidden md:flex flex-shrink-0" size={200} />
          <LuNfc className="hidden md:flex flex-shrink-0" size={200} />
        </div>

        <p className='md:w-3/5'>We offer a full suite of products and services for modern telecommunications, tailored for mobile and fixed networks across Africa.</p>
      </Landing>
      <ProductListing />
    </>
  )
}
