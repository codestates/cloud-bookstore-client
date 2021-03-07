/* eslint-disable no-console */
import React from 'react';

interface episodeListProps {
  episode: {
    id: number;
    episodeNum: number;
    novelId: number;
    title: string;
    text: string;
    thumbnail: string;
    cloud: number;
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

const EpisodeListDetail: React.FC<episodeListProps> = (
  props: episodeListProps,
) => {
  const refinedUpdatedAt: string = props.episode.updatedAt.slice(0, 10);

  const slicedTitle: string = props.episode.title.slice(0, 13);

  const getBoolTitleLength = (): boolean => {
    if (props.episode.title.length > 13) return true;
    else return false;
  };
  return (
    <>
      {console.log('구입 안 한 경우')}
      <div className="novelList" style={{ opacity: '.5' }}>
        <div
          className="thumbnail"
          style={{
            backgroundImage: `url(${props.episode.thumbnail})`,
          }}
        ></div>
        <div className="homeNovelListContentWrapper">
          <div className="countCloud">
            <div className="countCloudText">누적구름 {props.episode.cloud}</div>
            <div className="countCloudImg" />
            {refinedUpdatedAt === getToday() ? (
              <div className="novelListNewObject">NEW</div>
            ) : (
              <></>
            )}
          </div>
          <div className="novelListSubjectWrapper">
            <div className="HomeNovelListSubject">
              {props.episode.episodeNum}화{' '}
              {getBoolTitleLength()
                ? `${slicedTitle} ...`
                : props.episode.title}
            </div>
          </div>
          <div className="homeNovelListAuthorFavWrapper">
            <div className="novelListAuthor">{refinedUpdatedAt}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EpisodeListDetail;
