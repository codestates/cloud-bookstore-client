/* eslint-disable */

import React from 'react';
import NovelDetail from './novelInfoComponents/NovelDetail';
import LastUserHistory from './novelInfoComponents/LastUserHistory';
import EpisodeList from './novelInfoComponents/EpisodeList';
import NovelComments from './novelInfoComponents/NovelComments';
import '../css/NovelInfo.css';

interface ClickedNovelInfoProps {
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
    userHistory?: {
      id: number;
      episodeNum: number;
      title: string;
      thumbnail: string;
      cloud: number;
      userHistory_novelEpisodeId: number;
      userHistory_updated_at: string;
    };
    userLike?: boolean;
    userPurchases?: {
      episodeId: number;
    }[];
  };
}

const NovelInfo: React.FC<ClickedNovelInfoProps> = (
  props: ClickedNovelInfoProps,
) => {
  console.log(props);
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
