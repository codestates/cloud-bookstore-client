import React from 'react';
import '../css/UserNav.css';
import { RouteComponentProps } from 'react-router-dom';
import LoginModal from './modal/LoginModal';
import axios from 'axios';

interface userNavProps extends RouteComponentProps {
  handleHomeOn: () => void;
  isLogin: boolean;
  toggleLogin: () => void;
  nickname: string;
  handleNickname: (nickname: string) => void;
  handleLoginModalOn: () => void;
  loginModal: boolean;
}

const UserNav: React.FC<userNavProps> = (props: userNavProps) => {
  const handleSetting = (): void => {
    props.history.push('/main/setting');
  };

  const handleLogout = (): void => {
    axios
      .get('https://server.cloud-bookstore.com/logout')
      .then(() => props.toggleLogin())
      .then(() => props.history.push('/main/home'));
  };

  return (
    <div className="WholeUserNav">
      <div className="userNavGreyUnderLine">
        <div className="UserNavInnerWrapper">
          <div
            role="presentation"
            className="userNavLogo"
            onClick={() => {
              props.handleHomeOn();
              props.history.push('/main/home');
            }}
          />
          {props.isLogin ? (
            <div className="guestDetails">
              <div
                className="nickname"
                role="presentation"
                onClick={handleSetting}
                onKeyPress={handleSetting}
              >
                {props.nickname} 님
              </div>
              <div
                className="logOut"
                role="presentation"
                onClick={handleLogout}
                onKeyPress={handleLogout}
              >
                로그아웃
              </div>
            </div>
          ) : (
            <div
              className="loginBtn"
              role="presentation"
              onClick={props.handleLoginModalOn}
            >
              로그인
            </div>
          )}
        </div>
      </div>
      {props.loginModal ? (
        <LoginModal
          isLogin={props.isLogin}
          toggleLogin={props.toggleLogin}
          nickname={props.nickname}
          handleNickname={props.handleNickname}
          handleLoginModalOn={props.handleLoginModalOn}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default UserNav;
