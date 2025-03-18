import styled from "styled-components";

export const ImageUploadLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.4s ease;
  width: 100%;
  height: 120px;
  border-radius: 8px;
  border: 1px dashed #ced4da;

  &:hover {
    cursor: pointer;
    border: 1px solid #2d3648;
    scale: 0.99;
  }
`;

export const ImageUloadImput = styled.input`
  display: none;
`;

export const PreviewBox = styled.div<{ $avatar: File | null }>`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.4s ease;
  width: 100%;
  height: 120px;
  border-radius: 8px;
  border: ${(props) =>
    props.$avatar ? "1px dashed #08A508" : "1px dashed #ced4da"};
`;

export const PreviewImageBox = styled.div`
  position: relative;
`;

export const PreviewRemoveButton = styled.button`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 24px;
  height: 24px;
  border-radius: 30px;
  border: 0.3px solid #6c757d;
  background-color: #fff;
  background-image: url("/trash-2.png");
  background-repeat: no-repeat;
  background-position: center;
  &:hover {
    cursor: pointer;
  }
`;

export const PrevImageContainer = styled.div`
  width: 88px;
  height: 88px;
  border-radius: 100px;
  overflow: hidden;
`;

export const PrevImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 4px;
`;

export const PrevPlaceholderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 7px;
`;

export const PrevSpan = styled.span`
  color: #343a40;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
