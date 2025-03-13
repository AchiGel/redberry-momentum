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
  priIsOpen,
  setPriIsOpen,
  selectedPriority,
  setSelectedPriority,
}: {
  priorities: Priority[];
  priIsOpen: boolean;
  setPriIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectedPriority: number[];
  setSelectedPriority: React.Dispatch<React.SetStateAction<number[]>>;
}) {
  // ***************** პრიორიტეტების არჩევის ფუნქცია *********************//

  const handleCheckboxChange = (id: number) => {
    setSelectedPriority((prev) =>
      prev.includes(id)
        ? prev.filter((priorId) => priorId !== id)
        : [...prev, id]
    );
  };

  // ***************** არჩევის დადასტურება *********************//

  const handleChoose = () => {
    console.log("Selected Priorities:", selectedPriority);
    setPriIsOpen(false);
  };

  return (
    <SelectLayout>
      <OptionSelectButton onClick={() => setPriIsOpen(!priIsOpen)}>
        პრიორიტეტი
      </OptionSelectButton>

      {priIsOpen && (
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
