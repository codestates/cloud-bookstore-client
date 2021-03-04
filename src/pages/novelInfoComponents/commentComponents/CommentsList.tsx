import React from 'react';
import './CommentsList.css';

const CommentsList: React.FC = () => {
  return (
    <div className="wholeCommentsListWrapper">
      <div className="commentsListUserInfo">
        <div className="commentsListNameDateWrapper">
          <div className="commentsListName">닉네임</div>
          <div className="commentsListDate">2021.2.20</div>
        </div>
        <div className="commentsListEditDelWrapper"></div>
      </div>
      <div className="commentsListMainText"></div>
    </div>
  );
};

export default CommentsList;
