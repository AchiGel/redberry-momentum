import { useEffect, useState } from "react";
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
import { Department } from "../../pages/Home/Home";
import { getAllDepartments, postEmployee } from "../../services/api";
import {
  SelectContainer,
  SelectButton,
  SelectDropDown,
  SelectOption,
} from "../createTaskPageComponent/StatusesSelect.styled";
import AgentAvatar from "./AgentAvatar";

export default function CreateAgentModal({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [depIsOpen, setDepIsOpen] = useState<boolean>(false);
  //******************** დეპარტამენტები *******************//
  const [departments, setDepartments] = useState<Department[]>([]);
  //******************** არჩეული მნიშვნელობები *******************//
  const [name, setName] = useState<string>("");
  const [surname, setSurname] = useState<string>("");
  const [selectedDepartment, setSelectedDepartment] = useState<string>("");

  //********************************* ველების ვალიდაცია *********************************//

  //******************** სახელის ვალიდაცია *******************//

  const [nameIsTouched, setNameIsTouched] = useState(false);

  const nameValidation = () => {
    if (
      !name.trim() ||
      name.length < 2 ||
      name.length > 255 ||
      !name.match("^[a-zA-Zა-ჰ]+$")
    ) {
      return false;
    }
    return true;
  };

  const nameIsValid = nameValidation();

  //******************** გვარის ვალიდაცია *******************//

  const [surnameIsTouched, setSurnameIsTouched] = useState(false);

  const surnameValidation = () => {
    if (
      !surname.trim() ||
      surname.length < 2 ||
      surname.length > 255 ||
      !surname.match("^[a-zA-Zა-ჰ]+$")
    ) {
      return false;
    }
    return true;
  };

  const surnameIsValid = surnameValidation();

  //******************** ავატარის ვალიდაცია *******************//

  const [avatar, setAvatar] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file || !file.type.startsWith("image/") || file.size > 600 * 1024)
      return;

    setAvatar(file);
  };

  //******************** დეპარტამენტის ვალიდაცია *******************//

  const [departmentIsTouched, setDepartmentIsTouched] = useState(false);

  const departmentIsValid = selectedDepartment.trim() !== "";

  //******************** მოგვაქვს დეპარტამენტები სერვერიდან *******************//

  useEffect(() => {
    const loadDepartments = async () => {
      try {
        const departments = await getAllDepartments();
        setDepartments(departments);
      } catch (error) {
        console.log(error);
      }
    };
    loadDepartments();
  }, [isOpen]);

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

  // ***************** ვირჩევთ დეპარტამენტს *********************//

  const handleSelect = (option: Department) => {
    setSelectedDepartment(option.name);
    setDepartmentIsTouched(true);
    setDepIsOpen(false);
  };

  //******************** ფორმის დადასტურების ფუნქცია, რომელიც ქმნის formData-ს სერვერზე გასაგზავნად *******************//

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!nameIsValid || !surnameIsValid || !departmentIsValid || !avatar) {
      setNameIsTouched(true);
      setSurnameIsTouched(true);
      setDepartmentIsTouched(true);
      return;
    }

    const formData = new FormData();
    if (name) formData.append("name", name);
    if (surname) formData.append("surname", surname);
    if (selectedDepartment) {
      const departmentId = departments.find(
        (d) => d.name === selectedDepartment
      )?.id;
      if (departmentId !== undefined) {
        formData.append("department_id", departmentId.toString());
      }
    }
    if (avatar) formData.append("avatar", avatar as Blob);

    try {
      await postEmployee(formData);
      setName("");
      setSurname("");
      setSelectedDepartment("");
      setAvatar(null);
      setNameIsTouched(false);
      setSurnameIsTouched(false);
      setDepartmentIsTouched(false);
      console.log("employee posted successfuly");
    } catch (error) {
      console.log("error posting employee", error);
    }
  };

  return (
    <AgentModalOverlay onClick={() => setIsOpen(!isOpen)} $isopen={isOpen}>
      <AgentModal onClick={(e) => e.stopPropagation()}>
        <CancelButton
          onClick={() => {
            setIsOpen(!isOpen);
            setName("");
            setSurname("");
            setSelectedDepartment("");
            setAvatar(null);
          }}
        >
          <img src="./Cancel.png" alt="cancel" />
        </CancelButton>
        <AgentForm>
          <FormFields>
            <FormTitle>თანამშრომლის დამატება</FormTitle>
            <InputRow>
              <InputWrapper>
                <FormLabel htmlFor="name">სახელი</FormLabel>
                <FormInput
                  id="name"
                  name="name"
                  type="text"
                  $modal={true}
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (!nameIsTouched) setNameIsTouched(true);
                    if (e.target.value.trim() === "") setNameIsTouched(false);
                  }}
                  $validate={
                    !nameIsTouched
                      ? "1px solid #CED4DA"
                      : nameIsValid
                      ? "1px solid #CED4DA"
                      : "1px solid #FA4D4D"
                  }
                />
                <Validation
                  $validate={
                    !nameIsTouched
                      ? "#6C757D"
                      : nameIsValid
                      ? "#08A508"
                      : "#FA4D4D"
                  }
                >
                  მინიმუმ 2 სიმბოლო
                </Validation>
                <Validation
                  $validate={
                    !nameIsTouched
                      ? "#6C757D"
                      : nameIsValid
                      ? "#08A508"
                      : "#FA4D4D"
                  }
                >
                  მაქსიმუმ 255 სიმბოლო
                </Validation>
              </InputWrapper>
              <InputWrapper>
                <FormLabel htmlFor="surname">გვარი</FormLabel>
                <FormInput
                  type="text"
                  id="surname"
                  $modal={true}
                  name="surname"
                  value={surname}
                  onChange={(e) => {
                    setSurname(e.target.value);
                    if (!surnameIsTouched) setSurnameIsTouched(true);
                    if (e.target.value.trim() === "")
                      setSurnameIsTouched(false);
                  }}
                  $validate={
                    !surnameIsTouched
                      ? "1px solid #CED4DA"
                      : surnameIsValid
                      ? "1px solid #CED4DA"
                      : "1px solid #FA4D4D"
                  }
                />
                <Validation
                  $validate={
                    !surnameIsTouched
                      ? "#6C757D"
                      : surnameIsValid
                      ? "#08A508"
                      : "#FA4D4D"
                  }
                >
                  მინიმუმ 2 სიმბოლო
                </Validation>
                <Validation
                  $validate={
                    !surnameIsTouched
                      ? "#6C757D"
                      : surnameIsValid
                      ? "#08A508"
                      : "#FA4D4D"
                  }
                >
                  მაქსიმუმ 255 სიმბოლო
                </Validation>
              </InputWrapper>
            </InputRow>
            <InputWrapper>
              <AgentAvatar
                avatar={avatar}
                handleFileChange={handleFileChange}
              />
            </InputWrapper>
            <InputWrapper>
              <FormLabel>დეპარტამენტი</FormLabel>
              <SelectContainer>
                <SelectButton
                  $validate={departmentIsTouched && !departmentIsValid}
                  $isOpen={depIsOpen}
                  onClick={(e) => {
                    e.preventDefault();
                    setDepIsOpen(!depIsOpen);
                  }}
                >
                  {selectedDepartment ? (
                    selectedDepartment
                  ) : (
                    <span
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                      }}
                    >
                      {departments.find((d) => d.id === 2)?.name}
                    </span>
                  )}
                </SelectButton>
                {depIsOpen && (
                  <SelectDropDown>
                    {departments.map((option) => (
                      <SelectOption
                        key={option.id}
                        onClick={() => handleSelect(option)}
                      >
                        {option.name}
                      </SelectOption>
                    ))}
                  </SelectDropDown>
                )}
              </SelectContainer>
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
                handleFormSubmit(e);
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
