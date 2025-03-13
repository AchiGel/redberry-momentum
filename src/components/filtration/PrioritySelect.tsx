import { Priority } from "../../pages/Home";

export default function PrioritySelect({
  priorities,
}: {
  priorities: Priority[];
}) {
  return (
    <select name="priorities" id="priority-select">
      {priorities.map((p) => (
        <option key={p.id} value={p.name}>
          {p.name}
        </option>
      ))}
    </select>
  );
}
