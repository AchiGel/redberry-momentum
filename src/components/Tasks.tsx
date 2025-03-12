import { Status, Task } from "../pages/Home";
import TaskCard from "./TaskCard";

export default function Tasks({
  statuses,
  tasks,
}: {
  statuses: Status[];
  tasks: Task[];
}) {
  console.log(tasks);
  return (
    <div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <ul>
        {statuses.map((el) => (
          <li key={el.id}>{el.name}</li>
        ))}
      </ul>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <TaskCard
              priority={task.priority.name}
              department={task.department.name}
              date={task.due_date}
              name={task.name}
              descr={task.description}
              authorImg={task.employee.avatar}
              comments={task.total_comments}
              priorityIcon={task.priority.icon}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
