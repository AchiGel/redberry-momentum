import { useState } from "react";
import { Employee } from "../../pages/Home/Home";
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
  empIsOpen,
  setEmpIsOpen,
  setSelectedEmployee,
}: {
  employees: Employee[];
  empIsOpen: boolean;
  setEmpIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedEmployee: React.Dispatch<React.SetStateAction<number | null>>;
}) {
  // ***************** თანამშრომლის არჩევის წინასწარ დამახსოვრების სთეითი *********************//
  const [preSelectedEmp, setPreSelectedEmp] = useState<number | null>(null);
  // ***************** თანამშრომლის არჩევის ფუნქცია *********************//

  const handleSelect = (id: number) => {
    setPreSelectedEmp((prev) => (prev === id ? null : id));
  };

  // ***************** არჩევის დადასტურება *********************//

  const handleChoose = () => {
    setSelectedEmployee(preSelectedEmp);
    setEmpIsOpen(false);
  };
  return (
    <SelectLayout>
      <OptionSelectButton onClick={() => setEmpIsOpen(!empIsOpen)}>
        თანამშრომელი
      </OptionSelectButton>

      {empIsOpen && (
        <OptionsDropDown>
          {employees.map((emp) => (
            <OptionLabel key={emp.id}>
              <input
                type="checkbox"
                checked={preSelectedEmp === emp.id}
                onChange={() => handleSelect(emp.id)}
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
