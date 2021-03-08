/* eslint-disable no-console */
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import EpisodeListDetail from './EpisodeListComponents/EpisodeListDetail';
import PurchaseCheckList from './EpisodeListComponents/PurchaseCheckList';

interface episodeListProps extends RouteComponentProps {
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
  const updatedEpisodeList: number[] = props.clickedNovelData.userPurchases.map(
    (ele) => ele.episodeId,
  );

  return (
    <div className="mainPageNovelWrapper">
      <div className="novelInfoTitle">
        작품 회차 ({props.clickedNovelData.episodes.length})
      </div>
      <div className="mainNovelInnerWrapper">
        {props.clickedNovelData.episodes.length === 0 ? (
          <></>
        ) : (
          <>
            {reversedList.slice(0, -1).map((ele) => {
              if (updatedEpisodeList.indexOf(ele.id) === -1) {
                return <EpisodeListDetail episode={ele} key={ele.id} />;
              } else {
                return (
                  <PurchaseCheckList
                    episode={ele}
                    key={ele.id}
                    history={props.history}
                    location={props.location}
                    match={props.match}
                  />
                );
              }
            })}
            <PurchaseCheckList
              episode={reversedList[reversedList.length - 1]}
              history={props.history}
              location={props.location}
              match={props.match}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default EpisodeList;
