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
        <div className="commentsListEditDelWrapper">
          <div className="commentsListEditBtn">수정</div>
          <div className="commentsListDeleteBtn">삭제</div>
        </div>
      </div>
      <div className="commentsListMainText">
        전 작품인 혼전 계약서볼때 정말 제가 다 속이 끓으면서 무결이와 승희가
        얼른 잘 헤쳐나가서 둘이 꽁냥꽁냥하는걸 쿠키구워서 미리보기도 했구, 또
        선재와 연우도 달달 하게 있는장면에서는 제가 더 푹 빠졌었는데 벌써 이렇게
        신작을 들고오시다니...!!!!♡♡♡♡♡♡♡♡이번에도 쿠키를 구워야
      </div>
    </div>
  );
};

export default CommentsList;
