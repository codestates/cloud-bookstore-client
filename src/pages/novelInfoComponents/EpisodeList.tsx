import React from 'react';
import EpisodeListDetail from './EpisodeListComponents/EpisodeListDetail';

interface episodeListProps {
  clickedNovelData: {
    data: {
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
    };
    episodes: {
      id: number;
      episodeNum: number;
      novelId: number;
      title: string;
      text: string;
      thumbnail: string;
      cloud: number;
      createdAt: string;
      updatedAt: string;
    }[];
    comments: {
      id: number;
      nickname: string;
      comment: string;
      novelId: number;
      createdAt: string;
      updatedAt: string;
    }[];
    userHistory: {
      id: number;
      episodeNum: number;
      title: string;
      thumbnail: string;
      cloud: number;
      novelEpisodeId: number;
      updatedAt: string;
    };
    userLike: boolean;
    userPurchases: {
      episodeId: number;
    }[];
  };
}
const EpisodeList: React.FC<episodeListProps> = (props: episodeListProps) => {
  const reverseEpisodeList = props.clickedNovelData.episodes.reverse();
  return (
    <div className="mainPageNovelWrapper iPadEpisodeWrapper">
      <div className="novelInfoTitle">
        작품 회차 ({props.clickedNovelData.episodes.length})
      </div>
      <div className="mainNovelInnerWrapper">
        {reverseEpisodeList.map((data) => (
          <EpisodeListDetail
            key={data.id}
            data={data}
            purchase={props.clickedNovelData.userPurchases}
          />
        ))}
      </div>
    </div>
  );
};

export default EpisodeList;
