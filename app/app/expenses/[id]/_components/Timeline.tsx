import TimelineItem from './TimelineItem'

export default function Timeline() {
  return (
    <div className="mt-4">
      <h1 className="text-lg font-bold">Timeline</h1>
      <ul className="mt-4 pl-4">
        <TimelineItem createdBy="Person 1" date="12 Dec 2024" events="thing happened" />
        <TimelineItem createdBy="Person 2" date="12 Dec 2024" events="more thing happened" />
        <TimelineItem createdBy="Person 3" date="12 Dec 2024" events="even more thing happened" />
      </ul>
    </div>
  )
}
