/* eslint-disable */

import React from 'react';
import './NovelReadStage.css';

interface SpecificEpisodeDataProps {
  specificEpisodeData: {
    episode: {
      id: number;
      episodeNum: number;
      novelId: number;
      title: string;
      text: string;
      thumbnail: string;
      cloud: number;
      createdAt: string;
      updatedAt: string;
    };
    novelTitle: {
      title: string;
    };
  };
}

const NovelReadStage: React.FC<SpecificEpisodeDataProps> = (
  props: SpecificEpisodeDataProps,
) => {
  console.log(props.specificEpisodeData);
  return (
    <div className="wholeNovelReadStageWrapper">Hello NovelReadStage World</div>
  );
};

export default NovelReadStage;
