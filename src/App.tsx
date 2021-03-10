import React, { useState, useEffect } from 'react';
import './App.css';
import {
  Route,
  Switch,
  withRouter,
  Redirect,
  RouteComponentProps,
} from 'react-router-dom';
import axios from 'axios';
import LandingPage from './pages/LandingPage';
import MainPage from './pages/MainPage';
import NovelReadStage from './pages/novelInfoComponents/EpisodeListComponents/NovelReadStage/NovelReadStage';
import ScrollToTop from './ScrollToTop';
import { useStateWithCallbackLazy } from 'use-state-with-callback';

interface ClickedSpecificEpisodeProps {
  episodeId: number;
  novelId: number;
}

const App: React.FC<RouteComponentProps> = (props: RouteComponentProps) => {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const toggleLogin = (): void => {
    setIsLogin(!isLogin);
  };
  const [nickname, setNickname] = useState<string>('');
  const handleNickname = (nickname: string): void => {
    setNickname(nickname);
  };

  const [clickedNovelData, setClickedNovelData] = useState({
    data: {
      id: 0,
      title: '',
      author: '',
      category: 0,
      description: '',
      cloud: 0,
      userLike: 0,
      episodeCount: 0,
      complete: false,
      thumbnail: '',
      createdAt: '',
      updatedAt: '',
    },
    episodes: [
      {
        id: 0,
        episodeNum: 0,
        novelId: 0,
        title: '',
        text: '',
        thumbnail: '',
        cloud: 0,
        createdAt: '',
        updatedAt: '',
      },
    ],
    comments: [
      {
        id: 0,
        nickname: '',
        comment: '',
        novelId: 0,
        createdAt: '',
        updatedAt: '',
      },
    ],
    userHistory: {
      userHistory: [
        {
          novelEpisodeId: 0,
          updatedAt: '',
        },
      ],
      episodeDetail: {
        id: 0,
        episodeNum: 0,
        title: '',
        thumbnail: '',
        cloud: 0,
      },
    },
    userLike: false, // 소설에 좋아요를 한 상태, 좋아요를 안했으면 false
    userPurchases: [
      {
        episodeId: 0,
      },
    ],
  });

  // ? 클릭한 특정 에피소드 정보 뽑아오기
  const [
    clickedSpecificEpisode,
    setClickedSpecificEpisode,
  ] = useStateWithCallbackLazy({
    episodeId: 0,
    novelId: 0,
  });
  const handleClickedSpecificEpisode = async (
    parameter: ClickedSpecificEpisodeProps,
  ) => {
    // eslint-disable-next-line no-console
    setClickedSpecificEpisode(
      parameter,
      (currentClickedSpecificEpisode: { novelId: number; episodeId: number }) =>
        handleAxiosSpecificEpisodeData(
          currentClickedSpecificEpisode.novelId,
          currentClickedSpecificEpisode.episodeId,
        ),
    );
  };
  // ? 위에서 뽑아온 정보로 axios 날려 받은 정보
  const [specificEpisodeData, setSpecificEpisodeData] = useState({
    episode: {
      id: 0,
      episodeNum: 0,
      novelId: 0,
      title: '',

      text: '',
      thumbnail: '',
      cloud: 0,
      createdAt: '',
      updatedAt: '',
    },
    novelTitle: {
      title: '',
    },
  });
  const handleAxiosSpecificEpisodeData = (
    novelId: number = clickedSpecificEpisode.novelId,
    episodeId: number = clickedSpecificEpisode.episodeId,
  ) => {
    axios
      .get(`https://server.cloud-bookstore.com/novel/${novelId}/${episodeId}`)
      .then(async (res) => {
        if (res.data === '다음 회차를 보기 위해 로그인을 해주세요.') {
          alert('다음 회차를 보기 위해 로그인을 해주세요.');
        } else if (
          res.data ===
          '구름을 모두 사용하셨습니다. 기다리면 내일 무료 구름 3개가 충전됩니다.'
        ) {
          alert(
            '구름을 모두 사용하셨습니다. 기다리면 내일 무료 구름 3개가 충전됩니다.',
          );
        } else {
          await setSpecificEpisodeData(res.data);
          await props.history.push(
            `/novel/${res.data.episode.novelId}/episode/${res.data.episode.episodeNum}`,
          );
        }
      });
  };

  const handleAxiosClickedNovelData = (parameter: number) => {
    axios
      .get(`https://server.cloud-bookstore.com/novel/${parameter}`)
      .then((res) => {
        setClickedNovelData(res.data);
      });
  };

  const [novelData, setNovelData] = useState({
    ranking: [
      {
        id: 0,
        title: '',
        author: '',
        category: 0,
        description: '',
        cloud: 0,
        userLike: 0,
        episodeCount: 0,
        complete: false,
        thumbnail: '',
        createdAt: '',
        updatedAt: '',
      },
    ],
    fantasy: [
      {
        id: 0,
        title: '',
        author: '',
        category: 0,
        description: '',
        cloud: 0,
        userLike: 0,
        episodeCount: 0,
        complete: false,
        thumbnail: '',
        createdAt: '',
        updatedAt: '',
      },
    ],
    martialArts: [
      {
        id: 0,
        title: '',
        author: '',
        category: 0,
        description: '',
        cloud: 0,
        userLike: 0,
        episodeCount: 0,
        complete: false,
        thumbnail: '',
        createdAt: '',
        updatedAt: '',
      },
    ],
    romance: [
      {
        id: 0,
        title: '',
        author: '',
        category: 0,
        description: '',
        cloud: 0,
        userLike: 0,
        episodeCount: 0,
        complete: false,
        thumbnail: '',
        createdAt: '',
        updatedAt: '',
      },
    ],
  });

  // !userLike toggle 함수
  const toggleUserLike = () => {
    setClickedNovelData((prevState) => ({
      ...prevState,
      userLike: !prevState.userLike,
    }));
  };

  // !작품의 관심 함수
  const handleNovelLikesCount = (userLike: number) => {
    setClickedNovelData((prevState) => ({
      ...prevState,
      data: {
        ...prevState.data,
        userLike,
      },
    }));
  };

  // ! Fantasy novel Data - axios get
  const [fantasyNovelData, setFantasyNovelData] = useState({
    data: [
      {
        id: 0,
        title: '',
        author: '',
        category: 0,
        description: '',
        cloud: 0,
        userLike: 0,
        episodeCount: 0,
        complete: false,
        thumbnail: '',
        createdAt: '',
        updatedAt: '',
      },
    ],
  });
  const handleAxiosFantasy = () => {
    axios.get('https://server.cloud-bookstore.com/category/1').then((res) => {
      setFantasyNovelData(res.data);
    });
  };
  // ! MartialArts novel Data - axios get
  const [martialArtsNovelData, setMartialArtsNovelData] = useState({
    data: [
      {
        id: 0,
        title: '',
        author: '',
        category: 0,
        description: '',
        cloud: 0,
        userLike: 0,
        episodeCount: 0,
        complete: false,
        thumbnail: '',
        createdAt: '',
        updatedAt: '',
      },
    ],
  });
  const handleAxiosMartialArts = () => {
    axios.get('https://server.cloud-bookstore.com/category/2').then((res) => {
      setMartialArtsNovelData(res.data);
    });
  };
  // ! Romance novel Data - axios get
  const [romanceNovelData, setRomanceNovelData] = useState({
    data: [
      {
        id: 0,
        title: '',
        author: '',
        category: 0,
        description: '',
        cloud: 0,
        userLike: 0,
        episodeCount: 0,
        complete: false,
        thumbnail: '',
        createdAt: '',
        updatedAt: '',
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
          id: 0,
          title: '',
          complete: false,
          thumbnail: '',
          updatedAt: '',
        },
        episodes: {
          id: 0,
          episodeNum: 0,
          cloud: 0,
          thumbnail: '',
          title: '',
        },
      },
    ],
    userLikes: [
      {
        id: 0,
        title: '',
        author: '',
        category: 0,
        description: '',
        cloud: 0,
        userLike: 0,
        episodeCount: 0,
        complete: false,
        thumbnail: '',
        createdAt: '',
        updatedAt: '',
      },
    ],
    userWorks: [
      {
        id: 0,
        title: '',
        author: '',
        category: 0,
        description: '',
        cloud: 0,
        userLike: 0,
        episodeCount: 0,
        complete: false,
        thumbnail: '',
        createdAt: '',
        updatedAt: '',
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
    axios.get('https://server.cloud-bookstore.com/novels').then((res) => {
      setNovelData(res.data);
    });
    handleAxiosFantasy();
    handleAxiosMartialArts();
    handleAxiosRomance();
    handleAxiosMyPage();
  }, []);

  // * input box title state
  const [novelTitleSearch, setNovelTitleSearch] = useState<string>('');
  // * Search input state 저장 함수

  const handleNovelTitleSearch = (
    e: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    setNovelTitleSearch(e.target.value);
  };

  // * Search로 넣은 novel title의 id 찾는 함수
  const handleSearchClick = (): void => {
    setNovelTitleSearch('');
    const entireNovelData = [
      ...fantasyNovelData.data,
      ...martialArtsNovelData.data,
      ...romanceNovelData.data,
    ];
    for (const el of entireNovelData) {
      if (el.title.replace(/\s/g, '') === novelTitleSearch.replace(/\s/g, '')) {
        axios
          .get(`https://server.cloud-bookstore.com/novel/${el.id}`)
          .then((data) => {
            setClickedNovelData(data.data);
            props.history.push(`/main/novel/${el.id}`);
          });
      }
    }
  };

  return (
    <div className="wholeWrapper">
      <Switch>
        <Route path="/LandingPage" render={() => <LandingPage />} />
        <Route
          path="/main"
          render={() => (
            <MainPage
              specificEpisodeData={specificEpisodeData}
              setSpecificEpisodeData={setSpecificEpisodeData}
              clickedNovelData={clickedNovelData}
              handleAxiosClickedNovelData={handleAxiosClickedNovelData}
              isLogin={!isLogin}
              toggleLogin={toggleLogin}
              nickname={nickname}
              handleNickname={handleNickname}
              novelData={novelData}
              toggleUserLike={toggleUserLike}
              handleNovelLikesCount={handleNovelLikesCount}
              novelTitleSearch={novelTitleSearch}
              handleNovelTitleSearch={handleNovelTitleSearch}
              handleSearchClick={handleSearchClick}
              fantasyNovelData={fantasyNovelData}
              martialArtsNovelData={martialArtsNovelData}
              romanceNovelData={romanceNovelData}
              myPageData={myPageData}
              handleAxiosMyPage={handleAxiosMyPage}
              handleAxiosSpecificEpisodeData={handleAxiosSpecificEpisodeData}
              handleClickedSpecificEpisode={handleClickedSpecificEpisode}
              handleAxiosFantasy={handleAxiosFantasy}
              handleAxiosMartialArts={handleAxiosMartialArts}
              handleAxiosRomance={handleAxiosRomance}
            />
          )}
        />
        <Route
          exact
          path="/"
          render={() => {
            if (isLogin) {
              return <Redirect to="/main/home" />;
            }
            return <Redirect to="/LandingPage" />;
          }}
        />
        <Route
          exact
          path="/novel/:id/episode/:episodeId"
          render={() => (
            <NovelReadStage
              specificEpisodeData={specificEpisodeData}
              history={props.history}
              location={props.location}
              match={props.match}
              handleAxiosClickedNovelData={handleAxiosClickedNovelData}
            />
          )}
        />
        <ScrollToTop />
      </Switch>
    </div>
  );
};
export default withRouter(App);
