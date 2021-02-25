import React from 'react';
import './NovelList.css';

interface RankingDataProps {
  rankingData: {
    id: number;
    title: string;
    author: string;
    cloud: number;
    userLike: number;
    thumbnail: string;
    complete: boolean;
    createdAt: string; // ! 신규 에피소드의 createdAt이 가능한지 확인필요
  };
}

const getToday = (): string => {
  const date: Date = new Date();
  const year: number = date.getFullYear();
  const month: string = ('0' + (1 + date.getMonth())).slice(-2);
  const day: string = ('0' + date.getDate()).slice(-2);
  return `${year}-${month}-${day}`;
};

const NovelList: React.FC<RankingDataProps> = (props: RankingDataProps) => {
  const refinedCreatedAt: string = props.rankingData.createdAt.slice(0, 10);

  return (
    <div className="novelList">
      <div
        className="thumbnail"
        style={{
          backgroundImage: `url(${props.rankingData.thumbnail})`,
        }}
      >
        {props.rankingData.complete ? (
          <div className="novelListCompleteObject">완결</div>
        ) : (
          <></>
        )}
      </div>
      <div className="novelListContentWrapper">
        <div className="countCloud">
          <div className="countCloudText">
            누적구름 {props.rankingData.cloud}
          </div>
          <div className="countCloudImg" />
        </div>
        <div className="novelListSubjectWrapper">
          <div className="novelListSubject">{props.rankingData.title}</div>
          {refinedCreatedAt === getToday() ? (
            <div className="novelListNewObject">NEW</div>
          ) : (
            <></>
          )}
        </div>
        <div className="novelListAuthorFavWrapper">
          <div className="novelListAuthor">{props.rankingData.author}</div>
          <div className="novelListFavorite">
            관심 {props.rankingData.userLike}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NovelList;
