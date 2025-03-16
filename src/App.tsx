import { Outlet } from "react-router";
import styled from "styled-components";
import Header from "./components/header/Header";
import { useState } from "react";

const Wrapper = styled.div`
  padding-inline: 120px;
`;

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <Wrapper>
      <Header isOpen={modalIsOpen} setIsOpen={setModalIsOpen} />
      <Outlet context={setModalIsOpen} />
    </Wrapper>
  );
}

export default App;
