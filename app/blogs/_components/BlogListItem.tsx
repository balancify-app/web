type BlogListItemProps = Readonly<{
  children: React.ReactNode
  date: string
  title: string
  version: string
}>

export default function BlogListItem({ children, date, title, version }: BlogListItemProps) {
  return (
    <li className="group flex gap-8 pl-2 md:gap-14 md:pl-0">
      <div className="hidden pt-0.5 md:block">
        <h1 className=" text-right text-sm text-gray-400 ">{date}</h1>
      </div>
      <div className="relative w-0.5 translate-y-3 bg-border group-last:bg-transparent">
        <div className="relative left-0 top-0 flex h-3.5 w-3.5 -translate-x-1.5 -translate-y-1/2 items-center justify-center rounded-full bg-border">
          <div className="h-2 w-2 rounded-full bg-background"></div>
        </div>
      </div>
      <div className="flex-1 pb-12">
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
