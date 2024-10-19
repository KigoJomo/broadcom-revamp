"use client"

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import ServiceItem from './ServiceItem'

const CategoryItem = ({ title, services }) => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5500,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  };

  return (
    <div className="w-full px-6 md:px-32 py-12 flex flex-col gap-6 bg-white bg-opacity-75">
      <h2 className="text-foreground">{title}</h2>

      <div className="w-full">
        <Slider {...settings}>
          {services.map((service, index) => (
            <ServiceItem key={index} {...service} />
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default CategoryItem