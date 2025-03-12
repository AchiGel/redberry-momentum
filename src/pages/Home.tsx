import { useEffect, useState } from "react";
import Filtration from "../components/Filtration";
import { getAllStatuses, getAllTasks } from "../services/api";
import { FormTitle } from "./CreateTaskPage";
import Tasks from "../components/Tasks";

export interface Status {
  id: number;
  name: string;
}

interface Priority {
  id: number;
  name: string;
  icon: string;
}

interface Department {
  id: number;
  name: string;
}

interface Employee {
  id: number;
  name: string;
  surname: string;
  avatar: string;
  department_id: number;
}

export interface Task {
  id: number;
  name: string;
  description: string;
  due_date: string;
  status: Status;
  priority: Priority;
  department: Department;
  employee: Employee;
  total_comments: number;
}

export default function Home() {
  const [statuses, setStatuses] = useState<Status[]>([]);
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    // ***************** ვტვირთავთ სერვერიდან წამოღებულ სტატუსებს *********************//

    async function loadStatuses() {
      try {
        const statuses = await getAllStatuses();
        setStatuses(statuses);
      } catch (error) {
        console.log(error);
      }
    }
    loadStatuses();

    // ***************** ვტვირთავთ სერვერიდან წამოღებულ დავალებებს *********************//

    async function loadTasks() {
      try {
        const tasks = await getAllTasks();
        setTasks(tasks);
      } catch (error) {
        console.log(error);
      }
    }
    loadTasks();
  }, []);

  return (
    <div>
      <FormTitle>დავალებების გვერდი</FormTitle>
      <Filtration />
      <Tasks statuses={statuses} tasks={tasks} />
    </div>
  );
}
