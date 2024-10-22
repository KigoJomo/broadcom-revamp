import ServiceItem from './ServiceItem'

const CategoryItem = ({ title, services }) => {

  return (
    <div className="w-full py-12 flex flex-col gap-6">
      <h2 className="text-foreground">{title}</h2>

      <hr className='opacity-50' />

      <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-6">
        {services.map((service, index) => (
          <ServiceItem key={index} {...service} />
        ))}
      </div>
    </div>
  )
}

export default CategoryItem