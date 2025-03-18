import { useEffect, useState } from "react";
import Filtration from "../../components/filtration/Filtration";
import {
  getAllDepartments,
  getAllEmployees,
  getAllPriorities,
  getAllStatuses,
  getAllTasks,
} from "../../services/api";
import Tasks from "../../components/tasks/Tasks";
import FiltersSelected from "../../components/filtration/FiltersSelected";
import { FormTitle } from "../CreateTaskPage/CreateTaskPage.styled";

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
  department: Department;
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
}

export default function Home() {
  const [statuses, setStatuses] = useState<Status[]>([]);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [departments, setDepartments] = useState<Department[]>([]);
  const [priorities, setPriorities] = useState<Priority[]>([]);
  const [employees, setEmployees] = useState<Employee[]>([]);

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

  return (
    <div>
      <FormTitle>დავალებების გვერდი</FormTitle>
      <Filtration
        setSelectedDepartments={setSelectedDepartments}
        setSelectedPriority={setSelectedPriority}
        setSelectedEmployee={setSelectedEmployee}
        departments={departments}
        priorities={priorities}
        employees={employees}
      />
      {selectedFilters.departments.length > 0 ||
      selectedFilters.priority.length > 0 ||
      selectedFilters.employee ? (
        <FiltersSelected
          departments={departments}
          priorities={priorities}
          employees={employees}
          selectedFilters={selectedFilters}
          setSelectedFilters={setSelectedFilters}
          setSelectedDepartments={setSelectedDepartments}
          setSelectedPriority={setSelectedPriority}
          setSelectedEmployee={setSelectedEmployee}
        />
      ) : null}

      <Tasks
        statuses={statuses}
        tasks={tasks}
        selectedFilters={selectedFilters}
      />
    </div>
  );
}
