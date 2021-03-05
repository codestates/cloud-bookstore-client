import React from 'react';
import EpisodeListDetail from './EpisodeListComponents/EpisodeListDetail';

const EpisodeList: React.FC = () => {
  return (
    <div className="mainPageNovelWrapper">
      <div className="novelInfoTitle">작품 회차(#)</div>
      <div className="lastUserHistoryWrapper mainNovelInnerWrapper ipadLastHistory">
        <EpisodeListDetail />
      </div>
    </div>
  );
};

export default EpisodeList;
