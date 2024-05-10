import { useState } from "react";

type onAddTaskType = (task: {
  id:number,
  title: string;
  priority: string;
  bgPriority: string;
}) => void;



export default function Footer({ onAddTask }: { onAddTask: onAddTaskType }) {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState('Low');
  const [bgPriority, setBgPriority] = useState('bg-green-500');

  return (
    <div className="flex">
      <input
        type="text"
        placeholder="Task name"
        className="px-2 py-1"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <select onChange={(e) => {
        setPriority(e.target.value);
        if(e.target.value === 'medium') setBgPriority('bg-red-500');
        else if (e.target.value === 'high') setBgPriority('bg-yellow-500')
      }}>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <button
        className="bg-green-500 text-white px-1 rounded-lg"
        onClick={() => {
          setTitle('');
          onAddTask({ id:Date.now(),title, priority, bgPriority });
        }}
      >
        Add Task
      </button>
    </div>
  );
}
