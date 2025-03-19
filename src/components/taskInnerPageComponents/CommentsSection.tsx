import { Comment, Task } from "../../pages/Home/Home";
import {
  CommentsContainer,
  CommentsTexareaConteiner,
  CommentsTexarea,
  CommentsList,
  CommentsTitleContainer,
  CommentsTitle,
  CommentsQuantity,
  CommentsListContainer,
  CommentAndReplyWrapper,
  SingleCommentLayout,
  SingleCommentAuthorAvatar,
  SingleCommentTextWrapper,
  SingleCommentAuthor,
  SingleCommentText,
  SingleCommentReplyButton,
  ReplyTextarea,
  ReplyLayout,
} from "../../pages/TaskInnerPage/TaskInnerPage.styled";
import { OptionChooseButton } from "../filtration/Filtration.styled";

export default function CommentsSection({
  singleTaskComments,
  replyingToCommentId,
  setReplyingToCommentId,
  handleComment,
  handleReply,
  commentWritten,
  setCommentWritten,
  replyWritten,
  setReplyWritten,
  singleTask,
}: {
  singleTaskComments: Comment[] | undefined;
  replyingToCommentId: number | null;
  setReplyingToCommentId: React.Dispatch<React.SetStateAction<number | null>>;
  handleComment: (id: number) => Promise<void>;
  handleReply: (id: number) => Promise<void>;
  commentWritten: string;
  setCommentWritten: React.Dispatch<React.SetStateAction<string>>;
  replyWritten: string;
  setReplyWritten: React.Dispatch<React.SetStateAction<string>>;
  singleTask: Task;
}) {
  const getTotalComments = () => {
    return (
      singleTaskComments?.reduce((total, comment) => {
        const subCommentsCount = comment.sub_comments?.length || 0;
        return total + 1 + subCommentsCount;
      }, 0) || 0
    );
  };

  return (
    <CommentsContainer>
      <CommentsTexareaConteiner>
        <CommentsTexarea
          value={commentWritten}
          onChange={(e) => {
            setCommentWritten(e.target.value);
          }}
          placeholder="დაწერე კომენტარი"
        ></CommentsTexarea>
        <OptionChooseButton
          onClick={() => handleComment(singleTask.id)}
          $comments={"comments"}
        >
          დააკომენტარე
        </OptionChooseButton>
      </CommentsTexareaConteiner>
      <CommentsList>
        <CommentsTitleContainer>
          <CommentsTitle>კომენტარები</CommentsTitle>
          <CommentsQuantity>{getTotalComments()}</CommentsQuantity>
        </CommentsTitleContainer>
        <CommentsListContainer>
          {singleTaskComments
            ?.sort((a, b) => b.id - a.id)
            .map((c) => (
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
                  <CommentsTexareaConteiner>
                    <ReplyTextarea
                      value={replyWritten}
                      onChange={(e) => {
                        setReplyWritten(e.target.value);
                      }}
                      placeholder="პასუხი"
                    ></ReplyTextarea>
                    <OptionChooseButton
                      onClick={() => handleReply(singleTask.id)}
                      $comments="comments"
                    >
                      უპასუხე
                    </OptionChooseButton>
                  </CommentsTexareaConteiner>
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
                      <ReplyLayout key={sc.id}>
                        <SingleCommentAuthorAvatar>
                          <img src={sc.author_avatar} alt="reply avatar" />
                        </SingleCommentAuthorAvatar>
                        <SingleCommentTextWrapper>
                          <SingleCommentAuthor>
                            {sc.author_nickname}
                          </SingleCommentAuthor>
                          <SingleCommentText>{sc.text}</SingleCommentText>
                        </SingleCommentTextWrapper>
                      </ReplyLayout>
                    ))}
                  </div>
                )}
              </CommentAndReplyWrapper>
            ))}
        </CommentsListContainer>
      </CommentsList>
    </CommentsContainer>
  );
}
