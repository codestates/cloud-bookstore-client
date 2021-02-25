import React from 'react';
import './NovelWrapperStyle.css';

import NovelList from './NovelList';

const NovelRankingWrapper: React.FC = () => {
  return (
    <div id="novelRankingWrapper" className="mainPageNovelWrapper">
      <div className="mainNovelWrapperSubject">랭킹</div>
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

export default NovelRankingWrapper;
