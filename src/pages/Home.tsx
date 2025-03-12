import Filtration from "../components/Filtration";
import { FormTitle } from "./CreateTaskPage";

export default function Home() {
  return (
    <div>
      <FormTitle>დავალებების გვერდი</FormTitle>
      <Filtration />
    </div>
  );
}
