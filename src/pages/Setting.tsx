/*eslint-disable*/
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import '../css/Setting.css';
// import CloudHistory from './settingComponent/CloudHistory';
import SummaryBox from './settingComponent/SummaryBox';
// import DeductionHistory from './settingComponent/DeductionHistory';

const UserNav: React.FC<RouteComponentProps> = (props: RouteComponentProps) => {
  return (
    <div className="settingWrapper">
      <SummaryBox
        history={props.history}
        location={props.location}
        match={props.match}
      />
    </div>
  );
};

export default UserNav;
