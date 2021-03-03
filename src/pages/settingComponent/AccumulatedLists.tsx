import React from 'react';
import '../../css/CloudHistory.css';

interface accumulatedProps {
  accumulatedData: {
    date: string;
    cloud: number;
  };
}
const AccumulatedLists: React.FC<accumulatedProps> = (
  props: accumulatedProps,
) => {
  // eslint-disable-next-line no-console
  console.log(props.accumulatedData);
  return (
    <div className="cloudHistoryLists">
      <div className="leftSideDetails">
        <div className="accumulation">적립</div>
        <div>
          <div className="cloudDate">{props.accumulatedData.date}</div>
          <div className="cloudInfo">로그인 적립</div>
        </div>
      </div>
      <div className="cloudCounts">
        <div className="plusCount">+ {props.accumulatedData.cloud}</div>
        <div className="blueCloud" />
      </div>
    </div>
  );
};

export default AccumulatedLists;
