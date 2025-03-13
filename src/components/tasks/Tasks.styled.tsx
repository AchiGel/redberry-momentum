import styled from "styled-components";

export const TasksGrid = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  gap: 52px;
  margin-bottom: 152px;
`;

export const TasksColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const TaskStatus = styled.div<{ $id: number }>`
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
