import { useState } from "react";
import { Status } from "../../pages/Home/Home";
import {
  SelectButton,
  SelectContainer,
  SelectDropDown,
  SelectOption,
} from "./StatusesSelect.styled";

export default function StatusesSelect({
  statuses,
  setSelectedStatus,
  selectedStatus,
}: {
  statuses: Status[];
  selectedStatus: string;
  setSelectedStatus: React.Dispatch<React.SetStateAction<string>>;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option: Status) => {
    setSelectedStatus(option.name);
    setIsOpen(false);
  };

  return (
    <SelectContainer>
      <SelectButton
        type="button"
        $isOpen={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedStatus ? selectedStatus : "სტატუსი"}
      </SelectButton>
      {isOpen && (
        <SelectDropDown>
          {statuses.map((option) => (
            <SelectOption key={option.id} onClick={() => handleSelect(option)}>
              {option.name}
            </SelectOption>
          ))}
        </SelectDropDown>
      )}
    </SelectContainer>
  );
}
