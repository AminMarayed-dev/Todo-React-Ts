

export default function Footer() {
  return (
    <div className="flex">
        <input type="text" placeholder="Task name" className="px-2 py-1"/>
        <select>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
        </select>
        <button className="bg-green-500 text-white px-1 rounded-lg">Add Task</button>
    </div>
  )
}