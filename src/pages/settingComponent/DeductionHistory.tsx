import React, { useState } from 'react';
import ModalCalendar from 'react-calendar';
import '../../css/Calendar.css';
import moment from 'moment';
import '../../css/CloudHistory.css';
import '../../css/DeductionHistory.css';
import axios from 'axios';

interface deductedProps {
  deductedHistories: {
    title: { title: string };
    episode: { id: number; title: string };
    date: string;
    cloud: number;
  }[];
  listDeducted: (
    // eslint-disable-next-line no-unused-vars
    data: [
      {
        title: { title: string };
        episode: { id: number; title: string };
        date: string;
        cloud: number;
      },
    ],
  ) => void;
}

const DeductionHistory: React.FC<deductedProps> = (props: deductedProps) => {
  const [calendarModal, setCalendarModal] = useState<boolean>(false);
  const toggleCalendarModal = () => {
    setCalendarModal(!calendarModal);
  };

  const onDateChange = (date: any) => {
    // eslint-disable-next-line no-console
    console.log(typeof date); // 확인해서 any 부분 수정!
    const dates: string = moment(date).format('YYYY-MM-DD');
    axios
      .get(
        `https://server.cloud-bookstore.com/setting/cloudhistory/deduction/calendar/${dates}`,
      )
      .then((data) => data.data.data)
      .then((data) => props.listDeducted(data));
  };

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
        {calendarModal === true ? (
          <ModalCalendar onChange={onDateChange} />
        ) : (
          <></>
        )}
      </div>
      {props.deductedHistories.map((data) => {
        <div className="cloudHistoryLists">
          <div className="leftSideDetails">
            <div className="deduction">사용</div>
            <div>
              <div className="cloudDate">{data.date.slice(0, 10)}</div>
              <div className="cloudInfo">{data.title}</div>
            </div>
          </div>
          <div className="cloudCounts">
            <div className="minusCount">- {data.cloud}</div>
            <div className="orangeCloud" />
          </div>
        </div>;
      })}
    </div>
  );
};

export default DeductionHistory;
