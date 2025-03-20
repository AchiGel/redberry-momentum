import styled from "styled-components";

const CheckboxContainer = styled.label`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  position: relative;
`;

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
`;

const StyledCheckbox = styled.span<{ $checked: boolean; $id?: number }>`
  width: 22px;
  height: 22px;
  border: 1.5px solid
    ${(props) =>
      props.$id === 1
        ? "#204f7e"
        : props.$id === 2
        ? "#6a8cfd"
        : props.$id === 3
        ? "#fdfb6c"
        : props.$id === 4
        ? "#FD9A6A"
        : props.$id === 5
        ? "#89B6FF"
        : props.$id === 6
        ? "#FFD86D"
        : props.$id === 7
        ? "#FF66A8"
        : "#8338EC"};
  background-color: white;
  border-radius: 6px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  &::after {
    content: ${(props) => (props.$checked ? 'url("/check.png")' : "")};
    width: 16px;
    height: 14px;
    filter: ${(props) =>
      props.$id === 1
        ? "invert(22%) sepia(40%) saturate(1999%) hue-rotate(185deg) brightness(50%) contrast(85%)"
        : props.$id === 2
        ? "invert(66%) sepia(54%) saturate(6007%) hue-rotate(207deg) brightness(104%) contrast(98%)"
        : props.$id === 3
        ? "invert(100%) sepia(29%) saturate(4412%) hue-rotate(30deg) brightness(190%) contrast(104%)"
        : props.$id === 4
        ? "invert(64%) sepia(64%) saturate(572%) hue-rotate(337deg) brightness(106%) contrast(98%)"
        : props.$id === 5
        ? "invert(70%) sepia(12%) saturate(2691%) hue-rotate(189deg) brightness(101%) contrast(103%)"
        : props.$id === 6
        ? "invert(100%) sepia(25%) saturate(6435%) hue-rotate(40deg) brightness(180%) contrast(150%)"
        : props.$id === 7
        ? "invert(68%) sepia(79%) saturate(3371%) hue-rotate(299deg) brightness(101%) contrast(105%)"
        : "invert(21%) sepia(100%) saturate(2516%) hue-rotate(245deg) brightness(70%) contrast(95%)"};
  }
`;

export default function CustomCheckbox({
  checked,
  onChange,
  deptId,
}: {
  checked: boolean;
  onChange: () => void;
  deptId?: number;
}) {
  return (
    <CheckboxContainer>
      <HiddenCheckbox checked={checked} onChange={onChange} />
      <StyledCheckbox $id={deptId} $checked={checked} />
    </CheckboxContainer>
  );
}
