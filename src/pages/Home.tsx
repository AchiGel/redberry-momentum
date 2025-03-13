import { useEffect, useState } from "react";
import Filtration from "../components/filtration/Filtration";
import { getAllStatuses, getAllTasks } from "../services/api";
import { FormTitle } from "./CreateTaskPage";
import Tasks from "../components/tasks/Tasks";
import FiltersSelected from "../components/filtration/FiltersSelected";

export interface Status {
  id: number;
  name: string;
}

export interface Priority {
  id: number;
  name: string;
  icon: string;
}

export interface Department {
  id: number;
  name: string;
}

export interface Employee {
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

  // ***************** ამორჩეული დეპარტამენტის, პრიორიტეტის და თანამშრომლის სთეითები *********************//

  const [selectedDepartments, setSelectedDepartments] = useState<number[]>([]);
  const [selectedPriority, setSelectedPriority] = useState<number[]>([]);
  const [selectedEmployee, setSelectedEmployee] = useState<number | null>(null);
  //////////////////////////////////////////////////////
  const [selectedFilters, setSelectedFilters] = useState<{
    departments: number[];
    priority: number[];
    employee: number | null;
  }>({
    departments: [],
    priority: [],
    employee: null,
  });

  useEffect(() => {
    setSelectedFilters({
      departments: selectedDepartments,
      priority: selectedPriority,
      employee: selectedEmployee,
    });
  }, [selectedDepartments, selectedPriority, selectedEmployee]);

  ///////////////////////////////////////////
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
      <Filtration
        setSelectedDepartments={setSelectedDepartments}
        setSelectedPriority={setSelectedPriority}
        setSelectedEmployee={setSelectedEmployee}
      />
      {selectedDepartments.length > 0 ||
      selectedPriority.length > 0 ||
      selectedEmployee ? (
        <FiltersSelected selectedFilters={selectedFilters} />
      ) : null}

      <Tasks statuses={statuses} tasks={tasks} />
    </div>
  );
}
