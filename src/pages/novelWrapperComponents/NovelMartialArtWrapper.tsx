import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import './NovelWrapperStyle.css';

import MartialArtsNovelList from './MartialArtsNovelList';

interface MartialArtsDataProps extends RouteComponentProps {
  handleMartialArtOn: () => void;
  martialArtsData: {
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
}

const NovelMartialArtWrapper: React.FC<MartialArtsDataProps> = (
  props: MartialArtsDataProps,
) => {
  return (
    <div id="novelMartialArtWrapper" className="mainPageNovelWrapper">
      <div className="mainNovelTextWrapper">
        <div className="mainNovelWrapperSubject">무협</div>
        <div
          role="presentation"
          className="mainNovelMoreView"
          onClick={() => {
            props.handleMartialArtOn();
            props.history.push('/main/martialArts');
          }}
        >
          더보기
        </div>
      </div>
      <div className="mainNovelInnerWrapper">
        {props.martialArtsData.map((data) => (
          <MartialArtsNovelList key={data.id} martialArtsData={data} />
        ))}
      </div>
    </div>
  );
};

export default NovelMartialArtWrapper;
