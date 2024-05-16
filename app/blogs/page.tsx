export default function Blogs() {
  return (
    <main className="container sm:max-w-4xl">
      <header className="py-16 text-center">
        <h1 className="mb-4 text-4xl font-bold">Dev Blogs</h1>
        <p className="text-lg text-gray-700">New updated, improvements and fixes to Balancify.</p>
      </header>
      <article>
        <ul>
          <li className="flex">
            <div className="flex-[0.4] pr-12">
              <h1 className="text-right text-sm text-gray-400">27/04/2024</h1>
            </div>
            <div className="relative w-0.5 translate-y-2.5 bg-border">
              <div className="left-0 top-0 h-3.5 w-3.5 -translate-x-1.5 -translate-y-1/2 rounded-full bg-border" />
            </div>
            <div className="flex-1 pl-12">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At corporis, deleniti repellendus in cum sit
              illum nam modi dolorum quod nemo quis fugit esse voluptas officia. Tempora incidunt aut consectetur!
            </div>
          </li>
        </ul>
      </article>
    </main>
  )
}
