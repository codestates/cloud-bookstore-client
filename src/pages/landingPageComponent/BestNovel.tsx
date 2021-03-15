import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import './BestNovel.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface BestNovelProps extends RouteComponentProps {
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

const BestNovel: React.FC<BestNovelProps> = (props: BestNovelProps) => {
  AOS.init();
  return (
    <div className="wholeBestNovelWrapper">
      <div className="bestNovelText">
        <p>독자들이 선택한</p>
        <p>최고의 작품들</p>
        <p>각 장르별로 평균 구름수가 가장 많은 작품들 입니다.</p>
      </div>
      <div
        id="bestNovelContainer1"
        className="bestNovelContainer"
        role="presentation"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        onClick={() => {
          props.handleAxiosClickedNovelData(props.novelData.fantasy[0].id);
          props.history.push(`/main/novel/${props.novelData.fantasy[0].id}`);
        }}
      >
        <div id="bestNovelThumb1" className="bestNovelThumb"></div>
        <div className="bestNovelTitle">{props.novelData.fantasy[0].title}</div>
        <div className="bestNovelDescription">
          {props.novelData.fantasy[0].description}
        </div>
      </div>
      <div
        id="bestNovelContainer2"
        className="bestNovelContainer"
        role="presentation"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-offset="300"
        onClick={() => {
          props.handleAxiosClickedNovelData(props.novelData.martialArts[0].id);
          props.history.push(
            `/main/novel/${props.novelData.martialArts[0].id}`,
          );
        }}
      >
        <div id="bestNovelThumb2" className="bestNovelThumb"></div>
        <div className="bestNovelTitle">
          {props.novelData.martialArts[0].title}
        </div>
        <div className="bestNovelDescription">
          {props.novelData.martialArts[0].description}
        </div>
      </div>
      <div
        id="bestNovelContainer3"
        className="bestNovelContainer"
        role="presentation"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-offset="500"
        onClick={() => {
          props.handleAxiosClickedNovelData(props.novelData.romance[0].id);
          props.history.push(`/main/novel/${props.novelData.romance[0].id}`);
        }}
      >
        <div id="bestNovelThumb3" className="bestNovelThumb"></div>
        <div className="bestNovelTitle">{props.novelData.romance[0].title}</div>
        <div className="bestNovelDescription">
          {props.novelData.romance[0].description}
        </div>
      </div>
    </div>
  );
};

export default BestNovel;
