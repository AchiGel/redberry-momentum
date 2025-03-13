import { useEffect } from "react";
import {
  AgentModalOverlay,
  AgentModal,
  CancelButton,
  AgentForm,
  FormFields,
  FormTitle,
  InputRow,
  InputWrapper,
  FormLabel,
  FormInput,
  Validation,
  FormButtons,
  CancelButtonBottom,
  AddButton,
} from "./CreateAgentModal.styled";

export default function CreateAgentModal({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  // ***************** ვაუქმებთ ვერტიკალურ სქროლს მოდალის გახსნაზე *********************//

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AgentModalOverlay onClick={() => setIsOpen(!isOpen)} $isopen={isOpen}>
      <AgentModal onClick={(e) => e.stopPropagation()}>
        <CancelButton onClick={() => setIsOpen(!isOpen)}>
          <img src="./Cancel.png" alt="cancel" />
        </CancelButton>
        <AgentForm>
          <FormFields>
            <FormTitle>თანამშრომლის დამატება</FormTitle>
            <InputRow>
              <InputWrapper>
                <FormLabel htmlFor="name">სახელი</FormLabel>
                <FormInput type="text" id="name" />
                <Validation>
                  <img src="check.png" alt="check" /> მინიმუმ 2 სიმბოლო
                </Validation>
                <Validation>
                  <img src="check.png" alt="check" /> მაქსიმუმ 255 სიმბოლო
                </Validation>
              </InputWrapper>
              <InputWrapper>
                <FormLabel htmlFor="surname">გვარი</FormLabel>
                <FormInput type="text" id="surname" />
                <Validation>
                  <img src="check.png" alt="check" /> მინიმუმ 2 სიმბოლო
                </Validation>
                <Validation>
                  <img src="check.png" alt="check" /> მაქსიმუმ 255 სიმბოლო
                </Validation>
              </InputWrapper>
            </InputRow>
            <InputWrapper>
              <FormLabel>ავატარი</FormLabel>
              <input type="file" name="" id="" />
            </InputWrapper>
            <InputWrapper>
              <FormLabel>დეპარტამენტი</FormLabel>
              <select />
            </InputWrapper>
          </FormFields>
          <FormButtons>
            <CancelButtonBottom
              onClick={(e) => {
                e.preventDefault();
                setIsOpen(!isOpen);
              }}
            >
              გაუქმება
            </CancelButtonBottom>
            <AddButton
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              დაამატე თანამშრომელი
            </AddButton>
          </FormButtons>
        </AgentForm>
      </AgentModal>
    </AgentModalOverlay>
  );
}
