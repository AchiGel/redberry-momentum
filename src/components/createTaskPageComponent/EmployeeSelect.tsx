import { useEffect, useState } from "react";
import { Employee } from "../../pages/Home/Home";
import {
  SelectButton,
  SelectContainer,
  SelectDropDown,
  SelectOption,
} from "./StatusesSelect.styled";

export default function EmployeeSelect({
  employees,
  setSelectedEmployee,
  selectedEmployee,
  isDisabled,
  id,
}: {
  employees: Employee[];
  selectedEmployee: Employee | undefined;
  setSelectedEmployee: React.Dispatch<
    React.SetStateAction<Employee | undefined>
  >;
  isDisabled: boolean;
  id: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

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
    setIsOpen(false);
  };

  return (
    <SelectContainer>
      <SelectButton
        id={id}
        type="button"
        disabled={isDisabled}
        $isDisabled={isDisabled}
        $isOpen={isOpen}
        onClick={() => setIsOpen(!isOpen)}
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
      {isOpen && (
        <SelectDropDown>
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
