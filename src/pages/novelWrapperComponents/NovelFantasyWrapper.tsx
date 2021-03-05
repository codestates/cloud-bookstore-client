import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import './NovelWrapperStyle.css';

import FantasyNovelList from './FantasyNovelList';

interface FantasyDataProps extends RouteComponentProps {
  handleAxiosClickedNovelData: (parameter: number) => void;
  handleFantasyOn: () => void;
  fantasyData: {
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
          <FantasyNovelList
            key={data.id}
            fantasyData={data}
            handleAxiosClickedNovelData={props.handleAxiosClickedNovelData}
            history={props.history}
            location={props.location}
            match={props.match}
          />
        ))}
      </div>
    </div>
  );
};

export default NovelFantasyWrapper;
