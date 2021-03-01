/* eslint-disable */
import React, { useState, useEffect } from 'react';
import './App.css';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import axios from 'axios';
import Landingpage from './pages/Landingpage';
import Mainpage from './pages/Mainpage';
import Home from './pages/Home';
import Setting from './pages/Setting';

const App: React.FC = () => {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const toggleLogin = (): void => {
    setIsLogin(!isLogin);
  };
  const [nickname, setNickname] = useState<string>('');
  const handleNickname = (nickname: string): void => {
    setNickname(nickname);
  };
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
  return (
    <div className="wholeWrapper">
      <Switch>
        <Route path="/landingpage" render={() => <Landingpage />} />
        <Route
          path="/main"
          render={() => (
            <Mainpage
              isLogin={!isLogin}
              toggleLogin={toggleLogin}
              nickname={nickname}
              handleNickname={handleNickname}
            />
          )}
        />
        <Route
          path="/main/home"
          render={() => <Home novelData={novelData} />}
        />
        <Route
          path="/"
          render={() => {
            if (isLogin) {
              return <Redirect to="/main/home" />;
            }
            return <Redirect to="/landingpage" />;
          }}
        />
        <Route path="/main/setting" render={() => <Setting />} />
      </Switch>
    </div>
  );
};
export default withRouter(App);
