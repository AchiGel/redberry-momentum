import { useEffect, useState } from "react";
import DepartmentSelect from "./DepartmentSelect";
import EmployeeSelect from "./EmployeeSelect";
import { FilterSelects } from "./Filtration.styled";
import PrioritySelect from "./PrioritySelect";
import {
  getAllDepartments,
  getAllEmployees,
  getAllPriorities,
} from "../../services/api";
import { Department, Employee, Priority } from "../../pages/Home";

export default function Filtration({
  selectedDepartments,
  setSelectedDepartments,
  selectedPriority,
  setSelectedPriority,
  selectedEmployee,
  setSelectedEmployee,
}: {
  selectedDepartments: number[];
  setSelectedDepartments: React.Dispatch<React.SetStateAction<number[]>>;
  selectedPriority: number[];
  setSelectedPriority: React.Dispatch<React.SetStateAction<number[]>>;
  selectedEmployee: number | null;
  setSelectedEmployee: React.Dispatch<React.SetStateAction<number | null>>;
}) {
  const [departments, setDepartments] = useState<Department[]>([]);
  const [priorities, setPriorities] = useState<Priority[]>([]);
  const [employees, setEmployees] = useState<Employee[]>([]);

  const [openDropdown, setOpenDropdown] = useState<
    "department" | "priority" | "employee" | null
  >(null);

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
  }, []);

  // ***************** ფუნქცია დროფდაუნების რიგ-რიგობით გასახსნელად *********************//

  const toggleDropdown = (dropdown: "department" | "priority" | "employee") => {
    setOpenDropdown((prev) => (prev === dropdown ? null : dropdown));
  };

  return (
    <FilterSelects>
      <DepartmentSelect
        departments={departments}
        depIsOpen={openDropdown === "department"}
        setDepIsOpen={() => toggleDropdown("department")}
        selectedDepartments={selectedDepartments}
        setSelectedDepartments={setSelectedDepartments}
      />
      <PrioritySelect
        priorities={priorities}
        priIsOpen={openDropdown === "priority"}
        setPriIsOpen={() => toggleDropdown("priority")}
        selectedPriority={selectedPriority}
        setSelectedPriority={setSelectedPriority}
      />
      <EmployeeSelect
        employees={employees}
        empIsOpen={openDropdown === "employee"}
        setEmpIsOpen={() => toggleDropdown("employee")}
        selectedEmployee={selectedEmployee}
        setSelectedEmployee={setSelectedEmployee}
      />
    </FilterSelects>
  );
}
