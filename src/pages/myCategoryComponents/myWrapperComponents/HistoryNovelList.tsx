import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import './HistoryNovelList.css';

interface HistoryDataProps extends RouteComponentProps {
  handleAxiosClickedNovelData: (data: number) => void;
  userHistories: {
    novels: {
      id: number;
      title: string;
      complete: boolean;
      thumbnail: string;
      updatedAt: string;
    };
    episodes: {
      id: number;
      episodeNum: number;
      cloud: number;
      thumbnail: string;
      title: string;
    };
  };
}

const getToday = (): string => {
  const date: Date = new Date();
  const year: number = date.getFullYear();
  const month: string = ('0' + (1 + date.getMonth())).slice(-2);
  const day: string = ('0' + date.getDate()).slice(-2);
  return `${year}-${month}-${day}`;
};

const NovelList: React.FC<HistoryDataProps> = (props: HistoryDataProps) => {
  const refinedUpdatedAt: string = props.userHistories.novels.updatedAt.slice(
    0,
    10,
  );
  const sliceTitle: string = props.userHistories.novels.title.slice(0, 9);
  const sliceEpisodeTitle: string = props.userHistories.episodes.title.slice(
    0,
    12,
  );
  const getBoolTitleLength = (): boolean => {
    if (props.userHistories.novels.title.length > 9) return true;
    else return false;
  };
  const getBoolEpisodeTitleLength = (): boolean => {
    if (props.userHistories.episodes.title.length > 12) return true;
    else return false;
  };
  const routing = () => {
    props.handleAxiosClickedNovelData(props.userHistories.novels.id);
    props.history.push(`/main/novel/${props.userHistories.novels.id}`);
  };
  return (
    <div className="novelHisList">
      <div
        className="hisThumbnail"
        style={{
          backgroundImage: `url(${props.userHistories.episodes.thumbnail})`,
        }}
      />
      <div className="homeNovelListContentWrapper">
        <div className="countCloud">
          <div className="countCloudText">
            누적구름 {props.userHistories.episodes.cloud}
          </div>
          {refinedUpdatedAt === getToday() ? (
            <div className="novelListNewObject">NEW</div>
          ) : (
            <></>
          )}
          <div className="countCloudImg"></div>
        </div>
        <div className="novelListSubjectWrapper">
          <div className="HomeNovelListSubject">
            {getBoolTitleLength()
              ? `${sliceTitle} ...`
              : props.userHistories.novels.title}
          </div>
        </div>
        <div className="homeNovelListAuthorFavWrapper">
          <div className="novelListAuthor">
            {getBoolEpisodeTitleLength()
              ? `${sliceEpisodeTitle} ...`
              : `${props.userHistories.episodes.episodeNum}화. ${props.userHistories.episodes.title}`}
          </div>
        </div>
      </div>
      <div
        className="goNovelEpisode"
        role="button"
        aria-hidden="true"
        onClick={routing}
      >
        작품리스트로 이동
      </div>
    </div>
  );
};
export default withRouter(NovelList);
