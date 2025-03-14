import {
  InputWrapper,
  FormLabel,
  FormInput,
  Validation,
  AddButton,
  FormTitle,
} from "../../components/createAgentModal/CreateAgentModal.styled";
import {
  FormLayout,
  FormColumns,
  FormLeftColumn,
  FormLeftColumnRow,
  FormRightColumn,
} from "./CreateTaskPage.styled";

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
