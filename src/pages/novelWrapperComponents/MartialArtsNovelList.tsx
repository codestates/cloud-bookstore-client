import React from 'react';
import './NovelList.css';

interface MartialArtsDataProps {
  martialArtsData: {
    id: number;
    title: string;
    author: string;
    cloud: number;
    userLike: number;
    thumbnail: string;
    complete: boolean;
    createdAt: string;
  };
}

const NovelList: React.FC<MartialArtsDataProps> = (
  props: MartialArtsDataProps,
) => {
  return (
    <div className="novelList">
      <div
        className="thumbnail"
        style={{
          backgroundImage: `url(${props.martialArtsData.thumbnail})`,
        }}
      >
        <div className="novelListCompleteObject">완결</div>
      </div>
      <div className="novelListContentWrapper">
        <div className="countCloud">
          <div className="countCloudText">
            누적구름 {props.martialArtsData.cloud}
          </div>
          <div className="countCloudImg" />
        </div>
        <div className="novelListSubjectWrapper">
          <div className="novelListSubject">{props.martialArtsData.title}</div>
          <div className="novelListNewObject">NEW</div>
        </div>
        <div className="novelListAuthorFavWrapper">
          <div className="novelListAuthor">{props.martialArtsData.author}</div>
          <div className="novelListFavorite">
            관심 {props.martialArtsData.userLike}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NovelList;
