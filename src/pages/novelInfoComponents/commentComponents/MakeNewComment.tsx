import React from 'react';
import './MakeNewComment.css';

const MakeNewComment: React.FC = () => {
  return (
    <div className="makeNewCommentWrapper">
      <div className="makeNewCommentUserName">호호아줌마</div>
      <textarea
        className="makeNewCommentInputBox"
        placeholder="주제와 무관한 댓글, 욕설 및 악플은 삭제될 수 있습니다."
      />
    </div>
  );
};

export default MakeNewComment;
