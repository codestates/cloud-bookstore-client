import React from 'react';
import NovelDetail from './novelInfoComponents/NovelDetail';
import LastNovelEpisode from './novelInfoComponents/LastNovelEpisode';
import EpisodeList from './novelInfoComponents/EpisodeList';
import NovelComments from './novelInfoComponents/NovelComments';

const NovelInfo: React.FC = () => {
  return (
    <div>
      <NovelDetail />
      <LastNovelEpisode />
      <EpisodeList />
      <NovelComments />
    </div>
  );
};

export default NovelInfo;
