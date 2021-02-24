import React from 'react';
import { withRouter } from 'react-router-dom';
import '../css/Mainpage.css';

import UserNav from './UserNav';
import CategoryNav from './CategoryNav';
import Footer from './Footer';

const Mainpage: React.FC = () => {
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
            랭킹
          </div>
          <div id="novelFantasyWrapper" className="mainPageNovelWrapper">
            판타지
          </div>
          <div id="novelMartialartWrapper" className="mainPageNovelWrapper">
            무협
          </div>
          <div id="novelRomanceWrapper" className="mainPageNovelWrapper">
            로맨스
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default withRouter(Mainpage);
