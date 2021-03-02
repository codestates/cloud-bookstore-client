import React from 'react';
import { withRouter } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../css/Landingpage.css';

import Cover from './landingPageComponent/Cover';
import BestNovel from './landingPageComponent/BestNovel';
import WriteLure from './landingPageComponent/WriteLure';
import IntroFunction from './landingPageComponent/IntroFunction';
import Footer from './Footer';

const LandingPage: React.FC = () => {
  AOS.init();
  return (
    <div className="landingBody">
      <div className="wholeLandingPageWrapper">
        <div className="landingNav">
          <div className="landingNavBtnWrapper">
            <a href="http://cloud-bookstore.com/landingpage">
              <div className="logoBtn"></div>
            </a>
            <a href="http://cloud-bookstore.com/main/home">
              <div className="goToMainBtn">소설읽기</div>
            </a>
          </div>
        </div>
        <Cover />
        <BestNovel />
        <WriteLure />
        <IntroFunction />
        <div id="verticalLine1" className="verticalLine"></div>
        <div id="verticalLine2" className="verticalLine"></div>
        <div id="verticalLine3" className="verticalLine"></div>
      </div>
      <Footer />
    </div>
  );
};

export default withRouter(LandingPage);
