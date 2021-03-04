import React from 'react';
import NovelDetail from './novelInfoComponents/NovelDetail';
import LastNovelEpisode from './novelInfoComponents/LastNovelEpisode';
import EpisodeList from './novelInfoComponents/EpisodeList';
import NovelComments from './novelInfoComponents/NovelComments';
import '../css/NovelInfo.css';

const NovelInfo: React.FC = () => {
  return (
    <div className="novelInfoWrapper">
      <NovelDetail />
      <LastNovelEpisode />
      <EpisodeList />
      <NovelComments />
    </div>
  );
};

export default NovelInfo;
