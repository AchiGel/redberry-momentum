import { useState } from "react";
import { Priority } from "../../pages/Home/Home";
import {
  SelectButton,
  SelectContainer,
  SelectDropDown,
  SelectOption,
} from "./StatusesSelect.styled";

export default function PrioritySelect({
  priorities,
  setSelectedPriority,
  selectedPriority,
  id,
  validate,
}: {
  priorities: Priority[];
  selectedPriority: string;
  setSelectedPriority: React.Dispatch<React.SetStateAction<string>>;
  id: string;
  validate: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option: Priority) => {
    setSelectedPriority(option.name);
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
        <img
          src={priorities.find((p) => p.name === selectedPriority)?.icon}
          alt={selectedPriority}
        />
        {selectedPriority ? (
          selectedPriority
        ) : (
          <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <img
              src={priorities.find((p) => p.id === 2)?.icon}
              alt="middle Icon"
            />
            {priorities.find((p) => p.id === 2)?.name}
          </span>
        )}
      </SelectButton>
      {isOpen && (
        <SelectDropDown>
          {priorities.map((option) => (
            <SelectOption key={option.id} onClick={() => handleSelect(option)}>
              <img src={option.icon} alt={option.name} />
              {option.name}
            </SelectOption>
          ))}
        </SelectDropDown>
      )}
    </SelectContainer>
  );
}
