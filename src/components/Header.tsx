import { Link } from "react-router";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  padding: 30px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  return (
    <HeaderWrapper>
      <HeaderLogo>
        <img src="./Momentum.png" alt="logo_text" />
        <img src="./Hourglass.png" alt="logo" />
      </HeaderLogo>
      <HeaderButtons>
        <Link to="">თანამშრომლის შექმნა</Link>
        <Link to="/create_task">შექმენი ახალი დავალება</Link>
      </HeaderButtons>
    </HeaderWrapper>
  );
}
