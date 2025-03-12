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

const CardPriority = styled.div`
  border-radius: 4px;
  border: 0.5px solid #ffbe0b;
  background: #fff;
  padding: 4px;
  display: flex;
  align-items: center;
  gap: 4px;
`;

const CardDepartment = styled.div`
  padding: 5px 9px;
  border-radius: 15px;
  background: #ff66a8;
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
        <CardPriority>
          <img src={priorityIcon} alt={priority} />
          {priority}
        </CardPriority>
        <CardDepartment>{department}</CardDepartment>
        <CardDate>{date}</CardDate>
      </TaskCardUpper>
      <TaskCardMiddle>
        <TaskName>{name}</TaskName>
        <TaskDescr>{descr}</TaskDescr>
      </TaskCardMiddle>
      <TaskCardBottom>
        <TaskAuthorImg>
          <img src={authorImg} alt={authorImg} />
        </TaskAuthorImg>
        <TaskComments>
          <img src="./Comments.png" />
          <TaskCommentsQuantity>{comments}</TaskCommentsQuantity>
        </TaskComments>
      </TaskCardBottom>
    </TaskCardLayout>
  );
}
