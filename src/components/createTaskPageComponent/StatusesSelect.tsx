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
  id,
}: {
  statuses: Status[];
  selectedStatus: string;
  setSelectedStatus: React.Dispatch<React.SetStateAction<string>>;
  id: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option: Status) => {
    setSelectedStatus(option.name);
    setIsOpen(false);
  };

  return (
    <SelectContainer>
      <SelectButton
        id={id}
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
