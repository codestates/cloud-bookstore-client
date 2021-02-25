import React from 'react';
import './NovelList.css';

// 가짜 데이터용
import fakeData from '../../asset/fakeData/fakeData';

const NovelList: React.FC = () => {
  return (
    <div className="novelList">
      <div
        className="thumbnail"
        style={{
          backgroundImage: `url(${fakeData.ranking[0].thumbnail})`,
        }}
      >
        <div className="novelListCompleteObject">완결</div>
      </div>
      <div className="novelListContentWrapper">
        <div className="countCloud">
          <div className="countCloudText">
            누적구름 {fakeData.ranking[0].cloud}
          </div>
          <div className="countCloudImg" />
        </div>
        <div className="novelListSubjectWrapper">
          <div className="novelListSubject">{fakeData.ranking[0].title}</div>
          <div className="novelListNewObject">NEW</div>
        </div>
        <div className="novelListAuthorFavWrapper">
          <div className="novelListAuthor">{fakeData.ranking[0].author}</div>
          <div className="novelListFavorite">
            관심 {fakeData.ranking[0].userLike}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NovelList;
