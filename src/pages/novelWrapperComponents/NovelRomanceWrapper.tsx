import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import './NovelWrapperStyle.css';

import RomanceNovelList from './RomanceNovelList';

interface RomanceDataProps extends RouteComponentProps {
  handleRomanceOn: () => void;
  romanceData: {
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
}

const NovelRomanceWrapper: React.FC<RomanceDataProps> = (
  props: RomanceDataProps,
) => {
  return (
    <div id="novelRomanceWrapper" className="mainPageNovelWrapper">
      <div className="mainNovelTextWrapper">
        <div className="mainNovelWrapperSubject">로맨스</div>
        <div
          role="presentation"
          className="mainNovelMoreView"
          onClick={() => {
            props.handleRomanceOn();
            props.history.push('/main/romance');
          }}
        >
          더보기
        </div>
      </div>
      <div className="mainNovelInnerWrapper">
        {props.romanceData.map((data) => (
          <RomanceNovelList key={data.id} romanceData={data} />
        ))}
      </div>
    </div>
  );
};

export default NovelRomanceWrapper;
