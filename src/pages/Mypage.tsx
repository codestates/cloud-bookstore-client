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
import MyNovelEpisodeList from './myCategoryComponents/MyNovelEpisodeList';

interface MyNovelDataProps extends RouteComponentProps {
  handleAxiosMyPage: () => void;
  myPageData: {
    userHistories: {
      novels: {
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
  };
}

interface CurrentNewNovelProps {
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
}

const Mypage: React.FC<MyNovelDataProps> = (props: MyNovelDataProps) => {
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
  const [myCurrentNewNovel, setMyCurrentNewNovel] = useState({
    id: 20,
    title: '눈떠보니 아르미르신전에 내가 서있었다',
    author: '풍렬',
    category: 1,
    description:
      '오빠의 절친, 무섭기만 하던 집주인한테 키스를 당했습니다. “스쳤어. 실수로.” 하지만 이 남자는 자기가 한 일을 인정하지 않아요. 나만 계속 의식하게 되는 것 같아요. 게다가 동거만으로도 심장 떨리는데 같은 회사, 같은 팀이라네요. 근데 이 남자…… 왜 나한테 잘하죠? 무섭게……. 고군분투 햇병아리 사회 초년생 오소정과 친구의 동생을 사랑하게 된 남자 차강우의 옥신각신 동거 이야기. 아침부터 밤까지, 집에서도 회사에서도  두근두근 꽁냥꽁냥!',
    cloud: 0,
    userLike: 0,
    episodeCount: 0,
    complete: false,
    thumbnail:
      'https://user-images.githubusercontent.com/72306693/108985620-99c68280-76d4-11eb-9305-50ef35e77c93.png',
    createdAt: '2021-02-25T15:55:19.608Z',
    updatedAt: '2021-02-28T11:20:08.168Z',
  });

  const handleMyCurrentNewNovel = (data: CurrentNewNovelProps): void => {
    setMyCurrentNewNovel(data);
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
          render={() => (
            <HistoryNovel userHistoriesData={props.myPageData.userHistories} />
          )}
        />
        <Route
          path="/main/mypage/concernNovelList"
          render={() => (
            <UserLikes userLikesData={props.myPageData.userLikes} />
          )}
        />
        <Route
          path="/main/mypage/myNovelList"
          render={() => <MyWorks userWorksData={props.myPageData.userWorks} />}
        />
        <Route
          path="/main/mypage/makeNovel"
          render={() => (
            <MakeNovel
              handleAxiosMyPage={props.handleAxiosMyPage}
              handleMyCurrentNewNovel={handleMyCurrentNewNovel}
            />
          )}
        />
        <Route
          path="/main/mypage/MyNovelEpisodeList/:id"
          render={() => (
            <MyNovelEpisodeList myCurrentNewNovel={myCurrentNewNovel} />
          )}
        />
      </Switch>
    </div>
  );
};

export default withRouter(Mypage);
