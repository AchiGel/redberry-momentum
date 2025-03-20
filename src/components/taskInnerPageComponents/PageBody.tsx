import { useState } from "react";
import { Status, Task } from "../../pages/Home/Home";
import {
  TaskInnerPageBody,
  TaskInnerPageMain,
  PriorityAndDepartment,
  TaskPageMainTitle,
  TaskPageMainDescription,
  TaskInnerPageDetails,
  DetailsTitle,
  DetailsTable,
  DetailsTableRow,
  TableRowLeft,
  TableRowLeftText,
  TableEmployeeRow,
  TableEmployeeDep,
  TableEmployeeImageAndName,
  TableEmployeeImage,
  TableEmployeeName,
} from "../../pages/TaskInnerPage/TaskInnerPage.styled";
import {
  SelectContainer,
  SelectButton,
  SelectDropDown,
  SelectOption,
} from "../createTaskPageComponent/StatusesSelect.styled";
import { CardPriority, CardDepartment } from "../taskCard/TaskCard.styled";

export default function PageBody({
  singleTask,
  statuses,
  formattedDate,
}: {
  singleTask: Task;
  statuses: Status[] | undefined;
  formattedDate: string;
}) {
  const [statusIsOpened, setStatusIsOpened] = useState<boolean>(false);
  const [selectedStatus, setSelectedStatus] = useState<string>("");
  return (
    <TaskInnerPageBody>
      <TaskInnerPageMain>
        <PriorityAndDepartment>
          <CardPriority $page="taskInner" $priority={singleTask.priority.name}>
            <img
              src={singleTask.priority.icon}
              alt={singleTask.priority.name}
            />
            {singleTask?.priority.name}
          </CardPriority>
          <CardDepartment $department={singleTask.department.name}>
            {singleTask?.department.name}
          </CardDepartment>
        </PriorityAndDepartment>
        <TaskPageMainTitle>{singleTask?.name}</TaskPageMainTitle>
        <TaskPageMainDescription>
          {singleTask?.description}
        </TaskPageMainDescription>
      </TaskInnerPageMain>
      <TaskInnerPageDetails>
        <DetailsTitle>დავალების დეტალები</DetailsTitle>
        <DetailsTable>
          <DetailsTableRow>
            <TableRowLeft>
              <img src="/pie-chart.png" alt="pie-chart" />
              <TableRowLeftText>სტატუსი</TableRowLeftText>
            </TableRowLeft>
            <SelectContainer $innerPage="innerPage">
              <SelectButton
                $isOpen={statusIsOpened}
                onClick={(e) => {
                  e.preventDefault();
                  setStatusIsOpened(!statusIsOpened);
                }}
              >
                {selectedStatus ? (
                  selectedStatus
                ) : (
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                    }}
                  >
                    {singleTask.status.name}
                  </span>
                )}
              </SelectButton>
              {statusIsOpened && (
                <SelectDropDown>
                  {statuses?.map((option) => (
                    <SelectOption
                      key={option.id}
                      onClick={() => {
                        setSelectedStatus(option.name);
                        setStatusIsOpened(false);
                      }}
                    >
                      {option.name}
                    </SelectOption>
                  ))}
                </SelectDropDown>
              )}
            </SelectContainer>
          </DetailsTableRow>
          <DetailsTableRow>
            <TableRowLeft>
              <img src="/man.png" alt="man" />
              <TableRowLeftText>თანამშრომელი</TableRowLeftText>
            </TableRowLeft>
            <TableEmployeeRow>
              <TableEmployeeDep>
                {singleTask.employee.department.name}
              </TableEmployeeDep>
              <TableEmployeeImageAndName>
                <TableEmployeeImage>
                  <img
                    style={{ width: "100%", objectFit: "cover" }}
                    src={singleTask.employee.avatar}
                    alt="emp"
                  />
                </TableEmployeeImage>
                <TableEmployeeName>
                  {singleTask.employee.name + " " + singleTask.employee.surname}
                </TableEmployeeName>
              </TableEmployeeImageAndName>
            </TableEmployeeRow>
          </DetailsTableRow>
          <DetailsTableRow>
            <TableRowLeft>
              <img src="/calendar.png" alt="calendar" />
              <TableRowLeftText>დავალების ვადა</TableRowLeftText>
            </TableRowLeft>
            <TableEmployeeName>{formattedDate}</TableEmployeeName>
          </DetailsTableRow>
        </DetailsTable>
      </TaskInnerPageDetails>
    </TaskInnerPageBody>
  );
}
