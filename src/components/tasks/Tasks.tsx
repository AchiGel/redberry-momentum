import { Status, Task } from "../../pages/Home/Home";
import TaskCard from "../taskCard/TaskCard";
import { TasksGrid, TasksColumn, TaskStatus } from "./Tasks.styled";

export default function Tasks({
  statuses,
  tasks,
  selectedFilters,
}: {
  statuses: Status[];
  tasks: Task[];
  selectedFilters: {
    departments: number[];
    priority: number[];
    employee: number | null;
  };
}) {
  return (
    // ***************** ვფილტრავთ დავალებებს სტატუსთან შესაბამისობაში და
    // ID-ს დამთხვევის შემთხვევაში ვარენდერებთ შესაბამის სვეტში *********************//
    <TasksGrid>
      {statuses.map((el) => {
        // ***************** ვქმნით ცვლადს, რომელიც ინახავს ფილტრაციის შედეგად დარჩენილ დავალებებს *********************//
        const filteredTasks = tasks.filter((task) => {
          const matchesDepartment =
            selectedFilters.departments.length === 0 ||
            selectedFilters.departments.includes(task.department.id);

          const matchesPriority =
            selectedFilters.priority.length === 0 ||
            selectedFilters.priority.includes(task.priority.id);

          const matchesEmployee =
            selectedFilters.employee === null ||
            task.employee.id === selectedFilters.employee;

          return (
            task.status.id === el.id &&
            matchesDepartment &&
            matchesPriority &&
            matchesEmployee
          );
        });

        return (
          <TasksColumn key={el.id}>
            <TaskStatus $id={el.id}>{el.name}</TaskStatus>
            {filteredTasks.map((task) => (
              <TaskCard
                key={task.id}
                id={task.id}
                priority={task.priority.name}
                department={task.department.name}
                date={task.due_date}
                name={task.name}
                descr={task.description}
                authorImg={task.employee.avatar}
                comments={task.total_comments}
                priorityIcon={task.priority.icon}
                layoutColor={el.id}
              />
            ))}
          </TasksColumn>
        );
      })}
    </TasksGrid>
  );
}
