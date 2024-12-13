'use client'

type ExpenseDetailsProps = {
  params: {
    id: string
  }
}

export default function ExpenseDetails({ params: { id } }: ExpenseDetailsProps) {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <div className="flex items-center">
        <h1 className="border-r-[1px] border-gray-400 p-2 px-4">Under Construction</h1>
        <h1 className="p-2 px-4">Expense Details - {id} page</h1>
      </div>
    </div>
  )
}
