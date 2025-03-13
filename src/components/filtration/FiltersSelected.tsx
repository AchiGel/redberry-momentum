import { useEffect, useState } from "react";
import {
  getAllDepartments,
  getAllEmployees,
  getAllPriorities,
} from "../../services/api";
import {
  FilterSelected,
  FiltersSelectedLayout,
  SelectedFiltersClear,
} from "./Filtration.styled";
import { Department, Employee, Priority } from "../../pages/Home";

export default function FiltersSelected({
  selectedFilters,
}: {
  selectedFilters: {
    departments: number[];
    priority: number[];
    employee: number | null;
  };
}) {
  const [departments, setDepartments] = useState<Department[]>([]);
  const [priorities, setPriorities] = useState<Priority[]>([]);
  const [employees, setEmployees] = useState<Employee[]>([]);

  const [allFilters, setAllFilters] = useState<string[]>([]);

  useEffect(() => {
    // ***************** ვტვირთავთ სერვერიდან წამოღებულ დეპარტამენტებს *********************//
    const loadDepartments = async () => {
      try {
        const departments = await getAllDepartments();
        setDepartments(departments);
      } catch (error) {
        console.log(error);
      }
    };
    loadDepartments();

    // ***************** ვტვირთავთ სერვერიდან წამოღებულ პრიორიტეტებს *********************//
    const loadPriorities = async () => {
      try {
        const priorities = await getAllPriorities();
        setPriorities(priorities);
      } catch (error) {
        console.log(error);
      }
    };
    loadPriorities();

    // ***************** ვტვირთავთ სერვერიდან წამოღებულ თანამშრომლებს *********************//
    const loadEmployees = async () => {
      try {
        const employees = await getAllEmployees();
        setEmployees(employees);
      } catch (error) {
        console.log(error);
      }
    };
    loadEmployees();
  }, [selectedFilters]);

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
