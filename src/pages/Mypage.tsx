import React, { useState } from 'react';
import {
  withRouter,
  Route,
  Switch,
  RouteComponentProps,
} from 'react-router-dom';
import '../css/Mypage.css';
import '../css/MypageNav.css';
import MyWorks from './myCategoryComponents/MyWorks';
import HistoryNovel from './myCategoryComponents/HistoryNovel';
import UserLikes from './myCategoryComponents/UserLikes';
import MakeNovel from './myCategoryComponents/MakeNovel';
const Mypage: React.FC<RouteComponentProps> = (props: RouteComponentProps) => {
  const [myPageData, setMyPageData] = useState({
    userHistories: [
      {
        novels: {
          title: '잊지마 4시1분',
          complete: false,
          thumbnail:
            'https://user-images.githubusercontent.com/72306693/108985620-99c68280-76d4-11eb-9305-50ef35e77c93.png',
          updatedAt: '2021-02-28T11:19:57.297Z',
        },
        episodes: {
          id: 2,
          title: '그 다음날',
        },
      },
      {
        novels: {
          title: '플레이어스',
          complete: false,
          thumbnail:
            'https://user-images.githubusercontent.com/72306693/108985620-99c68280-76d4-11eb-9305-50ef35e77c93.png',
          updatedAt: '2021-02-28T11:35:53.807Z',
        },
        episodes: {
          id: 11,
          title: '두 번째 만남',
        },
      },
      {
        novels: {
          title: '플레이어스',
          complete: false,
          thumbnail:
            'https://user-images.githubusercontent.com/72306693/108985620-99c68280-76d4-11eb-9305-50ef35e77c93.png',
          updatedAt: '2021-02-28T11:35:53.807Z',
        },
        episodes: {
          id: 11,
          title: '두 번째 만남',
        },
      },
      {
        novels: {
          title: '플레이어스',
          complete: false,
          thumbnail:
            'https://user-images.githubusercontent.com/72306693/108985620-99c68280-76d4-11eb-9305-50ef35e77c93.png',
          updatedAt: '2021-02-28T11:35:53.807Z',
        },
        episodes: {
          id: 11,
          title: '두 번째 만남',
        },
      },
      {
        novels: {
          title: '플레이어스',
          complete: false,
          thumbnail:
            'https://user-images.githubusercontent.com/72306693/108985620-99c68280-76d4-11eb-9305-50ef35e77c93.png',
          updatedAt: '2021-02-28T11:35:53.807Z',
        },
        episodes: {
          id: 11,
          title: '두 번째 만남',
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
        userLike: 14,
        episodeCount: 0,
        complete: false,
        thumbnail:
          'https://user-images.githubusercontent.com/72306693/108985620-99c68280-76d4-11eb-9305-50ef35e77c93.png',
        createdAt: '2021-02-24T21:20:11.925Z',
        updatedAt: '2021-02-28T11:19:57.297Z',
      },
      {
        id: 1,
        title: '잊지마 4시1분',
        author: 'Daniel',
        category: 3,
        description:
          '새침하게 흐린 품이 눈이 올 듯하더니 눈은 아니 오고 얼다가 만 비가 추적추적 내리는 날이었다.\r\n\n이날이야말로 동소문 안에서 인력거꾼 노릇을 하는 김첨지에게는 오래간만에도 닥친 운수 좋은 날...',
        cloud: 1,
        userLike: 14,
        episodeCount: 0,
        complete: false,
        thumbnail:
          'https://user-images.githubusercontent.com/72306693/108985620-99c68280-76d4-11eb-9305-50ef35e77c93.png',
        createdAt: '2021-02-24T21:20:11.925Z',
        updatedAt: '2021-02-28T11:19:57.297Z',
      },
      {
        id: 2,
        title: '플레이어스',
        author: '에그니스',
        category: 1,
        description:
          '새침하게 흐린 품이 눈이 올 듯하더니 눈은 아니 오고 얼다가 만 비가 추적추적 내리는 날이었다.\r\n\n이날이야말로 동소문 안에서 인력거꾼 노릇을 하는 김첨지에게는 오래간만에도 닥친 운수 좋은 날...',
        cloud: 2,
        userLike: 2,
        episodeCount: 5,
        complete: false,
        thumbnail:
          'https://user-images.githubusercontent.com/72306693/108985620-99c68280-76d4-11eb-9305-50ef35e77c93.png',
        createdAt: '2021-02-24T21:40:28.651Z',
        updatedAt: '2021-02-28T11:35:53.807Z',
      },
      {
        id: 7,
        title: '그녀석의 비밀과외\n',
        author: 'paige',
        category: 3,
        description:
          '새침하게 흐린 품이 눈이 올 듯하더니 눈은 아니 오고 얼다가 만 비가 추적추적 내리는 날이었다.\r\n\n이날이야말로 동소문 안에서 인력거꾼 노릇을 하는 김첨지에게는 오래간만에도 닥친 운수 좋은 날...',
        cloud: 17,
        userLike: 14,
        episodeCount: 0,
        complete: false,
        thumbnail:
          'https://user-images.githubusercontent.com/72306693/108985620-99c68280-76d4-11eb-9305-50ef35e77c93.png',
        createdAt: '2021-02-25T15:46:41.755Z',
        updatedAt: '2021-02-28T11:36:00.612Z',
      },
    ],
    userWorks: [
      {
        id: 38,
        title: '그대를 만나 행복했어요',
        author: 'paige',
        category: 3,
        description: '그를 본 순간, 나는 느꼈다...',
        cloud: 0,
        userLike: 0,
        episodeCount: 0,
        complete: false,
        thumbnail:
          'https://user-images.githubusercontent.com/72306693/108985620-99c68280-76d4-11eb-9305-50ef35e77c93.png',
        createdAt: '2021-02-26T14:04:44.227Z',
        updatedAt: '2021-02-28T11:36:33.426Z',
      },
      {
        id: 39,
        title: '그대를 만나 행복했어요',
        author: 'paige',
        category: 3,
        description: '그를 본 순간, 나는 느꼈다...',
        cloud: 0,
        userLike: 0,
        episodeCount: 0,
        complete: false,
        thumbnail:
          'https://user-images.githubusercontent.com/72306693/108985620-99c68280-76d4-11eb-9305-50ef35e77c93.png',
        createdAt: '2021-02-26T14:15:14.490Z',
        updatedAt: '2021-02-28T11:36:34.705Z',
      },
    ],
  });
  const [isMyCategoryOn, setIsMyCategoryOn] = useState<string>(
    '/main/mypage/recentNovelList',
  );
  const handleHistoryNovelOn = (): void => {
    setIsMyCategoryOn('/main/mypage/recentNovelList');
  };
  const handleUserLikesOn = (): void => {
    setIsMyCategoryOn('/main/mypage/concernNovelList');
  };
  const handleMyworksOn = (): void => {
    setIsMyCategoryOn('/main/mypage/myNovelList');
  };
  return (
    <div>
      <nav>
        <div className="mywholeCategoryNav">
          <div className="mycategoryNavInnerWrapper">
            <div className="mycategoryNavWrapper">
              <div
                role="presentation"
                id={
                  isMyCategoryOn === '/main/mypage/recentNovelList'
                    ? 'mycategoryOn'
                    : ''
                }
                className="mycategoryBtn"
                onClick={() => {
                  handleHistoryNovelOn();
                  props.history.push('/main/mypage/recentNovelList');
                }}
                onKeyPress={handleHistoryNovelOn}
              >
                최근 본 작품
              </div>
              <div
                role="presentation"
                id={
                  isMyCategoryOn === '/main/mypage/concernNovelList'
                    ? 'mycategoryOn'
                    : ''
                }
                className="mycategoryBtn"
                onClick={() => {
                  handleUserLikesOn();
                  props.history.push('/main/mypage/concernNovelList');
                }}
                onKeyPress={handleUserLikesOn}
              >
                관심 작품
              </div>
              <div
                role="presentation"
                id={
                  isMyCategoryOn === '/main/mypage/myNovelList'
                    ? 'mycategoryOn'
                    : ''
                }
                className="mycategoryBtn"
                onClick={() => {
                  handleMyworksOn();
                  props.history.push('/main/mypage/myNovelList');
                }}
                onKeyPress={handleMyworksOn}
              >
                내 작품
              </div>
            </div>
          </div>
        </div>
      </nav>
      <Switch>
        <Route
          path="/main/mypage/recentNovelList"
          render={() => <HistoryNovel />}
        />
        <Route
          path="/main/mypage/concernNovelList"
          render={() => <UserLikes />}
        />
        <Route path="/main/mypage/myNovelList" render={() => <MyWorks />} />
        <Route path="/main/mypage/makeNovel" render={() => <MakeNovel />} />
      </Switch>
    </div>
  );
};

export default withRouter(Mypage);
