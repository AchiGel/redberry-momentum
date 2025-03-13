import { Link } from "react-router";
import { useState } from "react";
import CreateAgentModal from "../createAgentModal/CreateAgentModal";
import {
  HeaderWrapper,
  HeaderLogo,
  HeaderButtons,
  CreateAgentButton,
  CreateNewTaskButton,
} from "./Header.styled";

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
