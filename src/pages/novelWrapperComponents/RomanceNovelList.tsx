import React from 'react';
import './NovelList.css';

interface RomanceDataProps {
  romanceData: {
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

const NovelList: React.FC<RomanceDataProps> = (props: RomanceDataProps) => {
  const refinedupdatedAt: string = props.romanceData.updatedAt.slice(0, 10);

  const sliceTitle: string = props.romanceData.title.slice(0, 9);
  const sliceAuthor: string = props.romanceData.author.slice(0, 12);
  const getBoolTitleLength = (): boolean => {
    if (props.romanceData.title.length > 9) return true;
    else return false;
  };
  const getBoolAuthorLength = (): boolean => {
    if (props.romanceData.author.length > 12) return true;
    else return false;
  };

  return (
    <div className="novelList">
      <div
        className="thumbnail"
        style={{
          backgroundImage: `url(${props.romanceData.thumbnail})`,
        }}
      >
        {props.romanceData.complete ? (
          <div className="novelListCompleteObject">완결</div>
        ) : (
          <></>
        )}
      </div>
      <div className="homeNovelListContentWrapper">
        <div className="countCloud">
          <div className="countCloudText">
            누적구름 {props.romanceData.cloud}
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
              : props.romanceData.title}
          </div>
        </div>
        <div className="homeNovelListAuthorFavWrapper">
          <div className="novelListAuthor">
            {getBoolAuthorLength()
              ? `${sliceAuthor} ...`
              : props.romanceData.author}
          </div>
          <div className="novelListFavorite">
            관심 {props.romanceData.userLike}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NovelList;
