/*eslint-disable*/
import React, { useState } from 'react';
import '../css/UserNav.css';
import { RouteComponentProps } from 'react-router-dom';
import LoginModal from './modal/LoginModal';

interface userNavProps extends RouteComponentProps {
  isLogin: boolean;
  toggleLogin: () => void;
  nickname: string;
  handleNickname: (nickname: string) => void;
}

const UserNav: React.FC<userNavProps> = (props: userNavProps) => {
  const [loginModal, setLoginModal] = useState<boolean>(false);
  const handleLoginModalOn = (): void => {
    setLoginModal(!loginModal);
  };
  const handleSetting = (): void => {
    props.history.push('/main/setting');
  };
  return (
    <div className="WholeUserNav">
      <div className="userNavGreyUnderLine">
        <div className="UserNavInnerWrapper">
          <a href="https://cloud-bookstore.com/mainpage">
            <div className="userNavLogo" />
          </a>
          {props.isLogin ? (
            <div
              className="nickname"
              role="button"
              onClick={handleSetting}
              onKeyPress={handleSetting}
            >
              {props.nickname} 님
            </div>
          ) : (
            <div
              className="loginBtn"
              role="presentation"
              onClick={handleLoginModalOn}
            >
              로그인
            </div>
          )}
        </div>
      </div>
      {loginModal ? (
        <LoginModal handleLoginModalOn={handleLoginModalOn} />
      ) : (
        <></>
      )}
    </div>
  );
};

export default UserNav;
