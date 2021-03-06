import React from 'react';
import NovelDetail from './novelInfoComponents/NovelDetail';
import LastUserHistory from './novelInfoComponents/LastUserHistory';
import EpisodeList from './novelInfoComponents/EpisodeList';
import NovelComments from './novelInfoComponents/NovelComments';
import '../css/NovelInfo.css';

interface ClickedNovelInfoProps {
  toggleUserLike: () => void;
  handleNovelLikesCount: (userLike: number) => void;
  handleAxiosClickedNovelData: (parameter: number) => void;
  nickname: string;
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

const NovelInfo: React.FC<ClickedNovelInfoProps> = (
  props: ClickedNovelInfoProps,
) => {
  // eslint-disable-next-line no-console
  console.log(props);
  return (
    <div className="novelInfoWrapper">
      <NovelDetail
        clickedNovelData={props.clickedNovelData}
        toggleUserLike={props.toggleUserLike}
        handleNovelLikesCount={props.handleNovelLikesCount}
      />
      <LastUserHistory clickedNovelData={props.clickedNovelData} />
      <EpisodeList clickedNovelData={props.clickedNovelData} />
      <NovelComments
        clickedNovelData={props.clickedNovelData}
        handleAxiosClickedNovelData={props.handleAxiosClickedNovelData}
        nickname={props.nickname}
      />
    </div>
  );
};

export default NovelInfo;
