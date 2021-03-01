/* eslint-disable */

import React, { useState } from 'react';
import '../css/UserNav.css';
//import { Link } from 'react-router-dom';

import LoginModal from './modal/LoginModal';

interface mainPageProps {
  isLogin: boolean;
  toggleLogin: () => void;
  nickname: string;
  handleNickname: (nickname: string) => void;
}

const UserNav: React.FC<mainPageProps> = (props: mainPageProps) => {
  const [loginModal, setLoginModal] = useState<boolean>(true);
  const handleLoginModalOn = (): void => {
    setLoginModal(!loginModal);
  };

  return (
    <div className="WholeUserNav">
      <div className="userNavGreyUnderLine">
        <div className="UserNavInnerWrapper">
          <a href="https://cloud-bookstore.com/mainpage">
            <div className="userNavLogo" />
          </a>
          <div
            className="loginBtn"
            role="presentation"
            onClick={handleLoginModalOn}
          >
            로그인
          </div>
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
