import styled from "styled-components";

export const AgentModalOverlay = styled.div<{ $isopen: boolean }>`
  position: absolute;
  top: 0;
  left: -120px;
  height: 100vh;
  width: 100vw;
  display: ${(props) => (props.$isopen ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  background-color: rgba(13, 15, 16, 0.15);
  backdrop-filter: blur(5px);
`;

export const AgentModal = styled.div`
  background-color: white;
  padding: 40px 50px 60px 50px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 37px;
`;

export const CancelButton = styled.button`
  border: none;
  outline: none;
  background: transparent;
`;

export const AgentForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const FormFields = styled.div`
  display: flex;
  flex-direction: column;
  gap: 45px;
  margin-bottom: 25px;
`;

export const FormTitle = styled.h2`
  color: #212529;
  text-align: center;
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const FormLabel = styled.label`
  color: #343a40;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 3px;
  position: relative;
  &::after {
    content: url("./Asterisk.png");
    position: absolute;
    top: -4px;
  }
`;

export const FormInput = styled.input`
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #ced4da;
  outline: none;
  margin-bottom: 6px;
`;

export const Validation = styled.span`
  color: #6c757d;
  font-size: 10px;
  font-style: normal;
  font-weight: 350;
  line-height: normal;
  display: flex;
  align-items: center;
  gap: 2px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputRow = styled.div`
  display: flex;
  align-items: center;
  gap: 45px;
`;

export const FormButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 22px;
`;

export const CancelButtonBottom = styled.button`
  padding: 10px 16px;
  border-radius: 5px;
  border: 1px solid #8338ec;
  color: #343a40;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const AddButton = styled.button`
  border-radius: 5px;
  background: #8338ec;
  border: none;
  padding: 10px 20px;
  color: #fff;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
