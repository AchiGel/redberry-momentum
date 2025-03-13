import { useState } from "react";
import { Employee } from "../../pages/Home";
import {
  EmployeeAvatar,
  EmployeeAvatarAndName,
  OptionChooseButton,
  OptionLabel,
  OptionLabelName,
  OptionsDropDown,
  OptionSelectButton,
  SelectLayout,
} from "./Filtration.styled";

export default function EmployeeSelect({
  employees,
}: {
  employees: Employee[];
}) {
  const [selectedEmployee, setSelectedEmployee] = useState<number[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const handleCheckboxChange = (id: number) => {
    setSelectedEmployee((prev) =>
      prev.includes(id)
        ? prev.filter((priorId) => priorId !== id)
        : [...prev, id]
    );
  };

  const handleChoose = () => {
    console.log("Selected Employee:", selectedEmployee);
    setIsOpen(false);
  };
  return (
    <SelectLayout>
      <OptionSelectButton onClick={() => setIsOpen(!isOpen)}>
        თანამშრომელი
      </OptionSelectButton>

      {isOpen && (
        <OptionsDropDown>
          {employees.map((emp) => (
            <OptionLabel key={emp.id}>
              <input
                type="checkbox"
                checked={selectedEmployee.includes(emp.id)}
                onChange={() => handleCheckboxChange(emp.id)}
              />
              <EmployeeAvatarAndName>
                <EmployeeAvatar src={emp.avatar} alt={emp.name + "image"} />
                <OptionLabelName>
                  {emp.name + " " + emp.surname}
                </OptionLabelName>
              </EmployeeAvatarAndName>
            </OptionLabel>
          ))}

          <OptionChooseButton onClick={handleChoose}>არჩევა</OptionChooseButton>
        </OptionsDropDown>
      )}
    </SelectLayout>
  );
}
