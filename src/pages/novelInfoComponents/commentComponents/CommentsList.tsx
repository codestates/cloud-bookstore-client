import React from 'react';
import './CommentsList.css';

interface CommentsDataProps {
  data: {
    id: number;
    nickname: string;
    comment: string;
    novelId: number;
    createdAt: string;
    updatedAt: string;
  };
}

const CommentsList: React.FC<CommentsDataProps> = (
  props: CommentsDataProps,
) => {
  const refinedUpdatedAt: string = props.data.updatedAt.slice(0, 10);

  return (
    <div className="wholeCommentsListWrapper">
      <div className="commentsListUserInfo">
        <div className="commentsListNameDateWrapper">
          <div className="commentsListName">{props.data.nickname}</div>
          <div className="commentsListDate">{refinedUpdatedAt}</div>
        </div>
        <div className="commentsListEditDelWrapper">
          <div className="commentsListEditBtn">수정</div>
          <div className="commentsListDeleteBtn">삭제</div>
        </div>
      </div>
      <div className="commentsListMainText">{props.data.comment}</div>
    </div>
  );
};

export default CommentsList;
