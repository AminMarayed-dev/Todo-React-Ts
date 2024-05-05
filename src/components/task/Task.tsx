import Badge from "../badge/Badge";

type TaskType = {
  title: string;
  priority: string;
  bgPriority: string;
};

function Task({ title, priority, bgPriority }: TaskType) {
  return (
    <div className="flex items-center justify-between pb-2 border-b-2">
      <div className="flex gap-2">
        <input type="checkbox" />
        <h3>{title}</h3>
        <Badge priority={priority} bg={bgPriority} />
      </div>
      <button className="bg-red-500 text-white px-1 rounded-lg">
          Delete
        </button>
    </div>
  );
}

export default Task;
