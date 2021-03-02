import React, { useState } from 'react';

import ModalCalendar from 'react-calendar';
import '../../css/Calendar.css';
// import moment from 'moment';
import '../../css/CloudHistory.css';

const DeductionHistory: React.FC = () => {
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
    <div className="cloudHistory">
      <div className="cloudLists">
        <div className="cloudHistoryTitle">구름사용 내역</div>
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
  );
};

export default DeductionHistory;
