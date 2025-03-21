import styled from "styled-components";

export const FormTitle = styled.h1`
  color: #212529;
  font-size: 34px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-top: 40px;
  margin-bottom: 25px;
`;

export const FormLayout = styled.form`
  border-radius: 4px;
  padding: 65px 368px 216px 55px;
  border: 0.3px solid #ddd2ff;
  background: rgba(251, 249, 255, 0.65);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 145px;
`;

export const FormLeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 55px;
  width: 50%;
`;

export const FormLeftColumnRow = styled.div`
  display: flex;
  gap: 32px;
  flex-wrap: wrap;
`;

export const FormRightColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 93px;
  width: 50%;
`;

export const FormColumns = styled.div`
  display: flex;
  gap: 55px;
  width: 100%;
`;
