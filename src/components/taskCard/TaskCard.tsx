import { Link } from "react-router";
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
  layoutColor: number;
  id: number;
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
  layoutColor,
  id,
}: TaskCardTypes) {
  // ***************** თარიღის ფორმატირება *********************//
  const preDate = new Date(date);
  const formattedDate = preDate.toLocaleDateString("ka-GE", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <Link to={`/${id}`}>
      <TaskCardLayout $layoutColor={layoutColor}>
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
          <TaskDescr>
            {descr.length > 100 ? descr.slice(0, 100) + "..." : descr}
          </TaskDescr>
        </TaskCardMiddle>
        <TaskCardBottom>
          <TaskAuthorImg>
            <img
              style={{ width: "100%", objectFit: "cover" }}
              src={authorImg}
              alt="Author Image"
            />
          </TaskAuthorImg>
          <TaskComments>
            <img src="./Comments.png" />
            <TaskCommentsQuantity>{comments}</TaskCommentsQuantity>
          </TaskComments>
        </TaskCardBottom>
      </TaskCardLayout>
    </Link>
  );
}
