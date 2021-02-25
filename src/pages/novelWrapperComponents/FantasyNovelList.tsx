import React from 'react';
import './NovelList.css';

interface FantasyDataProps {
  fantasyData: {
    id: number;
    title: string;
    author: string;
    cloud: number;
    userLike: number;
    thumbnail: string;
    complete: boolean;
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

const NovelList: React.FC<FantasyDataProps> = (props: FantasyDataProps) => {
  const refinedupdatedAt: string = props.fantasyData.updatedAt.slice(0, 10);

  const sliceTitle: string = props.fantasyData.title.slice(0, 6);
  const sliceAuthor: string = props.fantasyData.author.slice(0, 8);
  const getBoolTitleLength = (): boolean => {
    if (props.fantasyData.title.length > 6) return true;
    else return false;
  };
  const getBoolAuthorLength = (): boolean => {
    if (props.fantasyData.author.length > 8) return true;
    else return false;
  };

  return (
    <div className="novelList">
      <div
        className="thumbnail"
        style={{
          backgroundImage: `url(${props.fantasyData.thumbnail})`,
        }}
      >
        {props.fantasyData.complete ? (
          <div className="novelListCompleteObject">완결</div>
        ) : (
          <></>
        )}
      </div>
      <div className="novelListContentWrapper">
        <div className="countCloud">
          <div className="countCloudText">
            누적구름 {props.fantasyData.cloud}
          </div>
          <div className="countCloudImg" />
        </div>
        <div className="novelListSubjectWrapper">
          <div className="novelListSubject">
            {getBoolTitleLength()
              ? `${sliceTitle} ...`
              : props.fantasyData.title}
          </div>
          {refinedupdatedAt === getToday() ? (
            <div className="novelListNewObject">NEW</div>
          ) : (
            <></>
          )}
        </div>
        <div className="novelListAuthorFavWrapper">
          <div className="novelListAuthor">
            {getBoolAuthorLength()
              ? `${sliceAuthor} ...`
              : props.fantasyData.author}
          </div>
          <div className="novelListFavorite">
            관심 {props.fantasyData.userLike}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NovelList;
