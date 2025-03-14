import styled from "styled-components";

export const TaskCardLayout = styled.div<{ $layoutColor: number }>`
  border-radius: 15px;
  border: 1px solid
    ${(props) =>
      props.$layoutColor === 1
        ? "#F7BC30"
        : props.$layoutColor === 2
        ? "#FB5607"
        : props.$layoutColor === 3
        ? "#FF006E"
        : "#3A86FF"};
  background: #fff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

export const TaskCardUpper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CardPriorityAndDepartment = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const CardPriority = styled.div<{ $priority: string }>`
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

export const CardDepartment = styled.div<{ $department: string }>`
  padding: 5px 9px;
  border-radius: 15px;
  background: ${(props) =>
    props.$department === "ტექნოლოგიების დეპარტამენტი"
      ? "#FFD86D"
      : props.$department === "ლოჯისტიკის დეპარტამენტი"
      ? "#89B6FF"
      : props.$department === "გაყიდვები და მარკეტინგის დეპარტამენტი"
      ? "#FD9A6A"
      : props.$department === "მედიის დეპარტამენტი"
      ? "#FF66A8"
      : props.$department === "ფინანსების დეპარტამენტი"
      ? "#fdfb6c"
      : props.$department === "ადამიანური რესურსების დეპარტამენტი"
      ? "#6a8cfd"
      : "#204f7e"};
  color: white;
`;

export const CardDate = styled.span`
  color: #212529;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const TaskCardMiddle = styled.div`
  display: flex;
  gap: 12px;
  flex-direction: column;
  padding-inline: 12px;
`;

export const TaskName = styled.h2`
  color: #212529;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const TaskDescr = styled.p`
  color: #343a40;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const TaskCardBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TaskAuthorImg = styled.div`
  width: 31px;
  height: 31px;
  border-radius: 31px;
`;

export const TaskComments = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const TaskCommentsQuantity = styled.span`
  color: #212529;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
