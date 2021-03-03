import React from 'react';
import './NovelWrapperStyle.css';

import FantasyNovelList from './FantasyNovelList';

interface FantasyDataProps {
  fantasyData: {
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

const NovelFantasyWrapper: React.FC<FantasyDataProps> = (
  props: FantasyDataProps,
) => {
  return (
    <div id="novelFantasyWrapper" className="mainPageNovelWrapper">
      <div className="mainNovelTextWrapper">
        <div className="mainNovelWrapperSubject">판타지</div>
        <a href="http://cloud-bookstore.com/main/fantasy">
          <div className="mainNovelMoreView">더보기</div>
        </a>
      </div>
      <div className="mainNovelInnerWrapper">
        {props.fantasyData.map((data) => (
          <FantasyNovelList key={data.id} fantasyData={data} />
        ))}
      </div>
    </div>
  );
};

export default NovelFantasyWrapper;
