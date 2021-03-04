import React from 'react';
import './NovelWrapperStyle.css';
import { RouteComponentProps } from 'react-router-dom';
import RankingNovelList from './RankingNovelList';

interface RankingDataProps extends RouteComponentProps {
  handleClickedNovelId: (parameter: number) => void;
  rankingData: {
    id: number;
    title: string;
    author: string;
    category: number;
    description: string;
    cloud: number;
    userLike: number;
    episodeCount: number;
    complete: boolean;
    thumbnail: string;
    createdAt: string;
    updatedAt: string;
  }[];
}

const NovelRankingWrapper: React.FC<RankingDataProps> = (
  props: RankingDataProps,
) => {
  return (
    <div id="novelRankingWrapper" className="mainPageNovelWrapper">
      <div className="mainNovelWrapperSubject">랭킹</div>
      <div className="mainNovelInnerWrapper">
        {props.rankingData.map((data) => (
          <RankingNovelList
            key={data.id}
            rankingData={data}
            handleClickedNovelId={props.handleClickedNovelId}
            history={props.history}
            location={props.location}
            match={props.match}
          />
        ))}
      </div>
    </div>
  );
};

export default NovelRankingWrapper;
