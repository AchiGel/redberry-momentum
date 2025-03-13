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
}: {
  departments: Department[];
}) {
  // ***************** ამორჩეული დეპარტამენტები და დროფდაუნის ჩამოშლა *********************//
  const [selectedDepartments, setSelectedDepartments] = useState<number[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  // ***************** დეპარტამენტების არჩევის ფუნქცია *********************//

  const handleCheckboxChange = (id: number) => {
    setSelectedDepartments((prev) =>
      prev.includes(id) ? prev.filter((deptId) => deptId !== id) : [...prev, id]
    );
  };

  // ***************** არჩევის დადასტურება *********************//

  const handleChoose = () => {
    console.log("Selected Departments:", selectedDepartments);
    setIsOpen(false);
  };

  return (
    <SelectLayout>
      <OptionSelectButton onClick={() => setIsOpen(!isOpen)}>
        დეპარტამენტი
      </OptionSelectButton>

      {isOpen && (
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
