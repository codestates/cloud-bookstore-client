import React from 'react';
import './NovelWrapperStyle.css';

import NovelList from './NovelList';

const NovelFantasyWrapper: React.FC = () => {
  return (
    <div id="novelFantasyWrapper" className="mainPageNovelWrapper">
      <div className="mainNovelTextWrapper">
        <div className="mainNovelWrapperSubject">판타지</div>
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

export default NovelFantasyWrapper;
