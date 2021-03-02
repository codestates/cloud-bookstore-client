/* eslint-disable */
import React, { useState, useEffect } from 'react';
import {
  RouteComponentProps,
  withRouter,
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
import HistoryNovel from './myCategotyComponents/HistoryNovel';
import Setting from './Setting';

interface mainPageProps extends RouteComponentProps {
  isLogin: boolean;
  toggleLogin: () => void;
  nickname: string;
  handleNickname: (nickname: string) => void;
}

const MainPage: React.FC<mainPageProps> = (props: mainPageProps) => {
  const [novelData, setNovelData] = useState({
    ranking: [
      {
        id: 1,
        title: '완벽한 그녀의 반전이',
        author: '솔직히 헬프데스크 너무느려요',
        cloud: 2000,
        userLike: 100,
        thumbnail:
          'https://user-images.githubusercontent.com/72306693/108985620-99c68280-76d4-11eb-9305-50ef35e77c93.png',
        complete: false,
        createdAt: '2021-02-24T00:00:00.925Z',
        updatedAt: '2021-02-28T00:00:00.925Z',
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
  return (
    <div>
      <div className="wholeMainPageWrapper">
        <UserNav
          isLogin={props.isLogin}
          toggleLogin={props.toggleLogin}
          nickname={props.nickname}
          handleNickname={props.handleNickname}
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
                  onClick={handleFantasyOn}
                >
                  판타지
                </div>
                <div
                  role="button"
                  id={isCategoryOn === 'martialArt' ? 'categoryOn' : ''}
                  className="categoryBtn"
                  onClick={handleMartialArtOn}
                >
                  무협
                </div>
                <div
                  role="button"
                  id={isCategoryOn === 'romance' ? 'categoryOn' : ''}
                  className="categoryBtn"
                  onClick={handleRomanceOn}
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
          <Route path="/main/setting" render={() => <Setting />} />
          <Route
            path="/main/home"
            render={() => <Home novelData={novelData} />}
          />
          <Route path="/main/mypage" render={() => <Mypage />} />
          <Route
            path="/main/mypage/recentNovelList"
            render={() => <HistoryNovel />}
          />
        </Switch>
      </div>
      <Footer />
    </div>
  );
};
export default withRouter(MainPage);
