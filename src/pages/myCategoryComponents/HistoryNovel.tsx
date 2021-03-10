import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import './HistoryNovel.css';
import HistoryNovelList from '../myCategoryComponents/myWrapperComponents/HistoryNovelList';

interface userHistoriesDataProps extends RouteComponentProps {
  handleAxiosClickedNovelData: (data: number) => void;
  userHistoriesData: {
    novels: {
      id: number;
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
      {props.userHistoriesData.length === 0 ? (
        <div className="emtyBox">
          <div className="boxGrid">
            <div className="emptyTitle">최근 본 작품이 없습니다</div>
          </div>
        </div>
      ) : (
        <div className="historyNovelInnerWrapper">
          {props.userHistoriesData.map((ele) => (
            <HistoryNovelList
              key={ele.episodes.id}
              userHistories={ele}
              handleAxiosClickedNovelData={props.handleAxiosClickedNovelData}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default withRouter(HistoryNovel);
