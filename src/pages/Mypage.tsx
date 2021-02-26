import React from 'react';
import { withRouter } from 'react-router-dom';
import '../css/Mypage.css';

import MypageNav from './MypageNav';
import Footer from './Footer';

const Mypage: React.FC = () => {
  return (
    <div>
      <div className="MypageWholeMainPageWrapper">
        <MypageNav />
      </div>
      <div className="emtyBox">
        <div className="boxGrid">
          <div className="emptyTitle">등록된 작품이 없습니다</div>
          <div className="smallEmtyText">웹소설 작가의 꿈, 지금 펼쳐보세요</div>
          <div className="emptyBtn">새 작품 쓰기</div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default withRouter(Mypage);
