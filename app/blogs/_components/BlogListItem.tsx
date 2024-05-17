type BlogListItemProps = Readonly<{
  children: React.ReactNode
  date: string
  title: string
  version: string
}>

export default function BlogListItem({ children, date, title, version }: BlogListItemProps) {
  return (
    <li className="group flex gap-8 md:gap-14">
      <div className="pt-0.5">
        <h1 className="hidden text-right text-sm text-gray-400 md:block">{date}</h1>
      </div>
      <div className="relative w-0.5 translate-y-3 bg-border group-last:bg-transparent">
        <div className="relative left-0 top-0 h-3.5 w-3.5 -translate-x-1.5 -translate-y-1/2 rounded-full bg-border after:absolute after:left-1/2 after:top-1/2 after:h-2/3 after:w-2/3 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:bg-background" />
      </div>
      <div className="flex-1">
        {/* <h1 className="my-0.5 block text-sm text-gray-400 md:hidden">{date}</h1> */}
        <h1 className="font-bold">{title}</h1>
        <p className="mb-6 mt-1 text-sm text-gray-400">
          <span className="inline text-sm text-gray-400 md:hidden">{date} • </span>
          {version}
        </p>
        <p>What we did:</p>
        {children}
      </div>
    </li>
  )
}
