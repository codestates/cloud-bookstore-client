/* eslint-disable */

import React, { CSSProperties } from 'react';
import { withRouter } from 'react-router-dom';
import '../css/Mainpage.css';

import UserNav from './UserNav';
import CategoryNav from './CategoryNav';
import Footer from './Footer';

// 가짜 데이터용
import fakeData from '../asset/fakeData/fakeData';

const Mainpage: React.FC = () => {
  console.log(fakeData);
  return (
    <div>
      <div className="wholeMainPageWrapper">
        <UserNav />
        <CategoryNav />
        <div className="mainpageContentWrapper">
          <div className="sliderWrapper">
            <div className="sliderText">
              <p>
                <span>나는</span>
                <span> 내일</span>
              </p>
              <p>어제의</p>
              <p>너와 만난다</p>
            </div>
          </div>
          <div id="novelRankingWrapper" className="mainPageNovelWrapper">
            <div className="mainNovelWrapperSubject">랭킹</div>
            <div className="mainNovelInnerWrapper">
              <div id="novelListFristRow" className="novelListRow">
                <div className="novelList">
                  <div className="thumbnail" style={{backgroundImage: `url(${fakeData.ranking[0].thumbnail})`}}>
                    <div className="novelListCompleteObject">완결</div>
                  </div>
                  <div className="novelListContentWrapper">
                    <div className="countCloud">
                      <div className="countCloudText">누적구름 {fakeData.ranking[0].cloud}</div>
                      <div className="countCloudImg" />
                    </div>
                    <div className="novelListSubjectWrapper">
                      <div className="novelListSubject">{fakeData.ranking[0].title}</div>
                      <div className="novelListNewObject">NEW</div>
                    </div>
                    <div className="novelListAuthorFavWrapper">
                      <div className="novelListAuthor">{fakeData.ranking[0].author}</div>
                      <div className="novelListFavorite">관심 {fakeData.ranking[0].userLike}</div>
                    </div>
                  </div>
                </div>
                <div className="novelList"></div>
                <div className="novelList"></div>
                <div className="novelList"></div>
              </div>
              <div className="novelListRow">
                <div className="novelList"></div>
                <div className="novelList"></div>
                <div className="novelList"></div>
                <div className="novelList"></div>
              </div>
            </div>
          </div>
          <div id="novelFantasyWrapper" className="mainPageNovelWrapper">
            <div className="mainNovelTextWrapper">
              <div className="mainNovelWrapperSubject">판타지</div>
              <div className="mainNovelMoreView">더보기</div>
            </div>
            <div className="mainNovelInnerWrapper">
              <div id="novelListFristRow" className="novelListRow">
                <div className="novelList"></div>
                <div className="novelList"></div>
                <div className="novelList"></div>
                <div className="novelList"></div>
              </div>
              <div className="novelListRow">
                <div className="novelList"></div>
                <div className="novelList"></div>
                <div className="novelList"></div>
                <div className="novelList"></div>
              </div>
            </div>
          </div>
          <div id="novelMartialartWrapper" className="mainPageNovelWrapper">
            <div className="mainNovelTextWrapper">
              <div className="mainNovelWrapperSubject">무협</div>
              <div className="mainNovelMoreView">더보기</div>
            </div>
            <div className="mainNovelInnerWrapper">
              <div id="novelListFristRow" className="novelListRow">
                <div className="novelList"></div>
                <div className="novelList"></div>
                <div className="novelList"></div>
                <div className="novelList"></div>
              </div>
              <div className="novelListRow">
                <div className="novelList"></div>
                <div className="novelList"></div>
                <div className="novelList"></div>
                <div className="novelList"></div>
              </div>
            </div>
          </div>
          <div id="novelRomanceWrapper" className="mainPageNovelWrapper">
            <div className="mainNovelTextWrapper">
              <div className="mainNovelWrapperSubject">로맨스</div>
              <div className="mainNovelMoreView">더보기</div>
            </div>
            <div className="mainNovelInnerWrapper">
              <div id="novelListFristRow" className="novelListRow">
                <div className="novelList"></div>
                <div className="novelList"></div>
                <div className="novelList"></div>
                <div className="novelList"></div>
              </div>
              <div className="novelListRow">
                <div className="novelList"></div>
                <div className="novelList"></div>
                <div className="novelList"></div>
                <div className="novelList"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default withRouter(Mainpage);
