import React, { useState } from 'react';
import ModalCalendar from 'react-calendar';
import '../../css/Calendar.css';
import moment from 'moment';
import '../../css/CloudHistory.css';
import axios from 'axios';
import AccumulatedLists from './AccumulatedLists';

interface cloudHistoryProps {
  accumulatedHistories: {
    date: string;
    cloud: number;
  }[];
  listAccumulated: (
    data: [
      {
        date: string;
        cloud: number;
      },
    ],
  ) => void;
}

const CloudHistory: React.FC<cloudHistoryProps> = (
  props: cloudHistoryProps,
) => {
  const [calendarModal, setCalendarModal] = useState<boolean>(false);
  const toggleCalendarModal = () => {
    setCalendarModal(!calendarModal);
  };

  const onDateChange = (date: any) => {
    const dates: string = moment(date).format('YYYY-MM-DD');
    axios
      .get(
        `https://server.cloud-bookstore.com/setting/cloudhistory/accumulation/calendar/${dates}`,
      )
      .then((data) => data.data.data)
      .then((data) => props.listAccumulated(data));
  };

  return (
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
        {calendarModal === true ? (
          <ModalCalendar onChange={onDateChange} />
        ) : (
          <></>
        )}
      </div>
      {props.accumulatedHistories.length === 0 ? (
        <div className="emptyCloudList">해당 내역이 없습니다.</div>
      ) : (
        props.accumulatedHistories.map((data, i) => (
          <AccumulatedLists key={i} accumulatedData={data} />
        ))
      )}
    </div>
  );
};

export default CloudHistory;
