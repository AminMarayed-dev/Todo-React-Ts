import { useState } from "react";
import Task, { TaskType } from "./components/task/Task";
import Layout from "./layout/Layout";

const Tasks: Array<TaskType> = [];

function App() {
  const [tasks, setTasks] = useState(Tasks);
  const handleAddTask = ({ id,title, priority, bgPriority }: TaskType) => {
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

  return (
    <Layout onAddTask={handleAddTask}>
      <div className="w-1/4 flex flex-col gap-2">
        {tasks.length !== 0
          ? tasks.map((task) => (
              <Task
                key={task.id}
                title={task.title}
                priority={task.priority}
                bgPriority={task.bgPriority}
              />
            ))
          : "nothing Task"}
      </div>
    </Layout>
  );
}

export default App;
