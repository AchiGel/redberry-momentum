import { useState } from "react";
import { Department, Employee } from "../../pages/Home/Home";
import {
  SelectButton,
  SelectContainer,
  SelectDropDown,
  SelectOption,
} from "./StatusesSelect.styled";

export default function DepartmentSelect({
  departments,
  setSelectedDepartment,
  selectedDepartment,
  setIsDisabled,
  employees,
  setFilteredEmployees,
}: {
  departments: Department[];
  selectedDepartment: string;
  setSelectedDepartment: React.Dispatch<React.SetStateAction<string>>;
  setIsDisabled: React.Dispatch<React.SetStateAction<boolean>>;
  employees: Employee[];
  setFilteredEmployees: React.Dispatch<React.SetStateAction<Employee[]>>;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option: Department) => {
    setSelectedDepartment(option.name);

    const filteredEmployees = employees.filter(
      (e) => e.department.id === option.id
    );

    console.log(filteredEmployees);

    setFilteredEmployees(filteredEmployees);

    setIsDisabled(false);
    setIsOpen(false);
  };

  return (
    <SelectContainer>
      <SelectButton
        type="button"
        $isOpen={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedDepartment ? selectedDepartment : "სტატუსი"}
      </SelectButton>
      {isOpen && (
        <SelectDropDown>
          {departments.map((option) => (
            <SelectOption key={option.id} onClick={() => handleSelect(option)}>
              {option.name}
            </SelectOption>
          ))}
        </SelectDropDown>
      )}
    </SelectContainer>
  );
}
