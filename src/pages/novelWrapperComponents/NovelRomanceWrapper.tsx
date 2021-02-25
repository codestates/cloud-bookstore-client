import React from 'react';
import './NovelWrapperStyle.css';

const NovelRomanceWrapper: React.FC = () => {
  return (
    <div id="novelRomanceWrapper" className="mainPageNovelWrapper">
      <div className="mainNovelTextWrapper">
        <div className="mainNovelWrapperSubject">로맨스</div>
        <div className="mainNovelMoreView">더보기</div>
      </div>
      <div className="mainNovelInnerWrapper">
        <div className="novelList"></div>
        <div className="novelList"></div>
        <div className="novelList"></div>
        <div className="novelList"></div>
        <div className="novelList"></div>
        <div className="novelList"></div>
        <div className="novelList"></div>
        <div className="novelList"></div>
      </div>
    </div>
  );
};

export default NovelRomanceWrapper;
