import { Comment } from "../../pages/Home/Home";
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
}: {
  singleTaskComments: Comment[] | undefined;
  replyingToCommentId: number | null;
  setReplyingToCommentId: React.Dispatch<React.SetStateAction<number | null>>;
  handleComment: () => void;
  handleReply: () => void;
  commentWritten: string;
  setCommentWritten: React.Dispatch<React.SetStateAction<string>>;
  replyWritten: string;
  setReplyWritten: React.Dispatch<React.SetStateAction<string>>;
}) {
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
        <OptionChooseButton onClick={handleComment} $comments={"comments"}>
          დააკომენტარე
        </OptionChooseButton>
      </CommentsTexareaConteiner>
      <CommentsList>
        <CommentsTitleContainer>
          <CommentsTitle>კომენტარები</CommentsTitle>
          <CommentsQuantity>{singleTaskComments?.length}</CommentsQuantity>
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
                  <SingleCommentAuthor>{c.author_nickname}</SingleCommentAuthor>
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
                    onClick={handleReply}
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
