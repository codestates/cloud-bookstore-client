import React, { useState, Dispatch, SetStateAction } from 'react';
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
import EditNovel from './myCategoryComponents/EditNovel';
import MakeNovel from './myCategoryComponents/MakeNovel';
import MyNovelEpisodeList from './myCategoryComponents/MyNovelEpisodeList';
import axios from 'axios';
import WriteNovelEpisode from './myCategoryComponents/WriteNovelEpisode';
import EditEpisode from './myCategoryComponents/EditEpisode';
interface MyNovelDataProps extends RouteComponentProps {
  handleAxiosClickedNovelData: (data: number) => void;
  handleAxiosMyPage: () => void;
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
  myPageData: {
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
  });

  const [myNovelEpisodeList, setMyNovelEpisodeList] = useState([
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
  ]);

  const handleAxiosMyNovelEpisodeList = (novelId: number) => {
    axios
      .get(`https://server.cloud-bookstore.com/mypage/novel/${novelId}`)
      .then((data) => {
        setMyNovelEpisodeList(data.data.episodes);
      });
  };

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
            <HistoryNovel
              userHistoriesData={props.myPageData.userHistories}
              handleAxiosClickedNovelData={props.handleAxiosClickedNovelData}
            />
          )}
        />
        <Route
          path="/main/mypage/concernNovelList"
          render={() => (
            <UserLikes
              userLikesData={props.myPageData.userLikes}
              handleAxiosClickedNovelData={props.handleAxiosClickedNovelData}
            />
          )}
        />
        <Route
          path="/main/mypage/myNovelList"
          render={() => (
            <MyWorks
              history={props.history}
              location={props.location}
              match={props.match}
              userWorksData={props.myPageData.userWorks}
              handleAxiosMyNovelEpisodeList={handleAxiosMyNovelEpisodeList}
              handleMyCurrentNewNovel={handleMyCurrentNewNovel}
              myCurrentNewNovel={myCurrentNewNovel}
            />
          )}
        />
        <Route
          path="/main/mypage/makeNovel"
          render={() => (
            <MakeNovel
              handleAxiosMyNovelEpisodeList={handleAxiosMyNovelEpisodeList}
              handleAxiosMyPage={props.handleAxiosMyPage}
              handleMyCurrentNewNovel={handleMyCurrentNewNovel}
              handleAxiosFantasy={props.handleAxiosFantasy}
              handleAxiosMartialArts={props.handleAxiosMartialArts}
              handleAxiosRomance={props.handleAxiosRomance}
              handleWholeNovelData={props.handleWholeNovelData}
            />
          )}
        />
        <Route
          path="/main/mypage/editNovel/:id"
          render={() => (
            <EditNovel
              myCurrentNewNovel={myCurrentNewNovel}
              handleAxiosMyPage={props.handleAxiosMyPage}
              handleMyCurrentNewNovel={handleMyCurrentNewNovel}
            />
          )}
        />
        <Route
          path="/main/mypage/myNovelEpisodeList/:id"
          render={() => (
            <MyNovelEpisodeList
              setSpecificEpisodeData={props.setSpecificEpisodeData}
              handleAxiosMyPage={props.handleAxiosMyPage}
              myCurrentNewNovel={myCurrentNewNovel}
              myNovelEpisodeList={myNovelEpisodeList}
              handleAxiosMyNovelEpisodeList={handleAxiosMyNovelEpisodeList}
              handleAxiosFantasy={props.handleAxiosFantasy}
              handleAxiosMartialArts={props.handleAxiosMartialArts}
              handleAxiosRomance={props.handleAxiosRomance}
              handleWholeNovelData={props.handleWholeNovelData}
              handleAxiosClickedNovelData={props.handleAxiosClickedNovelData}
            />
          )}
        />
        <Route
          path="/main/mypage/myNovelEpisodeWrite/:id"
          render={() => (
            <WriteNovelEpisode
              handleAxiosMyNovelEpisodeList={handleAxiosMyNovelEpisodeList}
              myCurrentNewNovel={myCurrentNewNovel}
            />
          )}
        />
        <Route
          path="/main/mypage/editEpisode/:id"
          render={() => (
            <EditEpisode
              handleMyCurrentNewNovel={handleMyCurrentNewNovel}
              handleAxiosMyPage={props.handleAxiosMyPage}
              handleAxiosClickedNovelData={props.handleAxiosClickedNovelData}
              handleAxiosMyNovelEpisodeList={handleAxiosMyNovelEpisodeList}
              specificEpisodeData={props.specificEpisodeData}
              myCurrentNewNovel={myCurrentNewNovel}
              handleAxiosFantasy={props.handleAxiosFantasy}
              handleAxiosMartialArts={props.handleAxiosMartialArts}
              handleAxiosRomance={props.handleAxiosRomance}
              handleWholeNovelData={props.handleWholeNovelData}
            />
          )}
        />
      </Switch>
    </div>
  );
};

export default withRouter(Mypage);
