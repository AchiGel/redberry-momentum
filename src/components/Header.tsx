import { Link } from "react-router";
import styled from "styled-components";
import CreateAgentModal from "./CreateAgentModal";
import { useState } from "react";

const HeaderWrapper = styled.header`
  padding: 30px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

const HeaderLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const HeaderButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`;

const CreateAgentButton = styled.button`
  border-radius: 5px;
  border: 1px solid #8338ec;
  background: #fff;
  padding: 10px 20px;
  color: #212529;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const CreateNewTaskButton = styled.button`
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
  &::after {
    content: url("./add.png");
    height: 20px;
  }
`;

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <HeaderWrapper>
      <Link to="/">
        <HeaderLogo>
          <img src="./Momentum.png" alt="logo_text" />
          <img src="./Hourglass.png" alt="logo" />
        </HeaderLogo>
      </Link>

      <HeaderButtons>
        <CreateAgentButton onClick={() => setIsOpen(!isOpen)}>
          თანამშრომლის შექმნა
        </CreateAgentButton>
        <Link to="/create_task">
          <CreateNewTaskButton>შექმენი ახალი დავალება</CreateNewTaskButton>
        </Link>
      </HeaderButtons>
      <CreateAgentModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </HeaderWrapper>
  );
}
