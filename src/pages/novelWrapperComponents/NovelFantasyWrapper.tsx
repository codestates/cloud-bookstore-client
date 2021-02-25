import React from 'react';
import './NovelWrapperStyle.css';

const NovelFantasyWrapper: React.FC = () => {
  return (
    <div id="novelFantasyWrapper" className="mainPageNovelWrapper">
      <div className="mainNovelTextWrapper">
        <div className="mainNovelWrapperSubject">판타지</div>
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

export default NovelFantasyWrapper;
