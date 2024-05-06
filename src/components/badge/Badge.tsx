

type BadgeType = {
    priority:string,
    bg:string,
}

export default function Badge({priority, bg}:BadgeType) {
  return (
    <span className={`px-2 text-white rounded-md text-sm ${bg}`}>{priority}</span>
  )
}