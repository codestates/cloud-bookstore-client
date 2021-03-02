/*eslint-disable*/
import React, { useState } from 'react';
import '../css/Setting.css';
import ModalCalendar from 'react-calendar';
import '../css/Calendar.css';
// import moment from 'moment';

const UserNav: React.FC = () => {
  const [calendarModal, setCalendarModal] = useState<boolean>(false);
  const toggleCalendarModal = () => {
    setCalendarModal(!calendarModal);
  };

  // const onDateChange = (date: string) => {
  //   const dates: string = moment(date).format('YYYY-MM-DD');
  //   console.log(dates);
  //   // axios.post('https://server.kudapach.com/grouptodocard/calendar', {
  //   //   date: d,
  //   // });
  // };

  return (
    <div className="settingWrapper">
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
              <div className="totalCloudTitle">구름 사용내역</div>
              <div className="cloudBox">
                <div className="cloudNum">-0</div>
                <div className="cloudSVG" />
              </div>
            </div>
            <div>
              <div className="totalCloudTitle">구름 적립내역</div>
              <div className="cloudBox">
                <div className="cloudNum">+0</div>
                <div className="cloudSVG" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cloudHistory">
        <div className="cloudLists">
          <div className="cloudHistoryTitle">구름적립 내역</div>
          <div
            role="presentation"
            className="calendarBtn"
            onClick={toggleCalendarModal}
            onKeyPress={toggleCalendarModal}
          >
            날짜를 선택해주세요
          </div>
          {calendarModal === true ? <ModalCalendar /> : <></>}
        </div>
        <div className="cloudHistoryLists">
          <div className="leftSideDetails">
            <div className="accumulation">적립</div>
            <div>
              <div className="cloudDate">2021.02.09</div>
              <div className="cloudInfo">로그인 적립</div>
            </div>
          </div>
          <div className="cloudCounts">
            <div className="plusCount">+ 3</div>
            <div className="blueCloud" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserNav;
