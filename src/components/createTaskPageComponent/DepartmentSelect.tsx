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
  id,
  validate,
  depIsOpen,
  setDepIsOpen,
}: {
  departments: Department[];
  selectedDepartment: string;
  setSelectedDepartment: React.Dispatch<React.SetStateAction<string>>;
  setIsDisabled: React.Dispatch<React.SetStateAction<boolean>>;
  employees: Employee[];
  setFilteredEmployees: React.Dispatch<React.SetStateAction<Employee[]>>;
  id: string;
  validate: boolean;
  depIsOpen: boolean;
  setDepIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const handleSelect = (option: Department) => {
    setSelectedDepartment(option.name);

    const filteredEmployees = employees.filter(
      (e) => e.department.id === option.id
    );

    setFilteredEmployees(filteredEmployees);

    setIsDisabled(false);
    setDepIsOpen(false);
  };

  return (
    <SelectContainer>
      <SelectButton
        $validate={validate}
        id={id}
        type="button"
        $isOpen={depIsOpen}
        onClick={() => setDepIsOpen(!depIsOpen)}
      >
        {selectedDepartment ? (
          selectedDepartment
        ) : (
          <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            {departments.find((d) => d.id === 2)?.name}
          </span>
        )}
      </SelectButton>
      {depIsOpen && (
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
