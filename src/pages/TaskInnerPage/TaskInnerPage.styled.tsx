import styled from "styled-components";

export const TaskInnerPageContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TaskInnerPageBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 63px;
`;

export const TaskInnerPageMain = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PriorityAndDepartment = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
  margin-bottom: 12px;
  padding-top: 10px;
`;

export const TaskPageMainTitle = styled.h1`
  color: #212529;
  font-size: 34px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  padding-bottom: 10px;
`;

export const TaskPageMainDescription = styled.p`
  margin-top: 26px;
  color: #000;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
`;

export const TaskInnerPageDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const DetailsTitle = styled.h2`
  color: #2a2a2a;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const DetailsTable = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const DetailsTableRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TableRowLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const TableRowLeftText = styled.span`
  color: #474747;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
`;

export const TableEmployeeRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 9px;
`;

export const TableEmployeeDep = styled.span`
  color: #474747;
  font-size: 11px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  margin-bottom: -4px;
`;

export const TableEmployeeImageAndName = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const TableEmployeeImage = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 32px;
  overflow: hidden;
`;

export const TableEmployeeName = styled.span`
  color: #0d0f10;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
`;

export const CommentsContainer = styled.div`
  border-radius: 10px;
  border: 0.3px solid #ddd2ff;
  background: rgba(248, 243, 254, 0.65);
  padding: 40px 45px 52px 45px;
  display: flex;
  flex-direction: column;
  gap: 66px;
  min-width: 741px;
`;

export const CommentsTexarea = styled.textarea`
  resize: none;
  width: 100%;
  min-height: 135px;
  padding: 18px 20px 15px 20px;
  border-radius: 10px;
  border: 0.3px solid #adb5bd;
  background: #fff;
  color: #898989;
  font-size: 14px;
  font-style: normal;
  font-weight: 350;
  line-height: normal;
`;

export const CommentsTexareaConteiner = styled.div`
  position: relative;
`;

export const CommentsList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CommentsTitle = styled.h3`
  color: #000;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const CommentsTitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
`;

export const CommentsQuantity = styled.span`
  width: 30px;
  height: 22px;
  border-radius: 30px;
  background: #8338ec;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
