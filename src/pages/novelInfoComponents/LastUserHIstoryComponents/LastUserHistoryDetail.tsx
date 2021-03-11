import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

interface lastUserHistoryProps extends RouteComponentProps {
  handleClickedSpecificEpisode: (parameter: {
    episodeId: number;
    novelId: number;
  }) => void;
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

const getToday = (): string => {
  const date: Date = new Date();
  const year: number = date.getFullYear();
  const month: string = ('0' + (1 + date.getMonth())).slice(-2);
  const day: string = ('0' + date.getDate()).slice(-2);
  return `${year}-${month}-${day}`;
};

const LastUserHistoryDetail: React.FC<lastUserHistoryProps> = (
  props: lastUserHistoryProps,
) => {
  const refinedUpdatedAt: string = props.clickedNovelData.episodes[
    props.clickedNovelData.userHistory.episodeDetail.episodeNum - 1
  ].updatedAt.slice(0, 10);

  const slicedTitle: string = props.clickedNovelData.episodes[
    props.clickedNovelData.userHistory.episodeDetail.episodeNum - 1
  ].title.slice(0, 13);

  const getBoolTitleLength = (): boolean => {
    if (
      props.clickedNovelData.episodes[
        props.clickedNovelData.userHistory.episodeDetail.episodeNum - 1
      ].title.length > 13
    )
      return true;
    else return false;
  };

  return (
    <div
      className="novelList"
      role="presentation"
      onClick={() =>
        props.handleClickedSpecificEpisode({
          episodeId: props.clickedNovelData.userHistory.episodeDetail.id,
          novelId: props.clickedNovelData.data.id,
        })
      }
    >
      <div
        className="thumbnail"
        style={{
          backgroundImage: `url(${props.clickedNovelData.userHistory.episodeDetail.thumbnail})`,
        }}
      />
      <div className="homeNovelListContentWrapper">
        <div className="countCloud">
          <div className="countCloudText countCloudLastUserHistory">
            누적구름{' '}
            {
              props.clickedNovelData.episodes[
                props.clickedNovelData.userHistory.episodeDetail.episodeNum - 1
              ].cloud
            }
            <div className="countCloudImg" />
          </div>

          {refinedUpdatedAt === getToday() ? (
            <div className="novelListNewObject">NEW</div>
          ) : (
            <></>
          )}
        </div>
        <div className="novelListSubjectWrapper">
          <div className="HomeNovelListSubject">
            {props.clickedNovelData.userHistory.episodeDetail.episodeNum}화.{' '}
            {getBoolTitleLength()
              ? `${slicedTitle} ...`
              : props.clickedNovelData.userHistory.userHistory[0].title}
          </div>
        </div>
        <div className="homeNovelListAuthorFavWrapper">
          <div className="novelListAuthor">{refinedUpdatedAt}</div>
        </div>
      </div>
    </div>
  );
};

export default LastUserHistoryDetail;
