import { Department } from "../../pages/Home";
import { useState } from "react";
import {
  OptionChooseButton,
  OptionLabel,
  OptionLabelName,
  OptionsDropDown,
  OptionSelectButton,
  SelectLayout,
} from "./Filtration.styled";

export default function DepartmentSelect({
  departments,
  depIsOpen,
  setDepIsOpen,
}: {
  departments: Department[];
  depIsOpen: boolean;
  setDepIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  // ***************** ამორჩეული დეპარტამენტების სთეითი *********************//
  const [selectedDepartments, setSelectedDepartments] = useState<number[]>([]);

  // ***************** დეპარტამენტების არჩევის ფუნქცია *********************//

  const handleCheckboxChange = (id: number) => {
    setSelectedDepartments((prev) =>
      prev.includes(id) ? prev.filter((deptId) => deptId !== id) : [...prev, id]
    );
  };

  // ***************** არჩევის დადასტურება *********************//

  const handleChoose = () => {
    console.log("Selected Departments:", selectedDepartments);
    setDepIsOpen(false);
  };

  return (
    <SelectLayout>
      <OptionSelectButton onClick={() => setDepIsOpen(!depIsOpen)}>
        დეპარტამენტი
      </OptionSelectButton>

      {depIsOpen && (
        <OptionsDropDown>
          {departments.map((dept) => (
            <OptionLabel key={dept.id}>
              <input
                type="checkbox"
                checked={selectedDepartments.includes(dept.id)}
                onChange={() => handleCheckboxChange(dept.id)}
              />
              <OptionLabelName>{dept.name}</OptionLabelName>
            </OptionLabel>
          ))}

          <OptionChooseButton onClick={handleChoose}>არჩევა</OptionChooseButton>
        </OptionsDropDown>
      )}
    </SelectLayout>
  );
}
