import React, { useState, useEffect } from 'react';
import { RouteComponentProps, Switch, Route } from 'react-router-dom';
import '../../css/SummaryBox.css';
import DeductionHistory from './DeductionHistory';
import CloudHistory from './CloudHistory';
import axios from 'axios';

interface summaryProps extends RouteComponentProps {
  nickname: string;
}
interface accumulatedProps {
  date: string;
  cloud: number;
}
interface deductedProps {
  title: { title: string };
  episode: { id: number; title: string };
  date: string;
  cloud: number;
}

const SummaryBox: React.FC<summaryProps> = (props: summaryProps) => {
  const [accumulatedClouds, setAccumulatedClouds] = useState<number>(0);
  const [deductedClouds, setDeductedClouds] = useState<number>(0);

  const [accumulatedHistories, setAccumulatedHistories] = useState([
    {
      date: '2021-02-27T13:15:10.779Z',
      cloud: 3,
    },
  ]);
  const [deductedHistories, setDeductedHistories] = useState([
    {
      title: {
        title: '잊지마 4시1분',
      },
      episode: {
        id: 1,
        title: '어느 좋은 날',
      },
      date: '2021-02-26T10:22:50.676Z',
      cloud: -1,
    },
  ]);

  const handleAccumulatedCloud = axios
    .get('https://server.cloud-bookstore.com/setting/cloudhistory/accumulation')
    .then((data) => data.data.data)
    .then((data: accumulatedProps[]) => {
      // eslint-disable-next-line no-console
      console.log(data);
      setAccumulatedHistories(data);
      setAccumulatedClouds(data.reduce((acc, cur) => acc + cur.cloud, 0));
    });
  const handleDeductedCloud = axios
    .get('https://server.cloud-bookstore.com/setting/cloudhistory/deduction')
    .then((data) => data.data.data)
    .then((data: deductedProps[]) => {
      // eslint-disable-next-line no-console
      console.log(data);
      setDeductedHistories(data);
      setDeductedClouds(data.reduce((acc, cur) => acc + cur.cloud, 0));
    });

  // 날짜로 filter
  const listAccumulated = (data: accumulatedProps[]) => {
    setAccumulatedHistories(data);
  };
  const listDeducted = (data: deductedProps[]) => {
    setDeductedHistories(data);
  };

  useEffect(() => {
    handleAccumulatedCloud;
    handleDeductedCloud;
  }, [accumulatedHistories, deductedHistories]);

  return (
    <>
      <div className="summaryBox">
        <div className="userInfo">
          <div className="userLeftBox">
            <div className="userIcon" />
            <div>
              <div className="nicknameTitle">{props.nickname}</div>
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
                <div className="cloudNum">{deductedClouds}</div>
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
                <div className="cloudNum">+{accumulatedClouds}</div>
                <div className="cloudSVG" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Switch>
        <Route
          path="/main/setting"
          render={() => (
            <CloudHistory
              accumulatedHistories={accumulatedHistories}
              listAccumulated={listAccumulated}
            />
          )}
          exact={true}
        />
        <Route
          path="/main/setting/deduction"
          render={() => (
            <DeductionHistory
              deductedHistories={deductedHistories}
              listDeducted={listDeducted}
            />
          )}
          exact={true}
        />
      </Switch>
    </>
  );
};

export default SummaryBox;
