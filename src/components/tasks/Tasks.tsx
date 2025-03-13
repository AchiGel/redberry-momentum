import { Status, Task } from "../../pages/Home";
import TaskCard from "../taskCard/TaskCard";
import { TasksGrid, TasksColumn, TaskStatus } from "./Tasks.styled";

export default function Tasks({
  statuses,
  tasks,
}: {
  statuses: Status[];
  tasks: Task[];
}) {
  return (
    // ***************** ვფილტრავთ დავალებებს სტატუსთან შესაბამისობაში და
    // ID-ს დამთხვევის შემთხვევაში ვარენდერებთ შესაბამის სვეტში *********************//
    <TasksGrid>
      {statuses.map((el) => {
        const filteredTasks = tasks.filter((task) => task.status.id === el.id);

        return (
          <TasksColumn key={el.id}>
            <TaskStatus $id={el.id}>{el.name}</TaskStatus>
            {filteredTasks.map((task) => (
              <TaskCard
                key={task.id}
                priority={task.priority.name}
                department={task.department.name}
                date={task.due_date}
                name={task.name}
                descr={task.description}
                authorImg={task.employee.avatar}
                comments={task.total_comments}
                priorityIcon={task.priority.icon}
              />
            ))}
          </TasksColumn>
        );
      })}
    </TasksGrid>
  );
}
