import styled from "styled-components";

const TaskCardLayout = styled.div`
  border-radius: 15px;
  border: 1px solid #f7bc30;
  background: #fff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

const TaskCardUpper = styled.div`
  display: flex;
  align-items: center;
`;

const CardPriority = styled.div<{ $priority: string }>`
  border-radius: 4px;
  border: ${(props) =>
    props.$priority === "დაბალი"
      ? "0.5px solid #08A508"
      : props.$priority === "საშუალო"
      ? "0.5px solid #ffbe0b"
      : "0.5px solid #FA4D4D"};
  color: ${(props) =>
    props.$priority === "დაბალი"
      ? "#08A508"
      : props.$priority === "საშუალო"
      ? "#ffbe0b"
      : "#FA4D4D"};
  background: #fff;
  padding: 4px;
  display: flex;
  align-items: center;
  gap: 4px;
`;

 // ***************** დეპარტამენტების ამბავი დასადგენია?????? *********************//

const CardDepartment = styled.div<{ $department: string }>`
  padding: 5px 9px;
  border-radius: 15px;
  background: ${(props) =>
    props.$department === "დიზაინი"
      ? "#FF66A8"
      : props.$department === "გაყიდვები და მარკეტინგის დეპარტამენტი"
      ? "##FD9A6A"
      : "#FA4D4D"};
  color: white;
`;

const CardDate = styled.span`
  color: #212529;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const TaskCardMiddle = styled.div`
  display: flex;
  gap: 12px;
  flex-direction: column;
  padding-inline: 12px;
`;

const TaskName = styled.h2`
  color: #212529;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const TaskDescr = styled.p`
  color: #343a40;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const TaskCardBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TaskAuthorImg = styled.div`
  width: 31px;
  height: 31px;
  border-radius: 31px;
`;

const TaskComments = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const TaskCommentsQuantity = styled.span`
  color: #212529;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export default function TaskCard({
  priority,
  department,
  date,
  name,
  descr,
  authorImg,
  comments,
  priorityIcon,
}: {
  priority: string;
  department: string;
  date: string;
  name: string;
  descr: string;
  authorImg: string;
  comments: number;
  priorityIcon: string;
}) {
  return (
    <TaskCardLayout>
      <TaskCardUpper>
        <CardPriority $priority={priority}>
          <img src={priorityIcon} alt={priority} />
          {priority}
        </CardPriority>
        <CardDepartment $department={department}>{department}</CardDepartment>
        <CardDate>{date}</CardDate>
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
