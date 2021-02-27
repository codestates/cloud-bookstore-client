import React from 'react';
import '../css/MypageNav.css';

interface MyCategoryOnProps {
  isMyCategoryOn: string;
  handleHistoryNovelOn(): void;
  handleUserLikesOn(): void;
  handleMyworksOn(): void;
}

const MypageNav: React.FC<MyCategoryOnProps> = (props: MyCategoryOnProps) => {
  return (
    <div className="mywholeCategoryNav">
      <div className="mycategoryNavInnerWrapper">
        <div className="mycategoryNavWrapper">
          <div
            role="button"
            tabIndex={0}
            id={props.isMyCategoryOn === 'historyNovel' ? 'mycategoryOn' : ''}
            className="mycategoryBtn"
            onClick={props.handleHistoryNovelOn}
            onKeyPress={props.handleHistoryNovelOn}
          >
            최근 본 작품
          </div>
          <div
            role="button"
            tabIndex={0}
            id={props.isMyCategoryOn === 'userLikes' ? 'mycategoryOn' : ''}
            className="mycategoryBtn"
            onClick={props.handleUserLikesOn}
            onKeyPress={props.handleUserLikesOn}
          >
            관심 작품
          </div>
          <div
            role="button"
            tabIndex={0}
            id={props.isMyCategoryOn === 'myWorks' ? 'mycategoryOn' : ''}
            className="mycategoryBtn"
            onClick={props.handleMyworksOn}
            onKeyPress={props.handleMyworksOn}
          >
            내 작품
          </div>
        </div>
      </div>
    </div>
  );
};

export default MypageNav;
