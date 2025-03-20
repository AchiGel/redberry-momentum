import { useState } from "react";
import { Department } from "../../pages/Home/Home";
import {
  OptionChooseButton,
  OptionLabel,
  OptionLabelName,
  OptionsDropDown,
  OptionSelectButton,
  SelectLayout,
} from "./Filtration.styled";
import CustomCheckbox from "./CustomCheckbox";

export default function DepartmentSelect({
  departments,
  depIsOpen,
  setDepIsOpen,
  setSelectedDepartments,
}: {
  departments: Department[];
  depIsOpen: boolean;
  setDepIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedDepartments: React.Dispatch<React.SetStateAction<number[]>>;
}) {
  // ***************** დეპარტამენტების არჩევის წინასწარ დამახსოვრების სთეითი *********************//
  const [preSelectedDeps, setPreSelectedDeps] = useState<number[]>([]);

  // ***************** დეპარტამენტების არჩევის ფუნქცია *********************//

  const handleCheckboxChange = (id: number) => {
    setPreSelectedDeps((prev) =>
      prev.includes(id) ? prev.filter((deptId) => deptId !== id) : [...prev, id]
    );
  };

  // ***************** არჩევის დადასტურება *********************//

  const handleChoose = () => {
    setSelectedDepartments(preSelectedDeps);
    setPreSelectedDeps([]);
    setDepIsOpen(false);
  };

  return (
    <SelectLayout>
      <OptionSelectButton
        $isOpened={depIsOpen}
        onClick={() => setDepIsOpen(!depIsOpen)}
      >
        დეპარტამენტი
      </OptionSelectButton>

      {depIsOpen && (
        <OptionsDropDown>
          {departments.map((dept) => (
            <OptionLabel key={dept.id}>
              <CustomCheckbox
                deptId={dept.id}
                checked={preSelectedDeps.includes(dept.id)}
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
