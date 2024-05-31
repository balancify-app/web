import BlogListItem from './_components/BlogListItem'

export default function Blogs() {
  return (
    <main className="container sm:max-w-4xl">
      <header className="py-16 text-center">
        <h1 className="mb-4 text-2xl font-bold">Dev Blogs</h1>
        <p className="text-gray-700">New updated, improvements and fixes to Balancify.</p>
      </header>
      <article>
        <ul>
          <BlogListItem date="27 Apr 2024" title="Journey Started" version="v0.0.0-alpha-0">
            <ul className="text-md flex list-disc flex-col gap-2 pl-4 pt-2">
              <li>Choose tech stacks.</li>
              <li>Planning app workflow.</li>
              <li>Discuss app functionality.</li>
              <li>Discuss app UX/UI.</li>
            </ul>
          </BlogListItem>
        </ul>
      </article>
    </main>
  )
}
