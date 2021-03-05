import React from 'react';
// import { RouteComponentProps } from 'react-router-dom';
import './LastUserHIstoryComponents/LastUserHistory.css';
import LastUserHistoryDetail from './LastUserHIstoryComponents/LastUserHistoryDetail';

// interface lastUserHistoryProps extends RouteComponentProps {
//   handleFantasyOn: () => void;
//   userHistory: {
//     id: number;
//     episodeNum: number;
//     title: string;
//     thumbnail: string;
//     cloud: number;
//     userHistory_novelEpisodeId: number;
//     userHistory_updated_at: string;
//   };
//   novelData: {
//     complete: boolean;
//   };
//}

const LastUserHistory: React.FC = () => {
  return (
    <>
      <div className="lastUserHistoryWrapper">
        <div className="lastUserHistoryTitle">마지막으로 읽은 회차</div>
        <LastUserHistoryDetail
        // userHistory={props.userHistory}
        // novelData={props.novelData}
        />
      </div>
    </>
  );
};

export default LastUserHistory;