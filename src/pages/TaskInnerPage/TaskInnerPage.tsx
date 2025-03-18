import { useEffect, useState } from "react";
import {
  getAllStatuses,
  getSingleTask,
  getSingleTaskComments,
} from "../../services/api";
import { Comment, Status, Task } from "../Home/Home";
import { useParams } from "react-router";

import {
  CardDepartment,
  CardPriority,
} from "../../components/taskCard/TaskCard.styled";
import {
  TaskInnerPageContainer,
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
  TableEmployeeName,
  TableEmployeeImage,
  CommentsContainer,
  CommentsTexarea,
  CommentsTexareaConteiner,
  CommentsList,
  CommentsTitle,
  CommentsTitleContainer,
  CommentsQuantity,
  CommentsListContainer,
  SingleCommentLayout,
  SingleCommentTextWrapper,
  SingleCommentText,
  SingleCommentAuthor,
  SingleCommentAuthorAvatar,
  SingleCommentReplyButton,
  CommentAndReplyWrapper,
  ReplayLayout,
} from "./TaskInnerPage.styled";
import { OptionChooseButton } from "../../components/filtration/Filtration.styled";

export default function TaskInnerPage() {
  const [singleTask, setSingleTask] = useState<Task>();
  const [singleTaskComments, setSingleTaskComments] = useState<Comment[]>();
  const [statuses, setStatuses] = useState<Status[]>();
  const [replyingToCommentId, setReplyingToCommentId] = useState<number | null>(
    null
  );
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const loadTask = async () => {
      try {
        const task = await getSingleTask(Number(id));
        setSingleTask(task);
      } catch (error) {
        console.log(error);
      }
    };
    loadTask();

    const loadComments = async () => {
      try {
        const comments = await getSingleTaskComments(Number(id));
        setSingleTaskComments(comments);
      } catch (error) {
        console.log(error);
      }
    };
    loadComments();

    const loadStatuses = async () => {
      try {
        const statuses = await getAllStatuses();
        setStatuses(statuses);
      } catch (error) {
        console.log(error);
      }
    };
    loadStatuses();
  }, [id]);

  const formatDate = (time: string | undefined) => {
    if (time) {
      const date = new Date(time);
      const weekday = new Intl.DateTimeFormat("ka-GE", {
        weekday: "short",
      }).format(date);

      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();

      return `${weekday} - ${day}/${month}/${year}`;
    }

    return "";
  };

  const formattedDate = formatDate(singleTask?.due_date);
  console.log(singleTaskComments);

  return (
    <div>
      {singleTask ? (
        <TaskInnerPageContainer>
          <TaskInnerPageBody>
            <TaskInnerPageMain>
              <PriorityAndDepartment>
                <CardPriority $priority={singleTask.priority.name}>
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
                  <select>
                    {statuses?.map((s) => (
                      <option key={s.id}>{s.name}</option>
                    ))}
                  </select>
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
                        {singleTask.employee.name +
                          " " +
                          singleTask.employee.surname}
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
          <CommentsContainer>
            <CommentsTexareaConteiner>
              <CommentsTexarea placeholder="დაწერე კომენტარი"></CommentsTexarea>
              <OptionChooseButton $comments={"comments"}>
                დააკომენტარე
              </OptionChooseButton>
            </CommentsTexareaConteiner>
            <CommentsList>
              <CommentsTitleContainer>
                <CommentsTitle>კომენტარები</CommentsTitle>
                <CommentsQuantity>
                  {singleTaskComments?.length}
                </CommentsQuantity>
              </CommentsTitleContainer>
              <CommentsListContainer>
                {singleTaskComments?.map((c) => (
                  <CommentAndReplyWrapper key={c.id}>
                    <SingleCommentLayout>
                      <SingleCommentAuthorAvatar>
                        <img
                          style={{ width: "100%", objectFit: "cover" }}
                          src={c.author_avatar}
                          alt="author avatar"
                        />
                      </SingleCommentAuthorAvatar>
                      <SingleCommentTextWrapper>
                        <SingleCommentAuthor>
                          {c.author_nickname}
                        </SingleCommentAuthor>
                        <SingleCommentText>{c.text}</SingleCommentText>
                        <SingleCommentReplyButton
                          onClick={() =>
                            setReplyingToCommentId(
                              replyingToCommentId === c.id ? null : c.id
                            )
                          }
                        >
                          უპასუხე
                        </SingleCommentReplyButton>
                      </SingleCommentTextWrapper>
                    </SingleCommentLayout>
                    {replyingToCommentId === c.id && (
                      <textarea placeholder="პასუხი"></textarea>
                    )}
                    {c.sub_comments && (
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "20px",
                        }}
                      >
                        {c.sub_comments.map((sc) => (
                          <ReplayLayout key={sc.id}>
                            <SingleCommentAuthorAvatar>
                              <img src={sc.author_avatar} alt="reply avatar" />
                            </SingleCommentAuthorAvatar>
                            <SingleCommentTextWrapper>
                              <SingleCommentAuthor>
                                {sc.author_nickname}
                              </SingleCommentAuthor>
                              <SingleCommentText>{sc.text}</SingleCommentText>
                            </SingleCommentTextWrapper>
                          </ReplayLayout>
                        ))}
                      </div>
                    )}
                  </CommentAndReplyWrapper>
                ))}
              </CommentsListContainer>
            </CommentsList>
          </CommentsContainer>
        </TaskInnerPageContainer>
      ) : (
        "Loading..."
      )}
    </div>
  );
}
