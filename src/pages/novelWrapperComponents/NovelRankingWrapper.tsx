import React from 'react';
import './NovelWrapperStyle.css';

import RankingNovelList from './RankingNovelList';

interface RankingDataProps {
  rankingData: {
    id: number;
    title: string;
    author: string;
    cloud: number;
    userLike: number;
    thumbnail: string;
    complete: boolean;
    createdAt: string;
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
          <RankingNovelList key={data.id} rankingData={data} />
        ))}
      </div>
    </div>
  );
};

export default NovelRankingWrapper;
