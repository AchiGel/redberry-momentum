import styled from "styled-components";

const AgentModalOverlay = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: 0;
  left: -120px;
  height: 100vh;
  width: 100vw;
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  background-color: rgba(13, 15, 16, 0.15);
  backdrop-filter: blur(5px);
`;

const AgentModal = styled.div`
  background-color: white;
  padding: 40px 50px 60px 50px;
  border-radius: 10px;
`;

export default function CreateAgentModal({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <AgentModalOverlay onClick={() => setIsOpen(!isOpen)} isOpen={isOpen}>
      <AgentModal onClick={(e) => e.stopPropagation()}>
        CreateAgentModal
      </AgentModal>
    </AgentModalOverlay>
  );
}
