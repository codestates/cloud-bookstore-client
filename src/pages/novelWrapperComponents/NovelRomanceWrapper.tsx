import React from 'react';
import './NovelWrapperStyle.css';

import RomanceNovelList from './RomanceNovelList';

interface RomanceDataProps {
  romanceData: {
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

const NovelRomanceWrapper: React.FC<RomanceDataProps> = (
  props: RomanceDataProps,
) => {
  return (
    <div id="novelRomanceWrapper" className="mainPageNovelWrapper">
      <div className="mainNovelTextWrapper">
        <div className="mainNovelWrapperSubject">로맨스</div>
        <div className="mainNovelMoreView">더보기</div>
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
