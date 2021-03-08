import React, { useState, useEffect } from 'react';
import './App.css';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import axios from 'axios';
import LandingPage from './pages/LandingPage';
import MainPage from './pages/MainPage';
import NovelReadStage from './pages/novelInfoComponents/EpisodeListComponents/NovelReadStage/NovelReadStage';

const App: React.FC = () => {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const toggleLogin = (): void => {
    setIsLogin(!isLogin);
  };
  const [nickname, setNickname] = useState<string>('guest');
  const handleNickname = (nickname: string): void => {
    setNickname(nickname);
  };
  const [novelData, setNovelData] = useState({
    ranking: [
      {
        id: 20,
        title: '눈떠보니 아르미르신전에 내가 서있었다',
        author: '풍렬',
        category: 1,
        description:
          '새침하게 흐린 품이 눈이 올 듯하더니 눈은 아니 오고 얼다가 만 비가 추적추적 내리는 날이었다.\r\n\n이날이야말로 동소문 안에서 인력거꾼 노릇을 하는 김첨지에게는 오래간만에도 닥친 운수 좋은 날...',
        cloud: 222,
        userLike: 143,
        episodeCount: 0,
        complete: true,
        thumbnail:
          'https://user-images.githubusercontent.com/72306693/108985620-99c68280-76d4-11eb-9305-50ef35e77c93.png',
        createdAt: '2021-02-25T15:55:19.608Z',
        updatedAt: '2021-03-05:20:08.168Z',
      },
    ],
    fantasy: [
      {
        id: 20,
        title: '눈떠보니 아르미르신전에 내가 서있었다',
        author: '풍렬',
        category: 1,
        description:
          '새침하게 흐린 품이 눈이 올 듯하더니 눈은 아니 오고 얼다가 만 비가 추적추적 내리는 날이었다.\r\n\n이날이야말로 동소문 안에서 인력거꾼 노릇을 하는 김첨지에게는 오래간만에도 닥친 운수 좋은 날...',
        cloud: 222,
        userLike: 143,
        episodeCount: 0,
        complete: false,
        thumbnail:
          'https://user-images.githubusercontent.com/72306693/108985620-99c68280-76d4-11eb-9305-50ef35e77c93.png',
        createdAt: '2021-02-25T15:55:19.608Z',
        updatedAt: '2021-02-28T11:20:08.168Z',
      },
    ],
    martialArts: [
      {
        id: 15,
        title: '복수의 전쟁',
        author: '풍렬',
        category: 2,
        description:
          '새침하게 흐린 품이 눈이 올 듯하더니 눈은 아니 오고 얼다가 만 비가 추적추적 내리는 날이었다.\r\n\n이날이야말로 동소문 안에서 인력거꾼 노릇을 하는 김첨지에게는 오래간만에도 닥친 운수 좋은 날...',
        cloud: 90,
        userLike: 50,
        episodeCount: 0,
        complete: false,
        thumbnail:
          'https://user-images.githubusercontent.com/72306693/108985620-99c68280-76d4-11eb-9305-50ef35e77c93.png',
        createdAt: '2021-02-25T15:54:40.290Z',
        updatedAt: '2021-02-28T11:36:09.412Z',
      },
    ],
    romance: [
      {
        id: 9,
        title: '우리 집 옆에는 살인범이 산다?',
        author: 'paige',
        category: 3,
        description:
          '새침하게 흐린 품이 눈이 올 듯하더니 눈은 아니 오고 얼다가 만 비가 추적추적 내리는 날이었다.\r\n\n이날이야말로 동소문 안에서 인력거꾼 노릇을 하는 김첨지에게는 오래간만에도 닥친 운수 좋은 날...',
        cloud: 100,
        userLike: 50,
        episodeCount: 0,
        complete: false,
        thumbnail:
          'https://user-images.githubusercontent.com/72306693/108985620-99c68280-76d4-11eb-9305-50ef35e77c93.png',
        createdAt: '2021-02-25T15:47:09.599Z',
        updatedAt: '2021-02-28T11:36:01.641Z',
      },
    ],
  });
  useEffect(() => {
    axios.get('https://server.cloud-bookstore.com/novels').then((res) => {
      setNovelData(res.data);
    });
  }, []);
  return (
    <div className="wholeWrapper">
      <Switch>
        <Route path="/LandingPage" render={() => <LandingPage />} />
        <Route
          path="/main"
          render={() => (
            <MainPage
              isLogin={isLogin}
              toggleLogin={toggleLogin}
              nickname={nickname}
              handleNickname={handleNickname}
              novelData={novelData}
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
          path="/novel/:id/episode/:episodeId"
          render={() => <NovelReadStage />}
        />
      </Switch>
    </div>
  );
};
export default withRouter(App);
