import { Department } from "../../pages/Home";

export default function DepartmentSelect({
  departments,
}: {
  departments: Department[];
}) {
  return (
    <select name="departments" id="department-select">
      {departments.map((d) => (
        <option key={d.id} value={d.name}>
          {d.name}
        </option>
      ))}
    </select>
  );
}
