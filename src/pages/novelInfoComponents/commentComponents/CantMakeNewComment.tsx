import React from 'react';

import './CantMakeNewComment.css';

const CantMakeNewComment: React.FC = () => {
  return (
    <div className="makeNewCommentWrapper">
      <div className="tellTheStory">
        <p>로그인 후에 댓글을 작성하실 수 있습니다.</p>
      </div>
      <div className="makeNewCommentBtnWrapper">
        <div className="cantMakeNewCommentBtn">등록</div>
      </div>
    </div>
  );
};

export default CantMakeNewComment;
