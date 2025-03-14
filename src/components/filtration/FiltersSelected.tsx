import { useEffect, useState } from "react";
import {
  FilterSelected,
  FiltersSelectedLayout,
  SelectedFiltersClear,
} from "./Filtration.styled";
import { Department, Employee, Priority } from "../../pages/Home/Home";

export default function FiltersSelected({
  selectedFilters,
  departments,
  priorities,
  employees,
}: {
  selectedFilters: {
    departments: number[];
    priority: number[];
    employee: number | null;
  };
  departments: Department[];
  priorities: Priority[];
  employees: Employee[];
}) {
  const [allFilters, setAllFilters] = useState<string[]>([]);

  // ***************** ვაახლებთ ყველა მონიშნული ფილტრის სთეითს *********************//

  useEffect(() => {
    const filters: string[] = [];

    // ***************** დეპარტამენტების სახელები *********************//
    if (selectedFilters.departments.length > 0) {
      selectedFilters.departments.forEach((depId) => {
        const department = departments.find((dep) => dep.id === depId);
        if (department) filters.push(department.name);
      });
    }

    // ***************** პრიორიტეტების სახელები *********************//
    if (selectedFilters.priority.length > 0) {
      selectedFilters.priority.forEach((priId) => {
        const priority = priorities.find((pri) => pri.id === priId);
        if (priority) filters.push(priority.name);
      });
    }

    // ***************** თანამშრომლების სახელები *********************//
    if (selectedFilters.employee !== null) {
      const employee = employees.find(
        (emp) => emp.id === selectedFilters.employee
      );
      if (employee) filters.push(`${employee.name} ${employee.surname}`);
    }

    // ***************** სთეითის განახლება *********************//
    setAllFilters(filters);
  }, [selectedFilters, departments, priorities, employees]);

  return (
    <FiltersSelectedLayout>
      {allFilters.map((f) => (
        <FilterSelected key={f}>{f}</FilterSelected>
      ))}
      <SelectedFiltersClear>გასუფთავება</SelectedFiltersClear>
    </FiltersSelectedLayout>
  );
}
