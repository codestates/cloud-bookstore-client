import React, { useState, Dispatch, SetStateAction } from 'react';
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

interface CategoryDatas {
  data: {
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
}

interface MyData {
  userHistories: {
    novels: {
      id: number;
      title: string;
      complete: boolean;
      thumbnail: string;
      updatedAt: string;
    };
    episodes: {
      id: number;
      episodeNum: number;
      cloud: number;
      thumbnail: string;
      title: string;
    };
  }[];
  userLikes: {
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
  userWorks: {
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
}

interface ClickedNovelData {
  data: {
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
  };
  episodes: {
    id: number;
    episodeNum: number;
    novelId: number;
    title: string;
    text: string;
    thumbnail: string;
    cloud: number;
    createdAt: string;
    updatedAt: string;
  }[];
  comments: {
    id: number;
    nickname: string;
    comment: string;
    novelId: number;
    createdAt: string;
    updatedAt: string;
  }[];
  userHistory: any;
  userLike: boolean;
  userPurchases: {
    episodeId: number;
  }[];
}
interface mainPageProps extends RouteComponentProps {
  isLogin: boolean;
  toggleLogin: () => void;
  nickname: string;
  handleNickname: (nickname: string) => void;
  handleAxiosClickedNovelData: (parameter: number) => void;
  handleAxiosMyPage: () => void;
  toggleUserLike: () => void;
  novelTitleSearch: string;
  handleNovelLikesCount: (userLike: number) => void;
  handleNovelTitleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSearchClick: () => void;
  handleAxiosSpecificEpisodeData: (novelId: number, episodeId: number) => void;
  handleAxiosFantasy: () => void;
  handleAxiosMartialArts: () => void;
  handleAxiosRomance: () => void;
  handleWholeNovelData: () => void;
  setSpecificEpisodeData: Dispatch<
    SetStateAction<{
      episode: {
        id: number;
        episodeNum: number;
        novelId: number;
        title: string;
        text: string;
        thumbnail: string;
        cloud: number;
        createdAt: string;
        updatedAt: string;
      };
      novelTitle: { title: string };
    }>
  >;
  specificEpisodeData: {
    episode: {
      id: number;
      episodeNum: number;
      novelId: number;
      title: string;
      text: string;
      thumbnail: string;
      cloud: number;
      createdAt: string;
      updatedAt: string;
    };
    novelTitle: { title: string };
  };
  handleClickedSpecificEpisode: (parameter: {
    episodeId: number;
    novelId: number;
  }) => void;
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
  fantasyNovelData: CategoryDatas;
  martialArtsNovelData: CategoryDatas;
  romanceNovelData: CategoryDatas;
  myPageData: MyData;
  clickedNovelData: ClickedNovelData;
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

  const [loginModal, setLoginModal] = useState<boolean>(false);

  const handleLoginModalOn = (): void => {
    setLoginModal(!loginModal);
  };

  const handleMyPage = (): void => {
    if (props.isLogin) {
      handleMyOn();
      props.handleAxiosMyPage();
      props.history.push('/main/mypage/recentNovelList');
    } else {
      setLoginModal(!loginModal);
    }
  };

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
          handleLoginModalOn={handleLoginModalOn}
          loginModal={loginModal}
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
                  aria-hidden="true"
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
                  aria-hidden="true"
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
                  aria-hidden="true"
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
                  aria-hidden="true"
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
                  onClick={() => handleMyPage()}
                  aria-hidden="true"
                >
                  MY
                </div>
              </div>
              <div className="navSearchWrapper">
                <input
                  type="text"
                  className="navSearchBox"
                  placeholder="검색해주세요."
                  onChange={props.handleNovelTitleSearch}
                  maxLength={50}
                  value={props.novelTitleSearch}
                />
                <div className="navSearchBtn">
                  <MdSearch onClick={props.handleSearchClick} />
                </div>
              </div>
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
                handleAxiosClickedNovelData={props.handleAxiosClickedNovelData}
              />
            )}
          />
          <Route
            path="/main/fantasy"
            render={() => (
              <FantasyCategory
                fantasyNovelData={props.fantasyNovelData}
                history={props.history}
                location={props.location}
                match={props.match}
                handleAxiosClickedNovelData={props.handleAxiosClickedNovelData}
              />
            )}
          />
          <Route
            path="/main/martialArts"
            render={() => (
              <MartialArtsCategory
                martialArtsNovelData={props.martialArtsNovelData}
                history={props.history}
                location={props.location}
                match={props.match}
                handleAxiosClickedNovelData={props.handleAxiosClickedNovelData}
              />
            )}
          />
          <Route
            path="/main/romance"
            render={() => (
              <RomanceCategory
                romanceNovelData={props.romanceNovelData}
                history={props.history}
                location={props.location}
                match={props.match}
                handleAxiosClickedNovelData={props.handleAxiosClickedNovelData}
              />
            )}
          />
          <Route
            path="/main/mypage"
            render={() => (
              <Mypage
                specificEpisodeData={props.specificEpisodeData}
                setSpecificEpisodeData={props.setSpecificEpisodeData}
                handleAxiosMyPage={props.handleAxiosMyPage}
                myPageData={props.myPageData}
                handleAxiosClickedNovelData={props.handleAxiosClickedNovelData}
                handleAxiosFantasy={props.handleAxiosFantasy}
                handleAxiosMartialArts={props.handleAxiosMartialArts}
                handleAxiosRomance={props.handleAxiosRomance}
                handleWholeNovelData={props.handleWholeNovelData}
              />
            )}
          />
          <Route
            path="/main/mypage/recentNovelList"
            render={() => (
              <HistoryNovel
                userHistoriesData={props.myPageData.userHistories}
                handleAxiosClickedNovelData={props.handleAxiosClickedNovelData}
              />
            )}
          />
          <Route
            exact
            path="/main/novel/:id"
            render={() => (
              <NovelInfo
                handleAxiosSpecificEpisodeData={
                  props.handleAxiosSpecificEpisodeData
                }
                clickedNovelData={props.clickedNovelData}
                handleAxiosClickedNovelData={props.handleAxiosClickedNovelData}
                nickname={props.nickname}
                toggleUserLike={props.toggleUserLike}
                handleNovelLikesCount={props.handleNovelLikesCount}
                history={props.history}
                location={props.location}
                match={props.match}
                handleClickedSpecificEpisode={
                  props.handleClickedSpecificEpisode
                }
              />
            )}
          />
        </Switch>
      </div>
      <Footer />
    </div>
  );
};
export default withRouter(MainPage);
