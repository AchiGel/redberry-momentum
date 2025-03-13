import { Employee } from "../../pages/Home";

export default function EmployeeSelect({
  employees,
}: {
  employees: Employee[];
}) {
  return (
    <select name="employees" id="employee-select">
      {employees.map((e) => (
        <option key={e.id} value={e.name}>
          {e.name}
        </option>
      ))}
    </select>
  );
}
