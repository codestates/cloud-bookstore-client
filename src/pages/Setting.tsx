import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import '../css/Setting.css';
import SummaryBox from './settingComponent/SummaryBox';

interface settingProps extends RouteComponentProps {
  nickname: string;
}
const UserNav: React.FC<settingProps> = (props: settingProps) => {
  return (
    <div className="settingWrapper">
      <SummaryBox
        nickname={props.nickname}
        history={props.history}
        location={props.location}
        match={props.match}
      />
    </div>
  );
};

export default UserNav;
