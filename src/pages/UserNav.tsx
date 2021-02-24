import React, { useState } from 'react';
import '../css/UserNav.css';

import LoginModal from './modal/LoginModal';

const UserNav: React.FC = () => {
  const [loginModal, setLoginModal] = useState<boolean>(false);
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
