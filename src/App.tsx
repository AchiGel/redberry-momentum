import { Outlet } from "react-router";
import styled from "styled-components";
import Header from "./components/header/Header";

const Wrapper = styled.div`
  padding-inline: 120px;
`;

function App() {
  return (
    <Wrapper>
      <Header />
      <Outlet />
    </Wrapper>
  );
}

export default App;
