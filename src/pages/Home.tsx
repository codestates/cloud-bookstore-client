import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import '../css/Home.css';
import HomeSlider from './sliderComponent/HomeSlider';
import NovelRankingWrapper from './novelWrapperComponents/NovelRankingWrapper';
import NovelFantasyWrapper from './novelWrapperComponents/NovelFantasyWrapper';
import NovelMartialArtWrapper from './novelWrapperComponents/NovelMartialArtWrapper';
import NovelRomanceWrapper from './novelWrapperComponents/NovelRomanceWrapper';

interface NovelDataProps extends RouteComponentProps {
  handleAxiosClickedNovelData: (parameter: number) => void;
  handleFantasyOn: () => void;
  handleMartialArtOn: () => void;
  handleRomanceOn: () => void;
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

const Home: React.FC<NovelDataProps> = (props: NovelDataProps) => {
  return (
    <div className="mainpageContentWrapper">
      <div className="sliderWrapper">
        <HomeSlider />
      </div>
      <NovelRankingWrapper
        handleAxiosClickedNovelData={props.handleAxiosClickedNovelData}
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
        handleFantasyOn={props.handleFantasyOn}
      />
      <NovelMartialArtWrapper
        martialArtsData={props.novelData.martialArts}
        history={props.history}
        location={props.location}
        match={props.match}
        handleMartialArtOn={props.handleMartialArtOn}
      />
      <NovelRomanceWrapper
        romanceData={props.novelData.romance}
        history={props.history}
        location={props.location}
        match={props.match}
        handleRomanceOn={props.handleRomanceOn}
      />
    </div>
  );
};

export default Home;
