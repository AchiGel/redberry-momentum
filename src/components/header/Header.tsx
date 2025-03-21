import { Link } from "react-router";
import CreateAgentModal from "../createAgentModal/CreateAgentModal";
import {
  HeaderWrapper,
  HeaderLogo,
  HeaderButtons,
  CreateAgentButton,
  CreateNewTaskButton,
} from "./Header.styled";

export default function Header({
  isOpen,
  setIsOpen,
  setUpdateEmployees,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setUpdateEmployees: React.Dispatch<React.SetStateAction<number>>;
}) {
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
      <CreateAgentModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        setUpdateEmployees={setUpdateEmployees}
      />
    </HeaderWrapper>
  );
}
