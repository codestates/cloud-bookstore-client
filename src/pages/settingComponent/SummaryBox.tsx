import React, { useState, useEffect } from 'react';
import { RouteComponentProps, Switch, Route } from 'react-router-dom';
import '../../css/SummaryBox.css';
import DeductionHistory from './DeductionHistory';
import CloudHistory from './CloudHistory';
import axios from 'axios';
import ModalEditNickname from '../modal/ModalEditNickname';

interface summaryProps extends RouteComponentProps {
  nickname: string;
  handleNickname: (nickname: string) => void;
}
interface accumulatedProps {
  date: string;
  cloud: number;
}
interface deductedProps {
  title: { title: string };
  episode: {
    id: number;
    episodeNum: number;
    title: string;
    thumbnail: string;
    cloud: number;
  };
  date: string;
  cloud: number;
}

const SummaryBox: React.FC<summaryProps> = (props: summaryProps) => {
  const [accumulatedHistories, setAccumulatedHistories] = useState([
    {
      date: '',
      cloud: 0,
    },
  ]);
  const [deductedHistories, setDeductedHistories] = useState([
    {
      title: {
        title: '',
      },
      episode: {
        id: 0,
        episodeNum: 0,
        title: '',
        thumbnail: '',
        cloud: 0,
      },
      date: '',
      cloud: 0,
    },
  ]);

  const [nicknameModal, setNicknameModal] = useState<boolean>(false);
  const toggleNicknameModal = () => {
    setNicknameModal(!nicknameModal);
  };

  const handleAccumulatedCloud = (): void => {
    axios
      .get(
        'https://server.cloud-bookstore.com/setting/cloudhistory/accumulation',
      )
      .then((data) => data.data.data)
      .then((data: accumulatedProps[]) => {
        setAccumulatedHistories(data);
      });
  };
  const handleDeductedCloud = (): void => {
    axios
      .get('https://server.cloud-bookstore.com/setting/cloudhistory/deduction')
      .then((data) => data.data.data)
      .then((data: deductedProps[]) => {
        setDeductedHistories(data);
      });
  };

  // 날짜로 filter
  const listAccumulated = (data: accumulatedProps[]) => {
    setAccumulatedHistories(data);
  };
  const listDeducted = (data: deductedProps[]) => {
    setDeductedHistories(data);
  };

  useEffect(() => {
    handleAccumulatedCloud();
    handleDeductedCloud();
  }, []);

  return (
    <>
      {nicknameModal === true ? (
        <ModalEditNickname
          handleNickname={props.handleNickname}
          toggleNicknameModal={toggleNicknameModal}
        />
      ) : (
        <></>
      )}
      <div className="summaryBox">
        <div className="userInfo">
          <div className="userLeftBox">
            <div className="userIcon" />
            <div>
              <div className="nicknameTitle">{props.nickname}</div>
              <div
                role="presentation"
                onClick={toggleNicknameModal}
                className="changeNickname"
              >
                닉네임 변경
              </div>
            </div>
          </div>
          <div className="userRightBox">
            <div className="totalAccumulated">
              <div
                role="presentation"
                className="totalCloudTitle"
                onClick={() => {
                  handleAccumulatedCloud();
                  props.history.push('/main/setting/deduction');
                }}
              >
                구름 사용내역
              </div>
              <div className="cloudBox">
                <div className="cloudNum">
                  {deductedHistories.reduce((acc, cur) => acc + cur.cloud, 0)}
                </div>
                <div className="cloudSVG" />
              </div>
            </div>
            <div>
              <div
                role="presentation"
                className="totalCloudTitle"
                onClick={() => {
                  handleDeductedCloud();
                  props.history.push('/main/setting');
                }}
              >
                구름 적립내역
              </div>
              <div className="cloudBox">
                <div className="cloudNum">
                  +
                  {accumulatedHistories.reduce(
                    (acc, cur) => acc + cur.cloud,
                    0,
                  )}
                </div>
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
