import Image from 'next/image'
import Link from 'next/link'

// TODO: Make the background white and the border a gradient

const ServiceItem = ({ title, slug, description, image }) => {
  return (
    <Link
      href={`/products/${slug}`}
      className="w-full aspect-[3/4] flex-shrink-0 flex flex-col md:justify-between gap-0   relative before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-slate-300 before:border before:border-purple before:opacity-25 before:-z-0 shadow-lg hover:shadow-2xl md:hover:-translate-y-2 transition-all duration-300"
    >
      <div className="w-full h-full p-[2px] md:aspect-[4/3] md:h-auto md:p-2 -z-0 md:z-[5] absolute md:static before:absolute md:before:hidden before:top-0 before:left-0 before:w-full before:h-full before:bg-gradient-to-tl from-pink-500 to-indigo before:z-[-10]">
        <Image
          src={image}
          alt={`Broadband Communication Networks Ltd ${title}`}
          width={500}
          height={500}
          className="w-full h-full md:aspect-[4/3] object-cover border border-background"
        />
      </div>

      <div className="w-full h-full md:h-fit p-2 md:p-4 flex flex-col justify-end gap-2 md:gap-4 relative md:static before:absolute md:before:hidden before:h-full before:w-full before:top-0 before:left-0 before:bg-gradient-to-t from-[#000000ce] to-[#00000000]">
        <p className="text-background md:text-foreground text-lg font-bold opacity-100 z-[5]">
          {title}
        </p>

        <p className="text-background md:text-foreground text-xs text-ellipsis whitespace-nowrap text-nowrap overflow-hidden flex-shrink-0 md:opacity-50 z-[5]">
          {description}
        </p>

        <button className="capitalize bg-light-blue  text-background px-4 py-2 w-fit text-lg hidden md:flex items-center justify-center gap-8 hover:bg-dark-blue transition-all duration-300">
          discover
        </button>

        <p className="flex md:hidden text-cyan ml-auto underline">View</p>
      </div>
    </Link>
  )
}

export default ServiceItem
