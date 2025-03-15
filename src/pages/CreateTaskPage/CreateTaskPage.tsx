import { useEffect, useState } from "react";
import {
  InputWrapper,
  FormLabel,
  FormInput,
  Validation,
  AddButton,
} from "../../components/createAgentModal/CreateAgentModal.styled";
import {
  FormLayout,
  FormColumns,
  FormLeftColumn,
  FormLeftColumnRow,
  FormRightColumn,
  FormTitle,
} from "./CreateTaskPage.styled";
import {
  getAllDepartments,
  getAllEmployees,
  getAllPriorities,
  getAllStatuses,
} from "../../services/api";
import { Status, Department, Priority, Employee } from "../Home/Home";
// import styled from "styled-components";
import StatusesSelect from "../../components/createTaskPageComponent/StatusesSelect";
import PrioritySelect from "../../components/createTaskPageComponent/PrioritySelect";
import DepartmentSelect from "../../components/createTaskPageComponent/DepartmentSelect";
import EmployeeSelect from "../../components/createTaskPageComponent/EmployeeSelect";

// const CustomSelect = styled.select`
//   width: 100%;
//   padding: 14px;
//   background: white;
//   border-radius: 5px;
//   border: 1px solid #dee2e6;
//   color: #0d0f10;
//   font-size: 14px;
//   font-style: normal;
//   font-weight: 300;
//   line-height: normal;
//   cursor: pointer;
//   &:focus {
//     border-color: #007bff;
//     outline: none;
//     box-shadow: 0 0 4px rgba(0, 123, 255, 0.5);
//   }
// `;

export default function CreateTaskPage() {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [statuses, setStatuses] = useState<Status[]>([]);
  const [departments, setDepartments] = useState<Department[]>([]);
  const [priorities, setPriorities] = useState<Priority[]>([]);
  const [employees, setEmployees] = useState<Employee[]>([]);

  const [isDisabled, setIsDisabled] = useState(true);
  const [filteredEmployees, setFilteredEmployees] = useState<Employee[]>([]);

  const [selectedStatus, setSelectedStatus] = useState<string>("დასაწყები");
  const [selectedPriority, setSelectedPriority] = useState<string>("საშუალო");
  const [selectedDepartment, setSelectedDepartment] = useState<string>(
    "ადმინისტრაციის დეპარტამენტი"
  );
  const [selectedEmployee, setSelectedEmployee] = useState<Employee>();

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

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const selectedStatusObj = statuses.find((s) => s.name === selectedStatus);
    const selectedPriorityObj = priorities.find(
      (p) => p.name === selectedPriority
    );
    const selectedDepartmentObj = departments.find(
      (d) => d.name === selectedDepartment
    );
    const selectedEmployeeObj = employees.find(
      (e) => e.name === selectedEmployee?.name
    );

    const formData = new FormData();
    if (name) formData.append("name", name);
    if (description) formData.append("description", description);
    if (selectedStatusObj)
      formData.append("status_id", selectedStatusObj.id.toString());
    if (selectedPriorityObj)
      formData.append("priority_id", selectedPriorityObj.id.toString());
    if (selectedDepartmentObj)
      formData.append("department_id", selectedDepartmentObj.id.toString());
    if (selectedEmployeeObj)
      formData.append("employee_id", selectedEmployeeObj.id.toString());

    console.log("Form Data:", Object.fromEntries(formData.entries()));
  };

  return (
    <div style={{ marginBottom: "150px" }}>
      <FormTitle>შექმენი ახალი დავალება</FormTitle>
      {statuses.length === 0 ||
      departments.length === 0 ||
      employees.length === 0 ||
      priorities.length === 0 ? (
        "Loading..."
      ) : (
        <FormLayout onSubmit={handleFormSubmit}>
          <FormColumns>
            <FormLeftColumn>
              <InputWrapper>
                <FormLabel>სათაური</FormLabel>
                <FormInput
                  type="text"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
                <Validation>მინიმუმ 2 სიმბოლო</Validation>
                <Validation>მაქსიმუმ 255 სიმბოლო</Validation>
              </InputWrapper>
              <InputWrapper>
                <FormLabel>აღწერა</FormLabel>
                <FormInput
                  type="textarea"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
                <Validation>მინიმუმ 2 სიმბოლო</Validation>
                <Validation>მაქსიმუმ 255 სიმბოლო</Validation>
              </InputWrapper>
              <FormLeftColumnRow>
                <InputWrapper>
                  <FormLabel htmlFor="priority">პრიორიტეტი</FormLabel>
                  <PrioritySelect
                    priorities={priorities}
                    selectedPriority={selectedPriority}
                    setSelectedPriority={setSelectedPriority}
                  />
                </InputWrapper>
                <InputWrapper>
                  <FormLabel htmlFor="status">სტატუსი</FormLabel>
                  <StatusesSelect
                    statuses={statuses}
                    setSelectedStatus={setSelectedStatus}
                    selectedStatus={selectedStatus}
                  />
                </InputWrapper>
              </FormLeftColumnRow>
            </FormLeftColumn>
            <FormRightColumn>
              <InputWrapper>
                <FormLabel htmlFor="department">დეპარტამენტი</FormLabel>
                <DepartmentSelect
                  selectedDepartment={selectedDepartment}
                  setSelectedDepartment={setSelectedDepartment}
                  departments={departments}
                  setIsDisabled={setIsDisabled}
                  employees={employees}
                  setFilteredEmployees={setFilteredEmployees}
                />
              </InputWrapper>
              <InputWrapper>
                <FormLabel htmlFor="employee">
                  პასუხისმგებელი თანამშრომელი
                </FormLabel>
                <EmployeeSelect
                  employees={filteredEmployees}
                  selectedEmployee={selectedEmployee}
                  setSelectedEmployee={setSelectedEmployee}
                  isDisabled={isDisabled}
                />
              </InputWrapper>
              <InputWrapper>
                <FormLabel htmlFor="date">დედლაინი</FormLabel>
                <input type="date" name="date" id="date" />
              </InputWrapper>
            </FormRightColumn>
          </FormColumns>
          <AddButton type="submit">დავალების შექმნა</AddButton>
        </FormLayout>
      )}
    </div>
  );
}
