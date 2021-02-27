import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import '../css/Mypage.css';

import MypageNav from './MypageNav';
// import Footer from './Footer';
import MyWorks from './myCategotyComponents/MyWorks';
import HistoryNovel from './myCategotyComponents/HistoryNovel';
import UserLikes from './myCategotyComponents/UserLikes';

const Mypage: React.FC = () => {
  const [isMyCategoryOn, setIsMyCategoryOn] = useState<string>('historyNovel');
  const handleHistoryNovelOn = (): void => {
    setIsMyCategoryOn('historyNovel');
  };
  const handleUserLikesOn = (): void => {
    setIsMyCategoryOn('userLikes');
  };
  const handleMyworksOn = (): void => {
    setIsMyCategoryOn('myWorks');
  };
  return (
    <div>
      <div className="MypageWholeMainPageWrapper">
        <MypageNav
          isMyCategoryOn={isMyCategoryOn}
          handleHistoryNovelOn={handleHistoryNovelOn}
          handleUserLikesOn={handleUserLikesOn}
          handleMyworksOn={handleMyworksOn}
        />
        {isMyCategoryOn === 'historyNovel' ? (
          <HistoryNovel />
        ) : isMyCategoryOn === 'userLikes' ? (
          <UserLikes />
        ) : isMyCategoryOn === 'myWorks' ? (
          <MyWorks />
        ) : (
          <HistoryNovel />
        )}
      </div>
    </div>
  );
};

export default withRouter(Mypage);
