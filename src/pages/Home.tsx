import React from 'react';
import '../css/Home.css';

import HomeSlider from './sliderComponent/HomeSlider';
import NovelRankingWrapper from './novelWrapperComponents/NovelRankingWrapper';
import NovelFantasyWrapper from './novelWrapperComponents/NovelFantasyWrapper';
import NovelMartialArtWrapper from './novelWrapperComponents/NovelMartialArtWrapper';
import NovelRomanceWrapper from './novelWrapperComponents/NovelRomanceWrapper';

interface NovelDataProps {
  novelData: {
    ranking: {
      id: number;
      title: string;
      author: string;
      cloud: number;
      userLike: number;
      thumbnail: string;
      complete: boolean;
      createdAt: string;
      updatedAt: string;
    }[];
    fantasy: {
      id: number;
      title: string;
      author: string;
      cloud: number;
      userLike: number;
      thumbnail: string;
      complete: boolean;
      createdAt: string;
      updatedAt: string;
    }[];
    martialArts: {
      id: number;
      title: string;
      author: string;
      cloud: number;
      userLike: number;
      thumbnail: string;
      complete: boolean;
      createdAt: string;
      updatedAt: string;
    }[];
    romance: {
      id: number;
      title: string;
      author: string;
      cloud: number;
      userLike: number;
      thumbnail: string;
      complete: boolean;
      createdAt: string;
      updatedAt: string;
    }[];
  };
}

const Home: React.FC<NovelDataProps> = (props: NovelDataProps) => {
  return (
    <div className="mainpageContentWrapper">
      <div className="sliderWrapper">
        <HomeSlider />
        {/* <div className="sliderText">
          <p>
            <span>나는</span>
            <span> 내일</span>
          </p>
          <p>어제의</p>
          <p>너와 만난다</p>
        </div> */}
      </div>
      <NovelRankingWrapper rankingData={props.novelData.ranking} />
      <NovelFantasyWrapper fantasyData={props.novelData.fantasy} />
      <NovelMartialArtWrapper martialArtsData={props.novelData.martialArts} />
      <NovelRomanceWrapper romanceData={props.novelData.romance} />
    </div>
  );
};

export default Home;
