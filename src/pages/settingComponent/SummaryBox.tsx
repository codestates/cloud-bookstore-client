import React from 'react';
import { RouteComponentProps, Switch, Route } from 'react-router-dom';
import '../../css/SummaryBox.css';
import DeductionHistory from './DeductionHistory';
import CloudHistory from './CloudHistory';

const SummaryBox: React.FC<RouteComponentProps> = (
  props: RouteComponentProps,
) => {
  return (
    <>
      <div className="summaryBox">
        <div className="userInfo">
          <div className="userLeftBox">
            <div className="userIcon" />
            <div>
              <div className="nicknameTitle">props로 받은 닉네임</div>
              <div className="changeNickname">닉네임 변경</div>
            </div>
          </div>
          <div className="userRightBox">
            <div className="totalAccumulated">
              <div
                role="presentation"
                className="totalCloudTitle"
                onClick={() => props.history.push('/main/setting/deduction')}
              >
                구름 사용내역
              </div>
              <div className="cloudBox">
                <div className="cloudNum">-0</div>
                <div className="cloudSVG" />
              </div>
            </div>
            <div>
              <div
                role="presentation"
                className="totalCloudTitle"
                onClick={() => props.history.push('/main/setting')}
              >
                구름 적립내역
              </div>
              <div className="cloudBox">
                <div className="cloudNum">+0</div>
                <div className="cloudSVG" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Switch>
        <Route path="/main/setting" render={() => <CloudHistory />} />
        <Route
          path="/main/setting/deduction"
          render={() => <DeductionHistory />}
        />
      </Switch>
    </>
  );
};

export default SummaryBox;
