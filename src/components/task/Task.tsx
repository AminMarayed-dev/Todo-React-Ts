import Badge from "../badge/Badge";

export type TaskType = {
  id:number,
  title: string;
  priority: string;
  bgPriority: string;
  onDeleteTask?:() => void
};

function Task({ id,title, priority, bgPriority, onDeleteTask }: TaskType) {
  console.log(id)
  return (
    <div className="flex items-center justify-between pb-2 border-b-2">
      <div className="flex gap-2">
        <input type="checkbox" />
        <h3>{title}</h3>
        <Badge priority={priority} bg={bgPriority} />
      </div>
      <button className="bg-red-500 text-white px-1 rounded-lg" onClick={onDeleteTask}>Delete</button>
    </div>
  );
}

export default Task;
