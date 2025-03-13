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
  empIsOpen,
  setEmpIsOpen,
  selectedEmployee,
  setSelectedEmployee,
}: {
  employees: Employee[];
  empIsOpen: boolean;
  setEmpIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectedEmployee: number | null;
  setSelectedEmployee: React.Dispatch<React.SetStateAction<number | null>>;
}) {
  // ***************** თანამშრომლის არჩევის ფუნქცია *********************//

  const handleSelect = (id: number) => {
    setSelectedEmployee(id);
  };

  // ***************** არჩევის დადასტურება *********************//

  const handleChoose = () => {
    console.log("Selected Employee:", selectedEmployee);
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
                checked={selectedEmployee === emp.id}
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
