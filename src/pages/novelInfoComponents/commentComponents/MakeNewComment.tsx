import React, { useState } from 'react';
import './MakeNewComment.css';

const MakeNewComment: React.FC = () => {
  const [textChange, setTextChange] = useState<string>('');

  const handleChange = (e: any): void => {
    setTextChange(e.target.value);
  };

  return (
    <div className="makeNewCommentWrapper">
      <div className="makeNewCommentUserName">호호아줌마</div>
      <textarea
        className="makeNewCommentInputBox"
        placeholder="주제와 무관한 댓글, 욕설 및 악플은 삭제될 수 있습니다."
        onChange={handleChange}
        maxLength={500}
      />
      <span className="makeNewCommentTextCounter">{textChange.length}/500</span>
      <div className="makeNewCommentBtnWrapper">
        <div className="makeNewCommentBtn">등록</div>
      </div>
    </div>
  );
};

export default MakeNewComment;
