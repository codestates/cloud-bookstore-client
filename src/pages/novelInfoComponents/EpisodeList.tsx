import React from 'react';
import EpisodeListDetail from './EpisodeListComponents/EpisodeListDetail';

const EpisodeList: React.FC = () => {
  return (
    <div className="mainPageNovelWrapper">
      <div className="lastUserHistoryTitle">작품 회차(#)</div>
      <div className="lastUserHistoryWrapper mainNovelInnerWrapper">
        <EpisodeListDetail />
      </div>
    </div>
  );
};

export default EpisodeList;
