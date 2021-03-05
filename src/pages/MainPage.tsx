/* eslint-disable */

import React, { useState, useEffect } from 'react';
import {
  RouteComponentProps,
  withRouter,
  Route,
  Switch,
} from 'react-router-dom';
import axios from 'axios';
import '../css/MainPage.css';
import '../css/CategoryNav.css';
import { MdSearch } from 'react-icons/md';
import UserNav from './UserNav';
import Footer from './Footer';
import Home from './Home';
import FantasyCategory from './mainCategoryComponents/fantasyCategoryComponents/FantasyCategory';
import MartialArtsCategory from './mainCategoryComponents/martialArtsCategoryComponents/MartialArtsCategory';
import RomanceCategory from './mainCategoryComponents/romanceCategoryComponents/RomanceCategory';
import Mypage from './Mypage';
import HistoryNovel from './myCategoryComponents/HistoryNovel';
import Setting from './Setting';
import NovelInfo from './NovelInfo';

interface mainPageProps extends RouteComponentProps {
  isLogin: boolean;
  toggleLogin: () => void;
  nickname: string;
  handleNickname: (nickname: string) => void;
  novelData: {
    ranking: {
      id: number;
      title: string;
      author: string;
      category: number;
      description: string;
      cloud: number;
      userLike: number;
      episodeCount: number;
      complete: boolean;
      thumbnail: string;
      createdAt: string;
      updatedAt: string;
    }[];
    fantasy: {
      id: number;
      title: string;
      author: string;
      category: number;
      description: string;
      cloud: number;
      userLike: number;
      episodeCount: number;
      complete: boolean;
      thumbnail: string;
      createdAt: string;
      updatedAt: string;
    }[];
    martialArts: {
      id: number;
      title: string;
      author: string;
      category: number;
      description: string;
      cloud: number;
      userLike: number;
      episodeCount: number;
      complete: boolean;
      thumbnail: string;
      createdAt: string;
      updatedAt: string;
    }[];
    romance: {
      id: number;
      title: string;
      author: string;
      category: number;
      description: string;
      cloud: number;
      userLike: number;
      episodeCount: number;
      complete: boolean;
      thumbnail: string;
      createdAt: string;
      updatedAt: string;
    }[];
  };
}

