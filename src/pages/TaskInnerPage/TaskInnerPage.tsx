import { useEffect, useState } from "react";
import {
  getAllStatuses,
  getSingleTask,
  getSingleTaskComments,
  postSingleTaskComment,
} from "../../services/api";
import { Comment, Status, Task } from "../Home/Home";
import { useLocation, useParams } from "react-router";
import { TaskInnerPageContainer } from "./TaskInnerPage.styled";
import PageBody from "../../components/taskInnerPageComponents/PageBody";
import CommentsSection from "../../components/taskInnerPageComponents/CommentsSection";

export default function TaskInnerPage() {
  const location = useLocation();

  const [singleTask, setSingleTask] = useState<Task>();
  const [singleTaskComments, setSingleTaskComments] = useState<Comment[]>();
  const [statuses, setStatuses] = useState<Status[]>();
  const [replyingToCommentId, setReplyingToCommentId] = useState<number | null>(
    null
  );
  const [commentWritten, setCommentWritten] = useState<string>("");
  const [replyWritten, setReplyWritten] = useState<string>("");
  const [updateComment, setUpdateComment] = useState(0);
  const { id } = useParams<{ id: string }>();
  const [selectedStatus, setSelectedStatus] = useState<string>("");

  // ***************** localStorage-ში მთავარი გვერდის ფილტრების გასუფთავება *********************//

  useEffect(() => {
    localStorage.removeItem("selectedFilters");
  }, [location.pathname]);

  // ***************** ვტვირთავთ სერვერიდან წამოღებულ დავალებებს და სტატუსებს *********************//

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

  // ***************** ვტვირთავთ სერვერიდან წამოღებულ კომენტარებს *********************//

  useEffect(() => {
    const loadComments = async () => {
      try {
        const comments = await getSingleTaskComments(Number(id));
        setSingleTaskComments(comments);
      } catch (error) {
        console.log(error);
      }
    };
    loadComments();
  }, [id, updateComment]);

  // ***************** თარიღის ფორმატირება *********************//

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

  // ***************** მთავარი კომენტარების დაპოსტვის ფუნქცია *********************//

  const handleComment = async (id: number) => {
    if (commentWritten.trim() === "") return;

    const commentData = { text: commentWritten };

    try {
      await postSingleTaskComment(id, commentData);
      setCommentWritten("");
      setUpdateComment((prev) => prev + 1);
    } catch (error) {
      console.error("Error posting comment:", error);
    }
  };

  // ***************** ქვე-კომენტარების დაპოსტვის ფუნქცია *********************//

  const handleReply = async (id: number) => {
    if (replyWritten.trim() === "") return;

    const replyData = {
      text: replyWritten,
      parent_id: replyingToCommentId,
    };

    try {
      await postSingleTaskComment(id, replyData);
      setReplyWritten("");
      setReplyingToCommentId(null);
      setUpdateComment((prev) => prev + 1);
    } catch (error) {
      console.error("Error posting comment:", error);
    }
  };

  return (
    <div style={{ marginBottom: "150px" }}>
      {singleTask ? (
        <TaskInnerPageContainer>
          <PageBody
            singleTask={singleTask}
            statuses={statuses}
            formattedDate={formattedDate}
            selectedStatus={selectedStatus}
            setSelectedStatus={setSelectedStatus}
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
            singleTask={singleTask}
          />
        </TaskInnerPageContainer>
      ) : (
        "Loading..."
      )}
    </div>
  );
}
