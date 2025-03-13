import {
  FilterSelected,
  FiltersSelectedLayout,
  SelectedFiltersClear,
} from "./Filtration.styled";

export default function FiltersSelected() {
  return (
    <FiltersSelectedLayout>
      <FilterSelected>არჩეული</FilterSelected>
      <FilterSelected>არჩეული</FilterSelected>
      <FilterSelected>არჩეული</FilterSelected>
      <SelectedFiltersClear>გასუფთავება</SelectedFiltersClear>
    </FiltersSelectedLayout>
  );
}
