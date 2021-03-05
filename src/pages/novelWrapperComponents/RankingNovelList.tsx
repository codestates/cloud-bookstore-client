import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import './NovelList.css';

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
  const refinedupdatedAt: string = props.rankingData.updatedAt.slice(0, 10);

  const sliceTitle: string = props.rankingData.title.slice(0, 9);
  const sliceAuthor: string = props.rankingData.author.slice(0, 12);
  const getBoolTitleLength = (): boolean => {
    if (props.rankingData.title.length > 9) return true;
    else return false;
  };
  const getBoolAuthorLength = (): boolean => {
    if (props.rankingData.author.length > 12) return true;
    else return false;
  };

  return (
    <div
      className="novelList"
      role="presentation"
      onClick={() => {
        props.handleClickedNovelId(props.rankingData.id);
        props.history.push(`/main/novel/${props.rankingData.id}`);
      }}
    >
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
      <div className="homeNovelListContentWrapper">
        <div className="countCloud">
          <div className="countCloudText">
            누적구름 {props.rankingData.cloud}
          </div>
          <div className="countCloudImg" />
          {refinedupdatedAt === getToday() ? (
            <div className="novelListNewObject">NEW</div>
          ) : (
            <></>
          )}
        </div>
        <div className="novelListSubjectWrapper">
          <div className="HomeNovelListSubject">
            {getBoolTitleLength()
              ? `${sliceTitle} ...`
              : props.rankingData.title}
          </div>
        </div>
        <div className="homeNovelListAuthorFavWrapper">
          <div className="novelListAuthor">
            {getBoolAuthorLength()
              ? `${sliceAuthor} ...`
              : props.rankingData.author}
          </div>
          <div className="novelListFavorite">
            관심 {props.rankingData.userLike}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NovelList;
