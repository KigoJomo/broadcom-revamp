import Image from 'next/image'
import Link from 'next/link'

const ServiceItem = ({ title, slug, description, image }) => {
  return (
    <Link
      href={`/products/${slug}`}
      className="w-full aspect-[3/4] md:aspect-square flex-shrink-0 flex flex-col gap-4   relative before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-gradient-to-tl from-purple to-indigo before:opacity-25 before:-z-0 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
    >
      <div className="w-full h-full md:h-auto md:aspect-[4/3] md:p-2 md:z-[5] absolute md:static">
        <Image
          src={image}
          alt={`Broadcom ${title}`}
          width={500}
          height={500}
          className="w-full h-full object-cover border border-background"
        />
      </div>

      <div className="w-full h-full md:h-[43.75%] p-2 md:p-4 flex flex-col justify-end gap-2 md:gap-4 relative md:static before:absolute md:before:hidden before:h-full before:w-full before:top-0 before:left-0 before:bg-gradient-to-t from-[#000000ce] to-[#00000000]">

        <p className="text-background md:text-foreground text-lg font-bold opacity-100 z-[5]">
          {title}
        </p>

        <p className="text-background md:text-foreground text-xs text-ellipsis whitespace-nowrap text-nowrap overflow-hidden flex-shrink-0 md:opacity-50 z-[5]">
          {description}
        </p>

        <button className="capitalize bg-purple px-4 py-2 w-fit text-lg hidden md:flex items-center gap-8 hover:shadow-2xl transition-all duration-300">
          discover
        </button>

        <p className="flex md:hidden text-cyan ml-auto underline">View</p>
      </div>
    </Link>
  )
}

export default ServiceItem
