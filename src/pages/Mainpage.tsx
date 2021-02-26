/* eslint-disable */

import React, { useEffect } from 'react';
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
  let novelData: object = {};
  useEffect(() => {
    axios.get('https://server.cloud-bookstore.com/novels').then((res) => {
      novelData = res;
    });
  });
  console.log(novelData);

  return (
    <div>
      <div className="wholeMainPageWrapper">
        <UserNav />
        <CategoryNav />
        <Home novelData={fakeData} />
        <Mypage />
      </div>
      <Footer />
    </div>
  );
};

export default withRouter(Mainpage);
