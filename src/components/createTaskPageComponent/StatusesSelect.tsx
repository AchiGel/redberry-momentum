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
  validate,
}: {
  statuses: Status[];
  selectedStatus: string;
  setSelectedStatus: React.Dispatch<React.SetStateAction<string>>;
  id: string;
  validate: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option: Status) => {
    setSelectedStatus(option.name);
    setIsOpen(false);
  };

  return (
    <SelectContainer>
      <SelectButton
        $validate={validate}
        id={id}
        type="button"
        $isOpen={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedStatus ? (
          selectedStatus
        ) : (
          <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            {statuses.find((s) => s.id === 1)?.name}
          </span>
        )}
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
