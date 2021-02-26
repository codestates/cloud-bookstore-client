import React, { useState } from 'react';
import '../css/MypageNav.css';

const MypageNav: React.FC = () => {
  const [isMyCategoryOn, setIsMyCategoryOn] = useState<string>('myWorks');
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
    <div className="mywholeCategoryNav">
      <div className="mycategoryNavInnerWrapper">
        <div className="mycategoryNavWrapper">
          <div
            role="button"
            tabIndex={0}
            id={isMyCategoryOn === 'historyNovel' ? 'mycategoryOn' : ''}
            className="mycategoryBtn"
            onClick={handleHistoryNovelOn}
            onKeyPress={handleHistoryNovelOn}
          >
            최근 본 작품
          </div>
          <div
            role="button"
            tabIndex={0}
            id={isMyCategoryOn === 'userLikes' ? 'mycategoryOn' : ''}
            className="mycategoryBtn"
            onClick={handleUserLikesOn}
            onKeyPress={handleUserLikesOn}
          >
            관심 작품
          </div>
          <div
            role="button"
            tabIndex={0}
            id={isMyCategoryOn === 'myWorks' ? 'mycategoryOn' : ''}
            className="mycategoryBtn"
            onClick={handleMyworksOn}
            onKeyPress={handleMyworksOn}
          >
            내 작품
          </div>
        </div>
      </div>
    </div>
  );
};

export default MypageNav;
