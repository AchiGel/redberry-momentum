import { useEffect, useState } from "react";
import {
  FilterSelected,
  FilterSelectedRemoveButton,
  FiltersSelectedLayout,
  SelectedFiltersClear,
} from "./Filtration.styled";
import { Department, Employee, Priority } from "../../pages/Home/Home";

export default function FiltersSelected({
  selectedFilters,
  setSelectedFilters,
  setSelectedDepartments,
  setSelectedPriority,
  setSelectedEmployee,
  departments,
  priorities,
  employees,
}: {
  selectedFilters: {
    departments: number[];
    priority: number[];
    employee: number | null;
  };
  setSelectedFilters: React.Dispatch<
    React.SetStateAction<{
      departments: number[];
      priority: number[];
      employee: number | null;
    }>
  >;
  setSelectedDepartments: React.Dispatch<React.SetStateAction<number[]>>;
  setSelectedPriority: React.Dispatch<React.SetStateAction<number[]>>;
  setSelectedEmployee: React.Dispatch<React.SetStateAction<number | null>>;
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

  // ***************** ეს ფუნქცია შლის თითოეულ ფილტრს სათითაოდ,
  // რისთვისაც საჭიროა ფილტრის კონტენტის საფუძველზე იმის დადგენა,
  // დეპარტამენტია ეს, პრიორიტეტი თუ თანამშრომელი *********************//

  const handleFilterRemove = (filterName: string) => {
    // ***************** დეპარტამენტების შემოწმება *********************//
    const departmentToRemove = departments.find(
      (dep) => dep.name === filterName
    );
    if (departmentToRemove) {
      setSelectedFilters((prev) => ({
        ...prev,
        departments: prev.departments.filter(
          (id) => id !== departmentToRemove.id
        ),
      }));
      setSelectedDepartments((prev) =>
        prev.filter((id) => id !== departmentToRemove.id)
      );
      return;
    }

    // ***************** პრიორიტეტების შემოწმება *********************//
    const priorityToRemove = priorities.find((pri) => pri.name === filterName);
    if (priorityToRemove) {
      setSelectedFilters((prev) => ({
        ...prev,
        priority: prev.priority.filter((id) => id !== priorityToRemove.id),
      }));
      setSelectedPriority((prev) =>
        prev.filter((id) => id !== priorityToRemove.id)
      );
      return;
    }

    // ***************** თანამშრომლების შემოწმება *********************//
    const employeeToRemove = employees.find(
      (emp) => `${emp.name} ${emp.surname}` === filterName
    );
    if (employeeToRemove) {
      setSelectedFilters((prev) => ({
        ...prev,
        employee: null,
      }));
      setSelectedEmployee(null);
    }
  };

  return (
    <FiltersSelectedLayout>
      {allFilters.map((f) => (
        <FilterSelected key={f}>
          {f}
          <FilterSelectedRemoveButton onClick={() => handleFilterRemove(f)} />
        </FilterSelected>
      ))}
      <SelectedFiltersClear
        onClick={() => {
          setSelectedFilters({
            departments: [],
            priority: [],
            employee: null,
          });
          setSelectedDepartments([]);
          setSelectedPriority([]);
          setSelectedEmployee(null);
        }}
      >
        გასუფთავება
      </SelectedFiltersClear>
    </FiltersSelectedLayout>
  );
}
