import React from 'react';
import './NovelWrapperStyle.css';

const NovelMartialartWrapper: React.FC = () => {
  return (
    <div id="novelMartialartWrapper" className="mainPageNovelWrapper">
      <div className="mainNovelTextWrapper">
        <div className="mainNovelWrapperSubject">무협</div>
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

export default NovelMartialartWrapper;
