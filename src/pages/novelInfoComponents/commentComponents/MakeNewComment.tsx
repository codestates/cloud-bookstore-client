import React, { useState } from 'react';
import axios from 'axios';
import './MakeNewComment.css';

interface MakeNewCommentProps {
  handleAxiosClickedNovelData: (parameter: number) => void;
  nickname: string;
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

const MakeNewComment: React.FC<MakeNewCommentProps> = (
  props: MakeNewCommentProps,
) => {
  const [textChange, setTextChange] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setTextChange(e.target.value);
  };

  const handleWriteComment = () => {
    // ? 새 comment post로 보내고 다시 data render
    if (textChange) {
      axios
        .post(`https://server.cloud-bookstore.com/novel/comment`, {
          comment: textChange,
          nickname: props.nickname,
          novelId: props.novelData.id,
        })
        .then(() => {
          setTextChange('');
          props.handleAxiosClickedNovelData(props.novelData.id);
        });
    }
  };

  return (
    <div className="makeNewCommentWrapper comments">
      <div className="makeNewCommentUserName">{props.nickname}</div>
      <textarea
        className="makeNewCommentInputBox"
        placeholder="주제와 무관한 댓글, 욕설 및 악플은 삭제될 수 있습니다."
        onChange={handleChange}
        maxLength={500}
      />
      <span className="makeNewCommentTextCounter">{textChange.length}/500</span>
      <div className="makeNewCommentBtnWrapper">
        <div
          className="makeNewCommentBtn"
          onClick={() => handleWriteComment()}
          aria-hidden="true"
        >
          등록
        </div>
      </div>
    </div>
  );
};

export default MakeNewComment;
