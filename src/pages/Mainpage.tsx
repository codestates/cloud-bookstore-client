/* eslint-disable */

import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import '../css/Mainpage.css';
import axios from 'axios';

import UserNav from './UserNav';
import CategoryNav from './CategoryNav';
import Footer from './Footer';
import Home from './Home';
import Mypage from './Mypage';

// 가짜 데이터용
import fakeData from '../asset/fakeData/fakeData';

const Mainpage: React.FC = () => {
  let novelData = {};
  useEffect(() => {
    axios.get('https://server.cloud-bookstore.com/novels').then((res) => {
      novelData = res;
    });
  });
  console.log(novelData);

  const [isCategoryOn, setIsCategoryOn] = useState<string>('home');
  const handleHomeOn = (): void => {
    setIsCategoryOn('home');
  };
  const handleFantasyOn = (): void => {
    setIsCategoryOn('fantasy');
  };
  const handleMartialartOn = (): void => {
    setIsCategoryOn('martialart');
  };
  const handleRomanceOn = (): void => {
    setIsCategoryOn('romance');
  };
  const handleMyOn = (): void => {
    setIsCategoryOn('my');
  };

  return (
    <div>
      <div className="wholeMainPageWrapper">
        <UserNav />
        <CategoryNav
          isCategoryOn={isCategoryOn}
          handleHomeOn={handleHomeOn}
          handleFantasyOn={handleFantasyOn}
          handleMartialartOn={handleMartialartOn}
          handleRomanceOn={handleRomanceOn}
          handleMyOn={handleMyOn}
        />
        {isCategoryOn === 'home' ? (
          <Home novelData={fakeData} />
        ) : isCategoryOn === 'my' ? (
          <Mypage />
        ) : (
          <Home novelData={fakeData} />
        )}
      </div>
      <Footer />
    </div>
  );
};

export default withRouter(Mainpage);
