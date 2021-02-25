import React from 'react';
import './NovelWrapperStyle.css';

import NovelList from './NovelList';

const NovelRomanceWrapper: React.FC = () => {
  return (
    <div id="novelRomanceWrapper" className="mainPageNovelWrapper">
      <div className="mainNovelTextWrapper">
        <div className="mainNovelWrapperSubject">로맨스</div>
        <div className="mainNovelMoreView">더보기</div>
      </div>
      <div className="mainNovelInnerWrapper">
        <NovelList />
        <NovelList />
        <NovelList />
        <NovelList />
        <NovelList />
        <NovelList />
        <NovelList />
        <NovelList />
      </div>
    </div>
  );
};

export default NovelRomanceWrapper;
