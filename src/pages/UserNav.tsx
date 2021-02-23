import React from 'react';
import '../css/UserNav.css';

const UserNav: React.FC = () => {
  return (
    <div className="WholeUserNav">
      <div className="UserNavInnerWrapper">
        <a href="https://cloud-bookstore.com/mainpage">
          <div className="userNavLogo" />
        </a>
        <div className="loginBtn">로그인</div>
      </div>
    </div>
  );
};

export default UserNav;