const MainPage: React.FC<mainPageProps> = (props: mainPageProps) => {
  const [isCategoryOn, setIsCategoryOn] = useState<string>('/main/home');
  const handleHomeOn = (): void => {
    setIsCategoryOn('/main/home');
  };
  const handleFantasyOn = (): void => {
    setIsCategoryOn('fantasy');
  };
  const handleMartialArtOn = (): void => {
    setIsCategoryOn('martialArt');
  };
  const handleRomanceOn = (): void => {
    setIsCategoryOn('romance');
  };
  const handleMyOn = (): void => {
    setIsCategoryOn('/main/mypage/recentNovelList');
  };

  // ! Fantasy novel Data - axios get
  const [fantasyNovelData, setFantasyNovelData] = useState({
    data: [
      {
        id: 1,
        title: '잊지마 4시1분',
        author: '투투니깐 200원 줘',
        category: 3,
        description:
          '새침하게 흐린 품이 눈이 올 듯하더니 눈은 아니 오고 얼다가 만 비가 추적추적 내리는 날이었다.\r\n\n이날이야말로 동소문 안에서 인력거꾼 노릇을 하는 김첨지에게는 오래간만에도 닥친 운수 좋은 날...',
        cloud: 0,
        userLike: 0,
        episodeCount: 5,
        complete: false,
        thumbnail:
          'https://user-images.githubusercontent.com/72306693/108985620-99c68280-76d4-11eb-9305-50ef35e77c93.png',
        createdAt: '2021-02-24T21:20:11.925Z',
        updatedAt: '2021-02-25T00:17:06.955Z',
      },
    ],
  });
  const handleAxiosFantasy = () => {
    axios.get('https://server.cloud-bookstore.com/category/1').then((res) => {
      setFantasyNovelData(res.data);
    });
  };
  // ! MartialArts novel Data - axios get
  const [martialArtsNovelData, setmartialArtsNovelData] = useState({
    data: [
      {
        id: 1,
        title: '잊지마 4시1분',
        author: '투투니깐 200원 줘',
        category: 3,
        description:
          '새침하게 흐린 품이 눈이 올 듯하더니 눈은 아니 오고 얼다가 만 비가 추적추적 내리는 날이었다.\r\n\n이날이야말로 동소문 안에서 인력거꾼 노릇을 하는 김첨지에게는 오래간만에도 닥친 운수 좋은 날...',
        cloud: 0,
        userLike: 0,
        episodeCount: 5,
        complete: false,
        thumbnail:
          'https://user-images.githubusercontent.com/72306693/108985620-99c68280-76d4-11eb-9305-50ef35e77c93.png',
        createdAt: '2021-02-24T21:20:11.925Z',
        updatedAt: '2021-02-25T00:17:06.955Z',
      },
    ],
  });
  const handleAxiosMartialArts = () => {
    axios.get('https://server.cloud-bookstore.com/category/2').then((res) => {
      setmartialArtsNovelData(res.data);
    });
  };
  // ! Romance novel Data - axios get
  const [romanceNovelData, setRomanceNovelData] = useState({
    data: [
      {
        id: 1,
        title: '잊지마 4시1분',
        author: '투투니깐 200원 줘',
        category: 3,
        description:
          '새침하게 흐린 품이 눈이 올 듯하더니 눈은 아니 오고 얼다가 만 비가 추적추적 내리는 날이었다.\r\n\n이날이야말로 동소문 안에서 인력거꾼 노릇을 하는 김첨지에게는 오래간만에도 닥친 운수 좋은 날...',
        cloud: 0,
        userLike: 0,
        episodeCount: 5,
        complete: false,
        thumbnail:
          'https://user-images.githubusercontent.com/72306693/108985620-99c68280-76d4-11eb-9305-50ef35e77c93.png',
        createdAt: '2021-02-24T21:20:11.925Z',
        updatedAt: '2021-02-25T00:17:06.955Z',
      },
    ],
  });
  const handleAxiosRomance = () => {
    axios.get('https://server.cloud-bookstore.com/category/3').then((res) => {
      setRomanceNovelData(res.data);
    });
  };
  // ! My page Data - axios get
  const [myPageData, setMyPageData] = useState({
    userHistories: [
      {
        novels: {
          title: '잊지마 4시1분',
          complete: false,
          thumbnail: '',
          updatedAt: '2021-02-26T02:55:20.000Z',
        },
        episodes: {
          id: 3,
          episodeNum: 2,
          title: '이런 날이...',
        },
      },
    ],
    userLikes: [
      {
        id: 1,
        title: '잊지마 4시1분',
        author: 'Daniel',
        category: 3,
        description:
          '새침하게 흐린 품이 눈이 올 듯하더니 눈은 아니 오고 얼다가 만 비가 추적추적 내리는 날이었다.\r\n\n이날이야말로 동소문 안에서 인력거꾼 노릇을 하는 김첨지에게는 오래간만에도 닥친 운수 좋은 날...',
        cloud: 1,
        userLike: 9,
        episodeCount: 0,
        complete: false,
        thumbnail: '',
        createdAt: '2021-02-24T21:20:11.925Z',
        updatedAt: '2021-02-26T02:55:20.000Z',
      },
    ],
    userWorks: [
      {
        id: 34,
        title: '나의 님',
        author: 'chris',
        category: 3,
        description: '그를 본 순간, 나는 느꼈다...',
        cloud: 0,
        userLike: 0,
        episodeCount: 0,
        complete: false,
        thumbnail: '',
        createdAt: '2021-02-26T13:54:55.252Z',
        updatedAt: '2021-02-26T13:54:55.252Z',
      },
      {
        id: 34,
        title: '나의 님',
        author: 'chris',
        category: 3,
        description: '그를 본 순간, 나는 느꼈다...',
        cloud: 0,
        userLike: 0,
        episodeCount: 0,
        complete: false,
        thumbnail: '',
        createdAt: '2021-02-26T13:54:55.252Z',
        updatedAt: '2021-02-26T13:54:55.252Z',
      },
      {
        id: 34,
        title: '나의 님',
        author: 'chris',
        category: 3,
        description: '그를 본 순간, 나는 느꼈다...',
        cloud: 0,
        userLike: 0,
        episodeCount: 0,
        complete: false,
        thumbnail: '',
        createdAt: '2021-02-26T13:54:55.252Z',
        updatedAt: '2021-02-26T13:54:55.252Z',
      },
      {
        id: 34,
        title: '나의 님',
        author: 'chris',
        category: 3,
        description: '그를 본 순간, 나는 느꼈다...',
        cloud: 0,
        userLike: 0,
        episodeCount: 0,
        complete: false,
        thumbnail: '',
        createdAt: '2021-02-26T13:54:55.252Z',
        updatedAt: '2021-02-26T13:54:55.252Z',
      },
      {
        id: 34,
        title: '나의 님',
        author: 'chris',
        category: 3,
        description: '그를 본 순간, 나는 느꼈다...',
        cloud: 0,
        userLike: 0,
        episodeCount: 0,
        complete: false,
        thumbnail: '',
        createdAt: '2021-02-26T13:54:55.252Z',
        updatedAt: '2021-02-26T13:54:55.252Z',
      },
    ],
  });
  const handleAxiosMyPage = () => {
    axios.get('https://server.cloud-bookstore.com/mypage').then((res) => {
      setMyPageData(res.data);
    });
  };
  // ! handleAxios 함수들 미리 실행시켜두기
  useEffect(() => {
    handleAxiosFantasy();
    handleAxiosMartialArts();
    handleAxiosRomance();
    handleAxiosMyPage();
  }, []);

  return (
    <div>
      <div className="wholeMainPageWrapper">
        <UserNav
          isLogin={props.isLogin}
          toggleLogin={props.toggleLogin}
          nickname={props.nickname}
          handleNickname={props.handleNickname}
          handleHomeOn={handleHomeOn}
          history={props.history}
          location={props.location}
          match={props.match}
        />
        <nav>
          <div className="wholeCategoryNav">
            <div className="categoryNavInnerWrapper">
              <div className="categoryNavWrapper">
                <div
                  id={isCategoryOn === '/main/home' ? 'categoryOn' : ''}
                  className="categoryBtn"
                  onClick={() => {
                    handleHomeOn();
                    props.history.push('/main/home');
                  }}
                >
                  홈
                </div>
                <div
                  role="button"
                  id={isCategoryOn === 'fantasy' ? 'categoryOn' : ''}
                  className="categoryBtn"
                  onClick={() => {
                    handleFantasyOn();
                    props.history.push('/main/fantasy');
                  }}
                >
                  판타지
                </div>
                <div
                  role="button"
                  id={isCategoryOn === 'martialArt' ? 'categoryOn' : ''}
                  className="categoryBtn"
                  onClick={() => {
                    handleMartialArtOn();
                    props.history.push('/main/martialArts');
                  }}
                >
                  무협
                </div>
                <div
                  role="button"
                  id={isCategoryOn === 'romance' ? 'categoryOn' : ''}
                  className="categoryBtn"
                  onClick={() => {
                    handleRomanceOn();
                    props.history.push('/main/romance');
                  }}
                >
                  로맨스
                </div>
                <div
                  id={
                    isCategoryOn === '/main/mypage/recentNovelList'
                      ? 'categoryOn'
                      : ''
                  }
                  className="categoryBtn"
                  onClick={() => {
                    handleMyOn();
                    props.history.push('/main/mypage/recentNovelList');
                  }}
                >
                  MY
                </div>
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
                />
                <div className="navSearchBtn">
                  <MdSearch />
                </div>
              </form>
            </div>
          </div>
        </nav>
        <Switch>
          <Route
            path="/main/setting"
            render={() => (
              <Setting
                nickname={props.nickname}
                handleNickname={props.handleNickname}
                history={props.history}
                location={props.location}
                match={props.match}
              />
            )}
          />
          <Route
            path="/main/home"
            render={() => (
              <Home
                novelData={props.novelData}
                history={props.history}
                location={props.location}
                match={props.match}
                handleFantasyOn={handleFantasyOn}
                handleMartialArtOn={handleMartialArtOn}
                handleRomanceOn={handleRomanceOn}
              />
            )}
          />
          <Route
            path="/main/fantasy"
            render={() => (
              <FantasyCategory fantasyNovelData={fantasyNovelData} />
            )}
          />
          <Route
            path="/main/martialArts"
            render={() => (
              <MartialArtsCategory
                martialArtsNovelData={martialArtsNovelData}
              />
            )}
          />
          <Route
            path="/main/romance"
            render={() => (
              <RomanceCategory romanceNovelData={romanceNovelData} />
            )}
          />
          <Route
            path="/main/mypage"
            render={() => <Mypage myPageData={myPageData} />}
          />
          <Route
            path="/main/mypage/recentNovelList"
            render={() => <HistoryNovel />}
          />
          <Route path="/main/novel/:id" render={() => <NovelInfo />} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
};
export default withRouter(MainPage);
