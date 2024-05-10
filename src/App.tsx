import { useState } from "react";
import Task, { TaskType } from "./components/task/Task";
import Layout from "./layout/Layout";

const Tasks: Array<TaskType> = [];

function App() {
  const [tasks, setTasks] = useState(Tasks);
  const handleAddTask = ({ id, title, priority, bgPriority }: TaskType) => {
    setTasks([
      ...tasks,
      {
        id,
        title,
        priority,
        bgPriority,
      },
    ]);
  };

  const handleDeleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="flex justify-center">
      <Layout onAddTask={handleAddTask}>
        <div className=" flex flex-col gap-2 px-7 w-full">
          {tasks.length !== 0 ? (
            tasks.map((task) => (
              <Task
                key={task.id}
                title={task.title}
                priority={task.priority}
                bgPriority={task.bgPriority}
                id={task.id}
                onDeleteTask={() => handleDeleteTask(task.id)}
              />
            ))
          ) : (
            <p className="text-center">nothing task</p>
          )}
        </div>
      </Layout>
    </div>
  );
}

export default App;
