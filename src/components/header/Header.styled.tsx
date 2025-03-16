import styled from "styled-components";

export const HeaderWrapper = styled.header`
  padding: 30px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

export const HeaderLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const HeaderButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`;

export const CreateAgentButton = styled.button`
  border-radius: 5px;
  border: 1px solid #8338ec;
  background: #fff;
  padding: 10px 20px;
  color: #212529;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  transition: all 0.3s ease;
  &:hover {
    cursor: pointer;
    border: 1px solid #b588f4;
  }
`;

export const CreateNewTaskButton = styled.button`
  border-radius: 5px;
  background: #8338ec;
  border: none;
  padding: 10px 20px;
  color: #fff;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: flex;
  flex-direction: row-reverse;
  gap: 4px;
  transition: all 0.3s ease;
  &::after {
    content: url("./add.png");
    height: 20px;
  }
  &:hover {
    cursor: pointer;
    background: #b588f4;
  }
`;
