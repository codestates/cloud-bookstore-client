import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../css/LandingPage.css';

import Cover from './landingPageComponent/Cover';
import BestNovel from './landingPageComponent/BestNovel';
import WriteLure from './landingPageComponent/WriteLure';
import IntroFunction from './landingPageComponent/IntroFunction';
import Footer from './Footer';

interface LandingPageNovelDataProps extends RouteComponentProps {
  handleAxiosClickedNovelData: (parameter: number) => void;
  novelData: {
    ranking: {
      id: number;
      title: string;
      author: string;
      category: number;
      description: string;
      cloud: number;
      userLike: number;
      episodeCount: number;
      complete: boolean;
      thumbnail: string;
      createdAt: string;
      updatedAt: string;
    }[];
    fantasy: {
      id: number;
      title: string;
      author: string;
      category: number;
      description: string;
      cloud: number;
      userLike: number;
      episodeCount: number;
      complete: boolean;
      thumbnail: string;
      createdAt: string;
      updatedAt: string;
    }[];
    martialArts: {
      id: number;
      title: string;
      author: string;
      category: number;
      description: string;
      cloud: number;
      userLike: number;
      episodeCount: number;
      complete: boolean;
      thumbnail: string;
      createdAt: string;
      updatedAt: string;
    }[];
    romance: {
      id: number;
      title: string;
      author: string;
      category: number;
      description: string;
      cloud: number;
      userLike: number;
      episodeCount: number;
      complete: boolean;
      thumbnail: string;
      createdAt: string;
      updatedAt: string;
    }[];
  };
}

const LandingPage: React.FC<LandingPageNovelDataProps> = (
  props: LandingPageNovelDataProps,
) => {
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
              <div className="goToMainBtn">시작하기</div>
            </a>
          </div>
        </div>
        <Cover />
        <BestNovel
          novelData={props.novelData}
          history={props.history}
          location={props.location}
          match={props.match}
          handleAxiosClickedNovelData={props.handleAxiosClickedNovelData}
        />
        <WriteLure
          history={props.history}
          location={props.location}
          match={props.match}
        />
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
