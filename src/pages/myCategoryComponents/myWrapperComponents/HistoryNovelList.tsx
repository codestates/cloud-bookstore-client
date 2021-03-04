import React from 'react';
import '../../novelWrapperComponents/NovelList.css';

interface HistoryDataProps {
  historyData: {
    novels: {
      title: string;
      complete: boolean;
      thumbnail: string;
      updatedAt: string;
    };
    episodes: {
      id: number;
      title: string;
    };
  }[];
}

const getToday = (): string => {
  const date: Date = new Date();
  const year: number = date.getFullYear();
  const month: string = ('0' + (1 + date.getMonth())).slice(-2);
  const day: string = ('0' + date.getDate()).slice(-2);
  return `${year}-${month}-${day}`;
};

const NovelList: React.FC<HistoryDataProps> = (props: HistoryDataProps) => {
  const refinedupdatedAt: string = props.historyData.novels.updatedAt.slice(
    0,
    10,
  );

  const sliceTitle: string = props.historyData.novels.title.slice(0, 9);
  const sliceEpisodeTitle: string = props.historyData.episodes.title.slice(
    0,
    12,
  );
  const getBoolTitleLength = (): boolean => {
    if (props.historyData.novels.title.length > 9) return true;
    else return false;
  };
  const getBoolEpisodeTitleLength = (): boolean => {
    if (props.historyData.episodes.title.length > 12) return true;
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
        {refinedupdatedAt === getToday() ? (
          <div className="novelListNewObject">NEW</div>
        ) : (
          <></>
        )}
      </div>
      <div className="homeNovelListContentWrapper">
        <div className="countCloud">
          <div className="countCloudText">
            누적구름 {props.fantasyData.cloud}
          </div>
          <div className="countCloudImg" />
        </div>
        <div className="novelListSubjectWrapper">
          <div className="HomeNovelListSubject">
            {getBoolTitleLength()
              ? `${sliceTitle} ...`
              : props.fantasyData.title}
          </div>
        </div>
        <div className="homeNovelListAuthorFavWrapper">
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
