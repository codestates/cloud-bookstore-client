import React from 'react';
import './MyNovelEpisodeCardList.css';

interface MyNovelEpisodeProps {
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
  };
}

const MyNovelEpisodeCardList: React.FC<MyNovelEpisodeProps> = (
  props: MyNovelEpisodeProps,
) => {
  const sliceTitle: string = props.episodes.title.slice(0, 9);
  const sliceAuthor: string = props.episodes.createdAt.slice(0, 12);
  const getBoolTitleLength = (): boolean => {
    if (props.episodes.title.length > 9) return true;
    else return false;
  };
  const getBoolAuthorLength = (): boolean => {
    if (props.episodes.createdAt.length > 12) return true;
    else return false;
  };
  return (
    <div className="EpNovelList">
      <div
        className="EpThumbnail"
        style={{
          backgroundImage: `url(${props.episodes.thumbnail})`,
        }}
      ></div>
      <div className="EpNovelListContentWrapper">
        <div className="EpCountCloud">
          <div className="EpCountCloudText">
            누적구름 {props.episodes.cloud}
          </div>
          <div className="EpCountCloudImg" />
          <div className="EpNovelBtn">수정</div>
          <div className="EpNovelDeBtn">삭제</div>
        </div>
        <div className="EpNovelListSubjectWrapper">
          <div className="HomeNovelListSubject">
            {getBoolTitleLength() ? `${sliceTitle} ...` : props.episodes.title}
          </div>
        </div>
        <div className="homeNovelListAuthorFavWrapper">
          <div className="EpNovelListAuthor">
            {getBoolAuthorLength()
              ? `${sliceAuthor} ...`
              : props.episodes.createdAt}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyNovelEpisodeCardList;
