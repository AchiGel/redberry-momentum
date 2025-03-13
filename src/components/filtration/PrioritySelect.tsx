import { useState } from "react";
import { Priority } from "../../pages/Home";
import {
  OptionChooseButton,
  OptionLabel,
  OptionLabelName,
  OptionsDropDown,
  OptionSelectButton,
  SelectLayout,
} from "./Filtration.styled";

export default function PrioritySelect({
  priorities,
}: {
  priorities: Priority[];
}) {
  const [selectedPriority, setSelectedPriority] = useState<number[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const handleCheckboxChange = (id: number) => {
    setSelectedPriority((prev) =>
      prev.includes(id)
        ? prev.filter((priorId) => priorId !== id)
        : [...prev, id]
    );
  };

  const handleChoose = () => {
    console.log("Selected Priorities:", selectedPriority);
    setIsOpen(false);
  };

  return (
    <SelectLayout>
      <OptionSelectButton onClick={() => setIsOpen(!isOpen)}>
        პრიორიტეტი
      </OptionSelectButton>

      {isOpen && (
        <OptionsDropDown>
          {priorities.map((prior) => (
            <OptionLabel key={prior.id}>
              <input
                type="checkbox"
                checked={selectedPriority.includes(prior.id)}
                onChange={() => handleCheckboxChange(prior.id)}
              />
              <OptionLabelName>{prior.name}</OptionLabelName>
            </OptionLabel>
          ))}

          <OptionChooseButton onClick={handleChoose}>არჩევა</OptionChooseButton>
        </OptionsDropDown>
      )}
    </SelectLayout>
  );
}
