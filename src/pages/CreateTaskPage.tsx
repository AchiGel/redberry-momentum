import styled from "styled-components";
import {
  AddButton,
  FormInput,
  FormLabel,
  InputWrapper,
  Validation,
} from "../components/CreateAgentModal";

const FormTitle = styled.h1`
  color: #212529;
  font-size: 34px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-top: 40px;
  margin-bottom: 25px;
`;

const FormLayout = styled.form`
  border-radius: 4px;
  padding: 65px 368px 216px 55px;
  border: 0.3px solid #ddd2ff;
  background: rgba(251, 249, 255, 0.65);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 145px;
`;

const FormLeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 55px;
  width: 50%;
`;

const FormLeftColumnRow = styled.div`
  display: flex;
  gap: 32px;
`;

const FormRightColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 55px;
  width: 50%;
`;

const FormColumns = styled.div`
  display: flex;
  gap: 55px;
  width: 100%;
`;

export default function CreateTaskPage() {
  return (
    <div>
      <FormTitle>შექმენი ახალი დავალება</FormTitle>
      <FormLayout>
        <FormColumns>
          <FormLeftColumn>
            <InputWrapper>
              <FormLabel>სათაური</FormLabel>
              <FormInput />
              <Validation>მინიმუმ 2 სიმბოლო</Validation>
              <Validation>მაქსიმუმ 255 სიმბოლო</Validation>
            </InputWrapper>
            <InputWrapper>
              <FormLabel>აღწერა</FormLabel>
              <FormInput />
              <Validation>მინიმუმ 2 სიმბოლო</Validation>
              <Validation>მაქსიმუმ 255 სიმბოლო</Validation>
            </InputWrapper>
            <FormLeftColumnRow>
              <InputWrapper>
                <FormLabel>პრიორიტეტი</FormLabel>
                <select />
              </InputWrapper>
              <InputWrapper>
                <FormLabel>სტატუსი</FormLabel>
                <select />
              </InputWrapper>
            </FormLeftColumnRow>
          </FormLeftColumn>
          <FormRightColumn>
            <InputWrapper>
              <FormLabel>დეპარტამენტი</FormLabel>
              <select />
            </InputWrapper>
            <InputWrapper>
              <FormLabel>პასუხისმგებელი თანამშრომელი</FormLabel>
              <select />
            </InputWrapper>
            <InputWrapper>
              <FormLabel>დედლაინი</FormLabel>
              <select />
            </InputWrapper>
          </FormRightColumn>
        </FormColumns>
        <AddButton>დავალების შექმნა</AddButton>
      </FormLayout>
    </div>
  );
}
