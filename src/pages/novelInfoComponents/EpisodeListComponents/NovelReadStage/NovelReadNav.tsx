import React from 'react';
import './NovelReadNav.css';
import { RouteComponentProps } from 'react-router-dom';

type NovelReadNavProps = RouteComponentProps;

const UserNav: React.FC<NovelReadNavProps> = (props: NovelReadNavProps) => {
  return (
    <div className="WholeUserNav">
      <div className="userNavGreyUnderLine">
        <div className="UserNavInnerWrapper">
          <div
            role="presentation"
            className="userNavLogo"
            onClick={() => {
              props.history.push('/main/home');
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default UserNav;
