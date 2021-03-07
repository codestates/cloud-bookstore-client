/* eslint-disable no-console */
import React from 'react';
import EpisodeListDetail from './EpisodeListComponents/EpisodeListDetail';
import PurchaseCheckList from './EpisodeListComponents/PurchaseCheckList';

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

interface episodeProps {
  id: number;
  episodeNum: number;
  novelId: number;
  title: string;
  text: string;
  thumbnail: string;
  cloud: number;
  createdAt: string;
  updatedAt: string;
}

const EpisodeList: React.FC<episodeListProps> = (props: episodeListProps) => {
  const reversedList = props.clickedNovelData.episodes;
  reversedList.sort((a: episodeProps, b: episodeProps) => {
    if (a.episodeNum < b.episodeNum) return 1;
    if (a.episodeNum > b.episodeNum) return -1;
    return 0;
  });

  return (
    <div className="mainPageNovelWrapper">
      <div className="novelInfoTitle">
        작품 회차 ({props.clickedNovelData.episodes.length})
      </div>
      <div className="mainNovelInnerWrapper">
        {reversedList.map((data) => {
          console.log('돌고있니?');
          console.log(props.clickedNovelData.userPurchases);
          for (
            let i = 0;
            i < props.clickedNovelData.userPurchases.length;
            i++
          ) {
            if (data.id === props.clickedNovelData.userPurchases[i].episodeId) {
              console.log('여기가 산거');
              return <PurchaseCheckList episode={data} />;
            } else {
              console.log('여기가 안산거');
              return <EpisodeListDetail episode={data} />;
            }
          }
        })}
      </div>
    </div>
  );
};

export default EpisodeList;
