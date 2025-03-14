import { useState } from "react";
import DepartmentSelect from "./DepartmentSelect";
import EmployeeSelect from "./EmployeeSelect";
import { FilterSelects } from "./Filtration.styled";
import PrioritySelect from "./PrioritySelect";
import { Department, Employee, Priority } from "../../pages/Home/Home";

export default function Filtration({
  setSelectedDepartments,
  setSelectedPriority,
  setSelectedEmployee,
  departments,
  priorities,
  employees,
}: {
  setSelectedDepartments: React.Dispatch<React.SetStateAction<number[]>>;
  setSelectedPriority: React.Dispatch<React.SetStateAction<number[]>>;
  setSelectedEmployee: React.Dispatch<React.SetStateAction<number | null>>;
  departments: Department[];
  priorities: Priority[];
  employees: Employee[];
}) {
  const [openDropdown, setOpenDropdown] = useState<
    "department" | "priority" | "employee" | null
  >(null);

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
        setSelectedDepartments={setSelectedDepartments}
      />
      <PrioritySelect
        priorities={priorities}
        priIsOpen={openDropdown === "priority"}
        setPriIsOpen={() => toggleDropdown("priority")}
        setSelectedPriority={setSelectedPriority}
      />
      <EmployeeSelect
        employees={employees}
        empIsOpen={openDropdown === "employee"}
        setEmpIsOpen={() => toggleDropdown("employee")}
        setSelectedEmployee={setSelectedEmployee}
      />
    </FilterSelects>
  );
}
