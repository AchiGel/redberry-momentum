import styled from "styled-components";

export const SelectContainer = styled.div`
  position: relative;
  width: 259px;
  min-width: 100%;
`;

export const SelectButton = styled.button<{
  $isOpen: boolean;
  $isDisabled?: boolean;
}>`
  min-height: 45px;
  position: relative;
  width: 100%;
  padding: 10px;
  background: white;
  border: 1px solid #dee2e6;
  border-radius: 5px;
  cursor: ${(props) => (props.$isDisabled ? "" : "pointer")};
  text-align: left;
  display: flex;
  align-items: center;
  gap: 6px;
  color: #0d0f10;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  &::after {
    content: url("./arrow_down.png");
    position: absolute;
    top: ${(props) => (props.$isOpen ? "16px" : "8px")};
    right: ${(props) => (props.$isOpen ? "4px" : "14px")};
    width: 14px;
    height: 14px;
    transform: ${(props) => (props.$isOpen ? "rotate(180deg)" : "")};
    filter: ${(props) =>
      props.$isDisabled
        ? "invert(86%) sepia(8%) saturate(288%) hue-rotate(169deg) brightness(84%) contrast(87%);"
        : ""};
  }
`;

export const SelectDropDown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: white;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 10;
`;

export const SelectOption = styled.div`
  padding: 10px;
  cursor: pointer;
  border-bottom: 1px solid #eee;
  display: flex;
  align-items: center;
  gap: 6px;
  color: #0d0f10;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;
