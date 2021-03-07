import React from 'react';
import './LastUserHIstoryComponents/LastUserHistory.css';
import LastUserHistoryDetail from './LastUserHIstoryComponents/LastUserHistoryDetail';

interface lastUserHistoryProps {
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
    userHistory: any;
    userLike: boolean;
    userPurchases: {
      episodeId: number;
    }[];
  };
}

const LastUserHistory: React.FC<lastUserHistoryProps> = (
  props: lastUserHistoryProps,
) => {
  return (
    <div className="lastUserWrapper">
      <div className="novelInfoTitle">마지막으로 읽은 회차</div>
      <div className="mainNovelInnerWrapper">
        <LastUserHistoryDetail clickedNovelData={props.clickedNovelData} />
      </div>
    </div>
  );
};

export default LastUserHistory;
