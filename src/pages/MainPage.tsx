/* eslint-disable */

import React, { useState } from 'react';
import {
  RouteComponentProps,
  withRouter,
  Route,
  Switch,
} from 'react-router-dom';
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
      cloud: number;
      userLike: number;
      thumbnail: string;
      complete: boolean;
      createdAt: string;
      updatedAt: string;
    }[];
    fantasy: {
      id: number;
      title: string;
      author: string;
      cloud: number;
      userLike: number;
      thumbnail: string;
      complete: boolean;
      createdAt: string;
      updatedAt: string;
    }[];
    martialArts: {
      id: number;
      title: string;
      author: string;
      cloud: number;
      userLike: number;
      thumbnail: string;
      complete: boolean;
      createdAt: string;
      updatedAt: string;
    }[];
    romance: {
      id: number;
      title: string;
      author: string;
      cloud: number;
      userLike: number;
      thumbnail: string;
      complete: boolean;
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
              />
            )}
          />
          <Route path="/main/fantasy" render={() => <FantasyCategory />} />
          <Route
            path="/main/martialArts"
            render={() => <MartialArtsCategory />}
          />
          <Route path="/main/romance" render={() => <RomanceCategory />} />
          <Route path="/main/mypage" render={() => <Mypage />} />
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
