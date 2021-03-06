import React from 'react';

interface episodeListProps {
  data: {
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
  purchase: {
    episodeId: number;
  }[];
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
  const refinedUpdatedAt: string = props.data.updatedAt.slice(0, 10);

  const slicedTitle: string = props.data.title.slice(0, 13);

  const getBoolTitleLength = (): boolean => {
    if (props.data.title.length > 13) return true;
    else return false;
  };

  return (
    <>
      <div className="novelList">
        <div
          className="thumbnail"
          style={{
            backgroundImage: `url(${props.data.thumbnail})`,
          }}
        ></div>
        <div className="homeNovelListContentWrapper">
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
            <div className="HomeNovelListSubject">
              {props.data.episodeNum}화{' '}
              {getBoolTitleLength() ? `${slicedTitle} ...` : props.data.title}
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
