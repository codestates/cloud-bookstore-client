import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import './HistoryNovel.css';
import HistoryNovelList from '../myCategoryComponents/myWrapperComponents/HistoryNovelList';

interface userHistoriesDataProps extends RouteComponentProps {
  userHistoriesData: {
    novels: {
      title: string;
      complete: boolean;
      thumbnail: string;
      updatedAt: string;
    };
    episodes: {
      id: number;
      episodeNum: number;
      cloud: number;
      thumbnail: string;
      title: string;
    };
  }[];
}

const HistoryNovel: React.FC<userHistoriesDataProps> = (
  props: userHistoriesDataProps,
) => {
  return (
    <div className="wholeHistoryNovelWrapper">
      <div className="historyNovelInnerWrapper">
        {props.userHistoriesData.length === 0 ? (
          <></>
        ) : (
          props.userHistoriesData.map((ele) => (
            <HistoryNovelList key={ele.episodes.id} userHistories={ele} />
          ))
        )}
      </div>
    </div>
  );
};

export default withRouter(HistoryNovel);
