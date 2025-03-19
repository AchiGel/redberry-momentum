import { useEffect, useState } from "react";
import {
  getAllStatuses,
  getSingleTask,
  getSingleTaskComments,
} from "../../services/api";
import { Comment, Status, Task } from "../Home/Home";
import { useParams } from "react-router";
import { TaskInnerPageContainer } from "./TaskInnerPage.styled";
import PageBody from "../../components/taskInnerPageComponents/PageBody";
import CommentsSection from "../../components/taskInnerPageComponents/CommentsSection";

export default function TaskInnerPage() {
  const [singleTask, setSingleTask] = useState<Task>();
  const [singleTaskComments, setSingleTaskComments] = useState<Comment[]>();
  const [statuses, setStatuses] = useState<Status[]>();
  const [replyingToCommentId, setReplyingToCommentId] = useState<number | null>(
    null
  );
  const [commentWritten, setCommentWritten] = useState<string>("");
  const [replyWritten, setReplyWritten] = useState<string>("");
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

  const handleComment = () => {
    if (commentWritten.trim() === "") return;
    console.log(commentWritten.trim());
    setCommentWritten("");
  };

  const handleReply = () => {
    if (replyWritten.trim() === "") return;
    console.log(replyWritten.trim());
    setReplyWritten("");
  };

  return (
    <div>
      {singleTask ? (
        <TaskInnerPageContainer>
          <PageBody
            singleTask={singleTask}
            statuses={statuses}
            formattedDate={formattedDate}
          />
          <CommentsSection
            singleTaskComments={singleTaskComments}
            replyingToCommentId={replyingToCommentId}
            setReplyingToCommentId={setReplyingToCommentId}
            handleComment={handleComment}
            handleReply={handleReply}
            commentWritten={commentWritten}
            setCommentWritten={setCommentWritten}
            replyWritten={replyWritten}
            setReplyWritten={setReplyWritten}
          />
        </TaskInnerPageContainer>
      ) : (
        "Loading..."
      )}
    </div>
  );
}
