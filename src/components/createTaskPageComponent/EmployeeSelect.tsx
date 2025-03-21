import { useEffect } from "react";
import { Employee } from "../../pages/Home/Home";
import {
  EmployeeAddButton,
  SelectButton,
  SelectContainer,
  SelectDropDown,
  SelectOption,
} from "./StatusesSelect.styled";
import { useOutletContext } from "react-router";

export default function EmployeeSelect({
  employees,
  setSelectedEmployee,
  selectedEmployee,
  isDisabled,
  id,
  validate,
  empIsOpen,
  setEmpIsOpen,
}: {
  employees: Employee[];
  selectedEmployee: Employee | undefined;
  setSelectedEmployee: React.Dispatch<
    React.SetStateAction<Employee | undefined>
  >;
  isDisabled: boolean;
  id: string;
  validate: boolean;
  empIsOpen: boolean;
  setEmpIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { setModalIsOpen } = useOutletContext<{
    setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  }>();

  useEffect(() => {
    if (
      selectedEmployee &&
      !employees.some((e) => e.id === selectedEmployee.id)
    ) {
      setSelectedEmployee(undefined);
    }
  }, [employees, selectedEmployee, setSelectedEmployee]);

  const handleSelect = (option: Employee) => {
    setSelectedEmployee(option);
    setEmpIsOpen(false);
  };

  return (
    <SelectContainer>
      <SelectButton
        $validate={validate}
        id={id}
        type="button"
        disabled={isDisabled}
        $isDisabled={isDisabled}
        $isOpen={empIsOpen}
        onClick={() => setEmpIsOpen(!empIsOpen)}
      >
        {selectedEmployee ? (
          <img
            style={{ width: "30px", objectFit: "cover", borderRadius: "30px" }}
            src={
              employees.find((p) => p.name === selectedEmployee.name)?.avatar
            }
            alt={selectedEmployee?.name}
          />
        ) : (
          ""
        )}

        {selectedEmployee
          ? `${selectedEmployee.name} ${selectedEmployee.surname}`
          : ""}
      </SelectButton>
      {empIsOpen && (
        <SelectDropDown>
          <EmployeeAddButton
            onClick={(e) => {
              e.preventDefault();
              setModalIsOpen(true);
            }}
          >
            დაამატე თანამშრომელი
          </EmployeeAddButton>
          {employees.map((option) => (
            <SelectOption key={option.id} onClick={() => handleSelect(option)}>
              <img
                style={{
                  width: "30px",
                  objectFit: "cover",
                  borderRadius: "30px",
                }}
                src={option.avatar}
                alt={option.name}
              />
              {option.name + " " + option.surname}
            </SelectOption>
          ))}
        </SelectDropDown>
      )}
    </SelectContainer>
  );
}
