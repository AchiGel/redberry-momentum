import styled from "styled-components";

export const FilterSelects = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 45px;
  border-radius: 10px;
  border: 1px solid #dee2e6;
  margin-bottom: 79px;
`;

export const SelectLayout = styled.div`
  position: relative;
  display: inline-block;
`;

export const OptionSelectButton = styled.button`
  padding: 10px 18px;
  border-radius: 10px;
  color: #0d0f10;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: transparent;
  border: none;
  outline: none;
  &::after {
    content: url("/arrow_down.png");
    height: 24px;
  }
`;

export const OptionsDropDown = styled.div`
  position: absolute;
  padding: 40px 30px 20px 30px;
  border-radius: 10px;
  border: 0.5px solid #8338ec;
  background-color: white;
  display: flex;
  flex-direction: column;
  gap: 22px;
  min-width: 688px;
  top: 55px;
`;

export const OptionLabel = styled.label`
  display: flex;
  gap: 15px;
  align-items: center;
`;

export const OptionLabelName = styled.span`
  color: #212529;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const OptionChooseButton = styled.button`
  padding: 8px 20px;
  color: #fff;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border-radius: 20px;
  background: #8338ec;
  border: none;
  outline: none;
  align-self: flex-end;
`;

export const EmployeeAvatar = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 28px;
  object-fit: cover;
`;

export const EmployeeAvatarAndName = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const FiltersSelectedLayout = styled.div`
  margin-bottom: 24px;
  margin-top: -53px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const FilterSelected = styled.div`
  display: flex;
  padding: 6px 10px;
  align-items: center;
  gap: 4px;
  border-radius: 43px;
  border: 1px solid #ced4da;
  background: #fff;
  color: #343a40;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const SelectedFiltersClear = styled.button`
  border-radius: 43px;
  background: #fff;
  padding: 6px 10px;
  border: none;
  outline: none;
  color: #343a40;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
