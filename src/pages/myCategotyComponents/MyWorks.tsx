import React from 'react';
import { withRouter } from 'react-router-dom';
import '../../css/MyWorks.css';

const MyWorks: React.FC = () => {
  return (
    <div className="emtyBox">
      <div className="boxGrid">
        <div className="emptyTitle">등록된 작품이 없습니다</div>
        <div className="smallEmtyText">웹소설 작가의 꿈, 지금 펼쳐보세요</div>
        <div className="emptyBtn">새 작품 쓰기</div>
      </div>
    </div>
  );
};

export default withRouter(MyWorks);
