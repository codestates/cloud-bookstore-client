import React from 'react';
import { withRouter } from 'react-router-dom';
import '../css/Mainpage.css';

import UserNav from './UserNav';
import CategoryNav from './CategoryNav';
import Footer from './Footer';
import NovelRankingWrapper from './novelWrapperComponents/NovelRankingWrapper';
import NovelFantasyWrapper from './novelWrapperComponents/NovelFantasyWrapper';
import NovelMartialartWrapper from './novelWrapperComponents/NovelMartialartWrapper';
import NovelRomanceWrapper from './novelWrapperComponents/NovelRomanceWrapper';

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
          <NovelRankingWrapper />
          <NovelFantasyWrapper />
          <NovelMartialartWrapper />
          <NovelRomanceWrapper />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default withRouter(Mainpage);
