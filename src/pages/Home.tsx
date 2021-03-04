import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import '../css/Home.css';
import HomeSlider from './sliderComponent/HomeSlider';
import NovelRankingWrapper from './novelWrapperComponents/NovelRankingWrapper';
import NovelFantasyWrapper from './novelWrapperComponents/NovelFantasyWrapper';
import NovelMartialArtWrapper from './novelWrapperComponents/NovelMartialArtWrapper';
import NovelRomanceWrapper from './novelWrapperComponents/NovelRomanceWrapper';

interface NovelDataProps extends RouteComponentProps {
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
      </div>
      <NovelRankingWrapper
        rankingData={props.novelData.ranking}
        history={props.history}
        location={props.location}
        match={props.match}
      />
      <NovelFantasyWrapper
        fantasyData={props.novelData.fantasy}
        history={props.history}
        location={props.location}
        match={props.match}
      />
      <NovelMartialArtWrapper
        martialArtsData={props.novelData.martialArts}
        history={props.history}
        location={props.location}
        match={props.match}
      />
      <NovelRomanceWrapper romanceData={props.novelData.romance} />
    </div>
  );
};

export default Home;
