import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import './NovelList.css';

interface MartialArtsDataProps extends RouteComponentProps {
  handleAxiosClickedNovelData: (parameter: number) => void;
  martialArtsData: {
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

const NovelList: React.FC<MartialArtsDataProps> = (
  props: MartialArtsDataProps,
) => {
  const refinedUpdatedAt: string = props.martialArtsData.updatedAt.slice(0, 10);

  const sliceTitle: string = props.martialArtsData.title.slice(0, 13);
  const sliceAuthor: string = props.martialArtsData.author.slice(0, 12);
  const getBoolTitleLength = (): boolean => {
    if (props.martialArtsData.title.length > 13) return true;
    else return false;
  };
  const getBoolAuthorLength = (): boolean => {
    if (props.martialArtsData.author.length > 12) return true;
    else return false;
  };

  return (
    <div
      className="novelList"
      role="presentation"
      onClick={() => {
        props.handleAxiosClickedNovelData(props.martialArtsData.id);
        props.history.push(`/main/novel/${props.martialArtsData.id}`);
      }}
    >
      <div
        className="thumbnail"
        style={{
          backgroundImage: `url(${props.martialArtsData.thumbnail})`,
        }}
      >
        {props.martialArtsData.complete ? (
          <div className="novelListCompleteObject">완결</div>
        ) : (
          <></>
        )}
      </div>
      <div className="novelListContentWrapper">
        <div className="countCloud">
          <div className="countCloudText">
            누적구름 {props.martialArtsData.cloud}
          </div>
          <div className="countCloudImg" />
          {refinedUpdatedAt === getToday() ? (
            <div className="novelListNewObject">NEW</div>
          ) : (
            <></>
          )}
        </div>
        <div className="novelListSubjectWrapper">
          <div className="HomeNovelListSubject">
            {getBoolTitleLength()
              ? `${sliceTitle} ...`
              : props.martialArtsData.title}
          </div>
        </div>
        <div className="homeNovelListAuthorFavWrapper">
          <div className="novelListAuthor">
            {getBoolAuthorLength()
              ? `${sliceAuthor} ...`
              : props.martialArtsData.author}
          </div>
          <div className="novelListFavorite">
            관심 {props.martialArtsData.userLike}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NovelList;
