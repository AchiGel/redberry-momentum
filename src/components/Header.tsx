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

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <HeaderWrapper>
      <HeaderLogo>
        <img src="./Momentum.png" alt="logo_text" />
        <img src="./Hourglass.png" alt="logo" />
      </HeaderLogo>
      <HeaderButtons>
        <button onClick={() => setIsOpen(!isOpen)}>თანამშრომლის შექმნა</button>
        <Link to="/create_task">შექმენი ახალი დავალება</Link>
      </HeaderButtons>
      <CreateAgentModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </HeaderWrapper>
  );
}
