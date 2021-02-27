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

const Mainpage: React.FC = () => {
  // initialState가 존재하지 않으면 props로 내려주었을 때,
  // state가 존재하지 않아 type error가 발생하여 interface를
  // 작성할 수 없으므로 가짜 Data를 initialState로 넣음.
  // 어차피 rendering 되자마자 덮어씌워 없어질 data임.
  const [novelData, setNovelData] = useState({
    ranking: [
      {
        id: 1,
        title: '완벽한 그녀의 반전',
        author: '코드스테이츠',
        cloud: 2000,
        userLike: 100,
        thumbnail:
          'https://user-images.githubusercontent.com/72306693/108985620-99c68280-76d4-11eb-9305-50ef35e77c93.png',
        complete: false,
        createdAt: '2021-02-24T00:00:00.925Z',
        updatedAt: '2021-02-26T00:00:00.925Z',
      },
    ],
    fantasy: [
      {
        id: 1,
        title: '플레이어스',
        author: '코드스테이츠',
        cloud: 2000,
        userLike: 100,
        thumbnail:
          'https://user-images.githubusercontent.com/72306693/108984040-d6917a00-76d2-11eb-8d17-afbf800fba3d.png',
        complete: true,
        createdAt: '2021-02-24T00:00:00.925Z',
        updatedAt: '2021-02-24T00:00:00.925Z',
      },
    ],
    martialArts: [
      {
        id: 1,
        title: '천상:강희 다시 태어나다',
        author: '코드스테이츠',
        cloud: 2000,
        userLike: 100,
        thumbnail:
          'https://user-images.githubusercontent.com/72306693/108984040-d6917a00-76d2-11eb-8d17-afbf800fba3d.png',
        complete: false,
        createdAt: '2021-02-24T00:00:00.925Z',
        updatedAt: '2021-02-24T00:00:00.925Z',
      },
    ],
    romance: [
      {
        id: 1,
        title: '선배 이것 좀 도와주세요',
        author: '코드스테이츠',
        cloud: 2000,
        userLike: 100,
        thumbnail:
          'https://user-images.githubusercontent.com/72306693/108984040-d6917a00-76d2-11eb-8d17-afbf800fba3d.png',
        complete: false,
        createdAt: '2021-02-24T00:00:00.925Z',
        updatedAt: '2021-02-24T00:00:00.925Z',
      },
    ],
  });

  useEffect(() => {
    axios.get('https://server.cloud-bookstore.com/novels').then((res) => {
      setNovelData(res.data);
    });
  }, []);

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
          <Home novelData={novelData} />
        ) : isCategoryOn === 'my' ? (
          <Mypage />
        ) : (
          <Home novelData={novelData} />
        )}
      </div>
      <Footer />
    </div>
  );
};

export default withRouter(Mainpage);
