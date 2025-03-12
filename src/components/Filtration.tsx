import styled from "styled-components";

const FilterSelects = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 45px;
  border-radius: 10px;
  border: 1px solid #dee2e6;
  margin-bottom: 79px;
`;

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
