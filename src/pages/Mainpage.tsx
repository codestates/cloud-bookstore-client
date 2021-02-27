/* eslint-disable */

import React, { useState, useEffect } from 'react';
import {
  withRouter,
  BrowserRouter,
  Link,
  Route,
  Switch,
} from 'react-router-dom';
import '../css/Mainpage.css';
import '../css/CategoryNav.css';
import { MdSearch } from 'react-icons/md';
import axios from 'axios';

import UserNav from './UserNav';
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
    setIsCategoryOn('martialArt');
  };
  const handleRomanceOn = (): void => {
    setIsCategoryOn('romance');
  };
  const handleMyOn = (): void => {
    setIsCategoryOn('mypage');
  };

  return (
    <BrowserRouter>
      <div>
        <div className="wholeMainPageWrapper">
          <UserNav />
          <nav>
            <div className="wholeCategoryNav">
              <div className="categoryNavInnerWrapper">
                <div className="categoryNavWrapper">
                  <Link
                    to="/home"
                    role="button"
                    id={isCategoryOn === 'home' ? 'categoryOn' : ''}
                    className="categoryBtn"
                    onClick={handleHomeOn}
                  >
                    홈
                  </Link>
                  <Link
                    to="/fantasy"
                    role="button"
                    id={isCategoryOn === 'fantasy' ? 'categoryOn' : ''}
                    className="categoryBtn"
                    onClick={handleFantasyOn}
                  >
                    판타지
                  </Link>
                  <Link
                    to="/martialArt"
                    role="button"
                    id={isCategoryOn === 'martialArt' ? 'categoryOn' : ''}
                    className="categoryBtn"
                    onClick={handleMartialartOn}
                  >
                    무협
                  </Link>
                  <Link
                    to="/romance"
                    role="button"
                    id={isCategoryOn === 'romance' ? 'categoryOn' : ''}
                    className="categoryBtn"
                    onClick={handleRomanceOn}
                  >
                    로맨스
                  </Link>
                  <Link
                    to="/mypage/recentNovelList"
                    role="button"
                    id={isCategoryOn === 'mypage' ? 'categoryOn' : ''}
                    className="categoryBtn"
                    onClick={handleMyOn}
                  >
                    MY
                  </Link>
                </div>
                <form
                  className="navSearchWrapper"
                  name="google_search"
                  method="get"
                  action="https://www.google.co.kr/search"
                >
                  <input
                    type="text"
                    className="navSearchBox"
                    placeholder="검색해주세요."
                  ></input>
                  <div className="navSearchBtn">
                    <MdSearch />
                  </div>
                </form>
              </div>
            </div>
          </nav>
          <Switch>
            <Route path="/home">
              <Home novelData={fakeData} />
            </Route>
            <Route path="/mypage/recentNovelList">
              <Mypage />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default withRouter(Mainpage);
