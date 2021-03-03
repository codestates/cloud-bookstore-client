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
  return (
    <>
      {!props.accumulatedData ? (
        <div className="emptyCloudList">해당 내역이 없습니다.</div>
      ) : props.accumulatedData.cloud === 10 ? (
        <div className="cloudHistoryLists">
          <div className="leftSideDetails">
            <div className="accumulation">적립</div>
            <div>
              <div className="cloudDate">
                {props.accumulatedData.date.slice(0, 10)}
              </div>
              <div className="cloudInfo">회원가입 적립</div>
            </div>
          </div>
          <div className="cloudCounts">
            <div className="plusCount">+ {props.accumulatedData.cloud}</div>
            <div className="blueCloud" />
          </div>
        </div>
      ) : (
        <div className="cloudHistoryLists">
          <div className="leftSideDetails">
            <div className="accumulation">적립</div>
            <div>
              <div className="cloudDate">
                {props.accumulatedData.date.slice(0, 10)}
              </div>
              <div className="cloudInfo">로그인 적립</div>
            </div>
          </div>
          <div className="cloudCounts">
            <div className="plusCount">+ {props.accumulatedData.cloud}</div>
            <div className="blueCloud" />
          </div>
        </div>
      )}
    </>
  );
};

export default AccumulatedLists;
