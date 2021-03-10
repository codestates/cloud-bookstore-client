import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import './HistoryNovelList.css';

interface HistoryDataProps extends RouteComponentProps {
  handleAxiosClickedNovelData: (data: number) => void;
  userLikes: {
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

const UserLikes: React.FC<HistoryDataProps> = (props: HistoryDataProps) => {
  const refinedupdatedAt: string = props.userLikes.updatedAt.slice(0, 10);
  const sliceTitle: string = props.userLikes.title.slice(0, 9);
  const sliceauthor: string = props.userLikes.author.slice(0, 12);
  const getBoolTitleLength = (): boolean => {
    if (props.userLikes.title.length > 9) return true;
    else return false;
  };
  const getBoolEpisodeTitleLength = (): boolean => {
    if (props.userLikes.title.length > 12) return true;
    else return false;
  };
  const routing = () => {
    props.handleAxiosClickedNovelData(props.userLikes.id);
    props.history.push(`/main/novel/${props.userLikes.id}`);
  };

  return (
    <div className="novelHisList">
      <div
        className="hisThumbnail"
        style={{
          backgroundImage: `url(${props.userLikes.thumbnail})`,
        }}
      >
        {props.userLikes.complete ? (
          <div className="novelListCompleteObject">완결</div>
        ) : (
          <></>
        )}
      </div>
      <div className="homeNovelListContentWrapper">
        <div className="countCloud">
          {refinedupdatedAt === getToday() ? (
            <div className="novelListNewObject">NEW</div>
          ) : (
            <></>
          )}
          <div className="countCloudText">누적구름 {props.userLikes.cloud}</div>
          <div className="countCloudImg"></div>
        </div>
        <div className="novelListSubjectWrapper">
          <div className="HomeNovelListSubject">
            {getBoolTitleLength() ? `${sliceTitle} ...` : props.userLikes.title}
          </div>
        </div>
        <div className="homeNovelListAuthorFavWrapper">
          <div className="novelListAuthor">
            {getBoolEpisodeTitleLength()
              ? `${sliceauthor} ...`
              : props.userLikes.author}
          </div>
          <div className="novelListFavorite">
            관심 {props.userLikes.userLike}
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
export default withRouter(UserLikes);
