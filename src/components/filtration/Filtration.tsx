import { FilterSelects } from "./Filtration.styled";

export default function Filtration() {
  return (
    <FilterSelects>
      <select name="pets" id="pet-select">
        <option value="">დეპარტამენტი</option>
      </select>
      <select name="pets" id="pet-select">
        <option value="">პრიორიტეტი</option>
      </select>
      <select name="pets" id="pet-select">
        <option value="">თანამშრომელი</option>
      </select>
    </FilterSelects>
  );
}
