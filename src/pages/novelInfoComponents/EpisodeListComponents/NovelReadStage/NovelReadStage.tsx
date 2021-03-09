import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import './NovelReadStage.css';
import NovelReadNav from './NovelReadNav';
import NovelReadContent from './NovelReadContent';
import Footer from '../../../Footer';

interface SpecificEpisodeDataProps extends RouteComponentProps {
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
  // console.log(props.specificEpisodeData);
  return (
    <>
      <div className="wholeNovelReadStageWrapper">
        <NovelReadNav
          history={props.history}
          location={props.location}
          match={props.match}
        />
        <NovelReadContent
          specificEpisodeText={props.specificEpisodeData.episode.text}
        />
      </div>
      <Footer />
    </>
  );
};

export default NovelReadStage;
