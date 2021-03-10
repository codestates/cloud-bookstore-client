import React, { useState } from 'react';
import './CommentsList.css';
import axios from 'axios';

interface CommentsDataProps {
  handleAxiosClickedNovelData: (parameter: number) => void;
  data: {
    id: number;
    nickname: string;
    comment: string;
    novelId: number;
    createdAt: string;
    updatedAt: string;
  };
  novelData: {
    id: number;
    title: string;
    author: string;
    category: number;
    description: string;
    cloud: number;
    userLike: number;
    episodeCount: number;
    complete: boolean;
    thumbnail: string;
    createdAt: string;
    updatedAt: string;
  };
}

const CommentsList: React.FC<CommentsDataProps> = (
  props: CommentsDataProps,
) => {
  const refinedUpdatedAt: string = props.data.updatedAt.slice(0, 10);

  const [editComment, setEditComment] = useState<boolean>(false);
  const handleEditCommentOn = () => {
    setEditComment(!editComment);
  };

  const [editCommentText, setEditCommentText] = useState<string>(
    props.data.comment,
  );
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setEditCommentText(e.target.value);
  };

  const handleEditComment = () => {
    axios
      .patch(`https://server.cloud-bookstore.com/novel/comment/edit`, {
        data: {
          novelId: props.novelData.id,
          comment: editCommentText,
          commentId: props.data.id,
        },
      })
      .then(() => {
        props.handleAxiosClickedNovelData(props.novelData.id);
      });
  };

  const handleDeleteComment = () => {
    axios
      .delete(
        `https://server.cloud-bookstore.com/novel/comment/delete/${props.novelData.id}/${props.data.id}`,
        {
          data: {
            novelId: props.novelData.id,
            commentId: props.data.id,
          },
        },
      )
      .then(() => props.handleAxiosClickedNovelData(props.novelData.id));
  };

  return (
    <div className="wholeCommentsListWrapper">
      <div className="commentsListUserInfo">
        <div className="commentsListNameDateWrapper">
          <div className="commentsListName">{props.data.nickname}</div>
          <div className="commentsListDate">{refinedUpdatedAt}</div>
        </div>
        <div className="commentsListEditDelWrapper">
          {editComment ? (
            <div
              role="presentation"
              className="commentsListEditBtn"
              onClick={() => {
                handleEditComment();
                handleEditCommentOn();
              }}
            >
              확인
            </div>
          ) : (
            <div
              role="presentation"
              className="commentsListEditBtn"
              onClick={() => {
                setEditCommentText(props.data.comment);
                handleEditCommentOn();
              }}
            >
              수정
            </div>
          )}
          {editComment ? (
            <div
              role="presentation"
              className="commentsListDeleteBtn"
              onClick={() => handleEditCommentOn()}
            >
              취소
            </div>
          ) : (
            <div
              role="presentation"
              className="commentsListDeleteBtn"
              onClick={() => handleDeleteComment()}
            >
              삭제
            </div>
          )}
        </div>
      </div>
      {editComment ? (
        <textarea
          className="commentsListEditText"
          value={editCommentText}
          onChange={handleChange}
          maxLength={500}
        ></textarea>
      ) : (
        <div className="commentsListMainText">{props.data.comment}</div>
      )}
    </div>
  );
};

export default CommentsList;
