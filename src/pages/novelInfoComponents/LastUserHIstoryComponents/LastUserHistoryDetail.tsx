import React from 'react';

const LastUserHistoryDetail: React.FC = () => {
  return (
    <div className="novelList">
      <div
        className="thumbnail"
        style={{
          backgroundImage:
            'url(https://user-images.githubusercontent.com/72306693/108985620-99c68280-76d4-11eb-9305-50ef35e77c93.png)',
        }}
      >
        <div className="novelListCompleteObject">완결</div>
      </div>
      <div className="homeNovelListContentWrapper">
        <div className="countCloud">
          <div className="countCloudText">누적구름</div>
          <div className="countCloudImg" />
          <div className="novelListNewObject">NEW</div>
        </div>
        <div className="novelListSubjectWrapper">
          <div className="HomeNovelListSubject">어느 날</div>
        </div>
        <div className="homeNovelListAuthorFavWrapper">
          <div className="novelListAuthor">2021.02.19</div>
        </div>
      </div>
    </div>
  );
};

export default LastUserHistoryDetail;
