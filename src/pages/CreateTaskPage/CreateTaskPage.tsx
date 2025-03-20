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
  postNewTask,
} from "../../services/api";
import { Status, Department, Priority, Employee } from "../Home/Home";
import StatusesSelect from "../../components/createTaskPageComponent/StatusesSelect";
import PrioritySelect from "../../components/createTaskPageComponent/PrioritySelect";
import DepartmentSelect from "../../components/createTaskPageComponent/DepartmentSelect";
import EmployeeSelect from "../../components/createTaskPageComponent/EmployeeSelect";
import { DateInput } from "../../components/createTaskPageComponent/StatusesSelect.styled";
import { useLocation, useNavigate } from "react-router";

export default function CreateTaskPage() {
  const location = useLocation();
  const navigate = useNavigate();
  //******************** სერვერიდან წამოღებული მონაცემები *******************//

  const [statuses, setStatuses] = useState<Status[]>([]);
  const [departments, setDepartments] = useState<Department[]>([]);
  const [priorities, setPriorities] = useState<Priority[]>([]);
  const [employees, setEmployees] = useState<Employee[]>([]);

  //******************** დამხმარე სთეითები *******************//

  const [isDisabled, setIsDisabled] = useState(true);
  const [filteredEmployees, setFilteredEmployees] = useState<Employee[]>([]);

  //******************** არჩეული/დეფოლტ მნიშვნელობები *******************//

  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [selectedStatus, setSelectedStatus] = useState<string>("");
  const [selectedPriority, setSelectedPriority] = useState<string>("");
  const [selectedDepartment, setSelectedDepartment] = useState<string>("");
  const [selectedEmployee, setSelectedEmployee] = useState<Employee>();
  const [selectedDate, setSelectedDate] = useState<string>("");

  // ***************** localStorage-ში მთავარი გვერდის ფილტრების გასუფთავება *********************//

  useEffect(() => {
    localStorage.removeItem("selectedFilters");
  }, [location.pathname]);

  //******************** ხვალინდელი (შემდგომი) დღის განსაზღვრის ფუნქცია კალენდრისთვის *******************//

  const getTomorrowDate = () => {
    const date = new Date();
    date.setDate(date.getDate() + 1);
    return date.toISOString().split("T")[0];
  };

  //******************** მოგვაქვს სერვერიდან საჭირო ინფორმაცია *******************//

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

  //******************** ვალიდაციის ფუნქციები *******************//

  //************ სახელის ვალიდაცია ************//

  const [nameIsTouched, setNameIsTouched] = useState(false);

  const nameValidation = () => {
    if (!name.trim() || name.length < 3 || name.length > 255) {
      return false;
    }
    return true;
  };

  const nameIsValid = nameValidation();

  //************ აღწერის ვალიდაცია ************//

  const [descriptionIsTouched, setDescriptionIsTouched] = useState(false);

  const descriptionValidation = () => {
    if (description.trim().split(" ").length < 4 || description.length > 255) {
      return false;
    }
    return true;
  };

  const descriptionIsValid = descriptionValidation();

  //************ პრიორიტეტის ვალიდაცია ************//

  const [priorityIsTouched, setPriorityIsTouched] = useState(false);

  const priorityIsValid = selectedPriority.trim() !== "";

  //************ სტატუსის ვალიდაცია ************//

  const [statusIsTouched, setStatusIsTouched] = useState(false);

  const statusIsValid = selectedStatus.trim() !== "";

  //************ დეპარტამენტის ვალიდაცია ************//
  const [departmentIsTouched, setDepartmentIsTouched] = useState(false);

  const departmentIsValid = selectedDepartment.trim() !== "";

  //************ თანამშრომლის ვალიდაცია ************//
  const [employeeIsTouched, setEmployeeIsTouched] = useState(false);

  const employeeIsValid = selectedEmployee !== undefined;

  //************ თარიღის ვალიდაცია ************//
  const [dateIsTouched, setDateIsTouched] = useState(false);

  const dateValidation = () => {
    const today = new Date().toISOString().split("T")[0];
    return selectedDate >= today;
  };

  const dateIsValid = dateValidation();

  //******************** ფორმის დადასტურების ფუნქცია, რომელიც ქმნის formData-ს სერვერზე გასაგზავნად *******************//

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !nameIsValid ||
      !descriptionIsValid ||
      !priorityIsValid ||
      !statusIsValid ||
      !departmentIsValid ||
      !employeeIsValid ||
      !dateIsValid
    ) {
      setNameIsTouched(true);
      setDescriptionIsTouched(true);
      setPriorityIsTouched(true);
      setStatusIsTouched(true);
      setDepartmentIsTouched(true);
      setEmployeeIsTouched(true);
      setDateIsTouched(true);
      return;
    }

    const selectedStatusObj = statuses.find((s) => s.name === selectedStatus);
    const selectedPriorityObj = priorities.find(
      (p) => p.name === selectedPriority
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
    if (selectedEmployeeObj)
      formData.append("employee_id", selectedEmployeeObj.id.toString());
    if (selectedDate) formData.append("due_date", selectedDate);

    console.log("Form Data:", Object.fromEntries(formData.entries()));

    try {
      await postNewTask(formData);
      setName("");
      setDescription("");
      setSelectedDate("");
      setSelectedDepartment("");
      setSelectedEmployee(undefined);
      setSelectedPriority("");
      setSelectedStatus("");
      setNameIsTouched(false);
      setDescriptionIsTouched(false);
      setPriorityIsTouched(false);
      setStatusIsTouched(false);
      setDepartmentIsTouched(false);
      setEmployeeIsTouched(false);
      setDateIsTouched(false);
      console.log("task posted successfuly");
      navigate("/");
    } catch (error) {
      console.log("error posting task", error);
    }
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
                <FormLabel htmlFor="name">სათაური</FormLabel>
                <FormInput
                  $validate={
                    !nameIsTouched
                      ? "1px solid #CED4DA"
                      : nameIsValid
                      ? "1px solid #CED4DA"
                      : "1px solid #FA4D4D"
                  }
                  id="name"
                  name="name"
                  type="text"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (!nameIsTouched) setNameIsTouched(true);
                    if (e.target.value.trim() === "") setNameIsTouched(false);
                  }}
                />
                <Validation
                  $validate={
                    !nameIsTouched
                      ? "#6C757D"
                      : nameIsValid
                      ? "#08A508"
                      : "#FA4D4D"
                  }
                >
                  მინიმუმ 3 სიმბოლო
                </Validation>
                <Validation
                  $validate={
                    !nameIsTouched
                      ? "#6C757D"
                      : nameIsValid
                      ? "#08A508"
                      : "#FA4D4D"
                  }
                >
                  მაქსიმუმ 255 სიმბოლო
                </Validation>
              </InputWrapper>
              <InputWrapper>
                <FormLabel htmlFor="description">აღწერა</FormLabel>
                <FormInput
                  $validate={
                    !descriptionIsTouched
                      ? "1px solid #CED4DA"
                      : descriptionIsValid
                      ? "1px solid #CED4DA"
                      : "1px solid #FA4D4D"
                  }
                  id="description"
                  name="description"
                  type="textarea"
                  value={description}
                  onChange={(e) => {
                    setDescription(e.target.value);
                    if (!descriptionIsTouched) setDescriptionIsTouched(true);
                    if (e.target.value.trim() === "")
                      setDescriptionIsTouched(false);
                  }}
                />
                <Validation
                  $validate={
                    !descriptionIsTouched
                      ? "#6C757D"
                      : descriptionIsValid
                      ? "#08A508"
                      : "#FA4D4D"
                  }
                >
                  მინიმუმ 4 სიტყვა
                </Validation>
                <Validation
                  $validate={
                    !descriptionIsTouched
                      ? "#6C757D"
                      : descriptionIsValid
                      ? "#08A508"
                      : "#FA4D4D"
                  }
                >
                  მაქსიმუმ 255 სიმბოლო
                </Validation>
              </InputWrapper>
              <FormLeftColumnRow>
                <InputWrapper>
                  <FormLabel htmlFor="priority">პრიორიტეტი</FormLabel>
                  <PrioritySelect
                    id="priority"
                    priorities={priorities}
                    selectedPriority={selectedPriority}
                    setSelectedPriority={(value) => {
                      setSelectedPriority(value);
                      setPriorityIsTouched(true);
                    }}
                    validate={priorityIsTouched && !priorityIsValid}
                  />
                </InputWrapper>
                <InputWrapper>
                  <FormLabel htmlFor="status">სტატუსი</FormLabel>
                  <StatusesSelect
                    id="status"
                    statuses={statuses}
                    setSelectedStatus={(value) => {
                      setSelectedStatus(value);
                      setStatusIsTouched(true);
                    }}
                    validate={statusIsTouched && !statusIsValid}
                    selectedStatus={selectedStatus}
                  />
                </InputWrapper>
              </FormLeftColumnRow>
            </FormLeftColumn>
            <FormRightColumn>
              <InputWrapper>
                <FormLabel htmlFor="department">დეპარტამენტი</FormLabel>
                <DepartmentSelect
                  id="department"
                  selectedDepartment={selectedDepartment}
                  setSelectedDepartment={(value) => {
                    setSelectedDepartment(value);
                    setDepartmentIsTouched(true);
                  }}
                  validate={departmentIsTouched && !departmentIsValid}
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
                  id="employee"
                  employees={filteredEmployees}
                  selectedEmployee={selectedEmployee}
                  setSelectedEmployee={(value) => {
                    setSelectedEmployee(value);
                    setEmployeeIsTouched(true);
                  }}
                  isDisabled={isDisabled}
                  validate={employeeIsTouched && !employeeIsValid}
                />
              </InputWrapper>
              <InputWrapper>
                <FormLabel htmlFor="date">დედლაინი</FormLabel>
                <DateInput
                  required
                  type="date"
                  name="date"
                  id="date"
                  value={selectedDate ? selectedDate : getTomorrowDate()}
                  min={new Date().toISOString().split("T")[0]}
                  onChange={(e) => {
                    setSelectedDate(e.target.value);
                    setDateIsTouched(true);
                  }}
                  $dateTouch={dateIsTouched}
                  $validation={dateIsValid}
                />
              </InputWrapper>
            </FormRightColumn>
          </FormColumns>
          <AddButton type="submit">დავალების შექმნა</AddButton>
        </FormLayout>
      )}
    </div>
  );
}
