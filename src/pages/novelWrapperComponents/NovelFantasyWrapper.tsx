import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import './NovelWrapperStyle.css';

import FantasyNovelList from './FantasyNovelList';

interface FantasyDataProps extends RouteComponentProps {
  handleFantasyOn: () => void;
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
        <div
          role="presentation"
          className="mainNovelMoreView"
          onClick={() => {
            props.handleFantasyOn();
            props.history.push('/main/fantasy');
          }}
        >
          더보기
        </div>
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
