import styled from "styled-components";
import { Status, Task } from "../pages/Home";
import TaskCard from "./TaskCard";

const TasksGrid = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  gap: 52px;
`;

const TasksColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const TaskStatus = styled.div<{ $id: number }>`
  border-radius: 10px;
  background: ${(props) =>
    props.$id === 1
      ? "#F7BC30"
      : props.$id === 2
      ? "#FB5607"
      : props.$id === 3
      ? "#FF006E"
      : "#3A86FF"};
  padding: 15px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export default function Tasks({
  statuses,
  tasks,
}: {
  statuses: Status[];
  tasks: Task[];
}) {
  console.log(tasks);
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
