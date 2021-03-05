import React from 'react';
import NovelDetail from './novelInfoComponents/NovelDetail';
import LastUserHistory from './novelInfoComponents/LastUserHistory';
import EpisodeList from './novelInfoComponents/EpisodeList';
import NovelComments from './novelInfoComponents/NovelComments';
import '../css/NovelInfo.css';

const NovelInfo: React.FC = () => {
  return (
    <div className="novelInfoWrapper">
      <NovelDetail />
      <LastUserHistory />
      <EpisodeList />
      <NovelComments />
    </div>
  );
};

export default NovelInfo;
