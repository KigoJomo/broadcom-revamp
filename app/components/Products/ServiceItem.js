import Link from "next/link"

const ServiceItem = ({ title, slug, description, image }) => {
  return (
    <Link
      href={`/products/${slug}`}
      className="w- md:w-[25vw] aspect-[3/4] md:aspect-square border border-background flex-shrink-0 flex flex-col gap-4  bg-background relative before:absolute before:z-[1] before:top-0 before:left-0 before:w-full before:h-full before:bg-background before:opacity-20 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
    >
      <div className="w-full aspect-square bg-gradient-to-tl from-indigo via-purple to-blue z-[5]"></div>

      <div className="w-full md:h-[43.75%] px-4 pb-4 flex flex-col justify-between md:justify-end gap-2 md:gap-4">
        <p className="text-foreground text-lg font-bold opacity-100 z-[5]">{title}</p>

        <p className="text-xs text-ellipsis whitespace-nowrap text-nowrap overflow-hidden flex-shrink-0 opacity-50 z-[5]">
          {description}
        </p>

        <button className="capitalize bg-purple px-4 py-2 w-fit text-lg hidden md:flex items-center gap-8 hover:shadow-2xl transition-all duration-300">discover</button>

        <p className="flex md:hidden text-indigo ml-auto underline">View</p>
      </div>
    </Link>
  )
}

export default ServiceItem