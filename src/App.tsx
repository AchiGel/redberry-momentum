import { Outlet } from "react-router";
import Header from "./components/Header";
import styled from "styled-components";

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
