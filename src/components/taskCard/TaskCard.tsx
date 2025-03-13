import {
  TaskCardLayout,
  TaskCardUpper,
  CardPriorityAndDepartment,
  CardPriority,
  CardDepartment,
  CardDate,
  TaskCardMiddle,
  TaskName,
  TaskDescr,
  TaskCardBottom,
  TaskAuthorImg,
  TaskComments,
  TaskCommentsQuantity,
} from "./TaskCard.styled";

interface TaskCardTypes {
  priority: string;
  department: string;
  date: string;
  name: string;
  descr: string;
  authorImg: string;
  comments: number;
  priorityIcon: string;
}

export default function TaskCard({
  priority,
  department,
  date,
  name,
  descr,
  authorImg,
  comments,
  priorityIcon,
}: TaskCardTypes) {
  // ***************** თარიღის ფორმატირება *********************//
  const preDate = new Date(date);
  const formattedDate = preDate.toLocaleDateString("ka-GE", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <TaskCardLayout>
      <TaskCardUpper>
        <CardPriorityAndDepartment>
          <CardPriority $priority={priority}>
            <img src={priorityIcon} alt={priority} />
            {priority}
          </CardPriority>
          <CardDepartment $department={department}>
            {department.slice(0, 7) + "."}
          </CardDepartment>
        </CardPriorityAndDepartment>
        <CardDate>{formattedDate}</CardDate>
      </TaskCardUpper>
      <TaskCardMiddle>
        <TaskName>{name}</TaskName>
        <TaskDescr>{descr}</TaskDescr>
      </TaskCardMiddle>
      <TaskCardBottom>
        <TaskAuthorImg>
          <img src={authorImg} alt={name} />
        </TaskAuthorImg>
        <TaskComments>
          <img src="./Comments.png" />
          <TaskCommentsQuantity>{comments}</TaskCommentsQuantity>
        </TaskComments>
      </TaskCardBottom>
    </TaskCardLayout>
  );
}
