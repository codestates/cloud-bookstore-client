import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import './NovelList.css';

interface CategoryNovelProps extends RouteComponentProps {
  handleAxiosClickedNovelData: (parameter: number) => void;
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
}

const getToday = (): string => {
  const date: Date = new Date();
  const year: number = date.getFullYear();
  const month: string = ('0' + (1 + date.getMonth())).slice(-2);
  const day: string = ('0' + date.getDate()).slice(-2);
  return `${year}-${month}-${day}`;
};

const CategoryNovelList: React.FC<CategoryNovelProps> = (
  props: CategoryNovelProps,
) => {
  const refinedUpdatedAt: string = props.data.updatedAt.slice(0, 10);

  const sliceTitle: string = props.data.title.slice(0, 13);
  const sliceAuthor: string = props.data.author.slice(0, 12);
  const getBoolTitleLength = (): boolean => {
    if (props.data.title.length > 13) return true;
    else return false;
  };
  const getBoolAuthorLength = (): boolean => {
    if (props.data.author.length > 12) return true;
    else return false;
  };

  return (
    <div className="novelList">
      <div
        className="thumbnail"
        style={{
          backgroundImage: `url(${props.data.thumbnail})`,
        }}
        role="presentation"
        onClick={() => {
          props.handleAxiosClickedNovelData(props.data.id);
          props.history.push(`/main/novel/${props.data.id}`);
        }}
      >
        {props.data.complete ? (
          <div className="novelListCompleteObject">완결</div>
        ) : (
          <></>
        )}
      </div>
      <div className="novelListContentWrapper">
        <div className="countCloud">
          <div className="countCloudText">누적구름 {props.data.cloud}</div>
          <div className="countCloudImg" />
          {refinedUpdatedAt === getToday() ? (
            <div className="novelListNewObject">NEW</div>
          ) : (
            <></>
          )}
        </div>
        <div className="novelListSubjectWrapper">
          <div className="novelListSubject">
            {getBoolTitleLength() ? `${sliceTitle} ...` : props.data.title}
          </div>
        </div>
        <div className="novelListAuthorFavWrapper">
          <div className="novelListAuthor">
            {getBoolAuthorLength() ? `${sliceAuthor} ...` : props.data.author}
          </div>
          <div className="novelListFavorite">관심 {props.data.userLike}</div>
        </div>
      </div>
    </div>
  );
};

export default CategoryNovelList;
