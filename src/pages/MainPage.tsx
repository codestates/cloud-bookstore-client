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

  const [clickedNovelData, setClickedNovelData] = useState({
    data: {
      id: 1,
      title: '잊지마 4시1분',
      author: 'Daniel',
      category: 3,
      description:
        '새침하게 흐린 품이 눈이 올 듯하더니 눈은 아니 오고 얼다가 만 비가 추적추적 내리는 날이었다.\r\n\n이날이야말로 동소문 안에서 인력거꾼 노릇을 하는 김첨지에게는 오래간만에도 닥친 운수 좋은 날...',
      cloud: 4,
      userLike: 14,
      episodeCount: 0,
      complete: false,
      thumbnail:
        'https://user-images.githubusercontent.com/72306693/108985620-99c68280-76d4-11eb-9305-50ef35e77c93.png',
      createdAt: '2021-02-24T21:20:11.925Z',
      updatedAt: '2021-03-04T15:23:30.000Z',
    },
    episodes: [
      {
        id: 1,
        episodeNum: 1,
        novelId: 1,
        title: '어느 좋은 날어느 좋은 날어느 좋은 날',
        text:
          ' 새침하게 흐린 품이 눈이 올 듯하더니 눈은 아니 오고 얼다가 만 비가 추\r\n적추적 내리는 날이었다.\r\n 이날이야말로 동소문 안에서 인력거꾼 노릇을 하는 김첨지에게는 오래간만\r\n에도 닥친 운수 좋은 날이었다. 문안에(거기도 문밖은 아니지만) 들어간답\r\n시는 앞집 마마님을 전찻길까지 모셔다 드린 것을 비롯으로 행여나 손님이\r\n있을까 하고 정류장에서 어정어정하며 내리는 사람 하나하나에게 거의 비는\r\n듯한 눈결을 보내고 있다가 마침내 교원인 듯한 양복쟁이를 동광학교(東光\r\n學校)까지 태워다 주기로 되었다.\r\n 첫 번에 삼십전 , 둘째 번에 오십전 - 아침 댓바람에 그리 흉치 않은 일이\r\n었다. 그야말로 재수가 옴붙어서 근 열흘 동안 돈 구경도 못한 김첨지는 십\r\n전짜리 백동화 서 푼, 또는 다섯 푼이 찰깍 하고 손바닥에 떨어질 제 거의\r\n눈물을 흘릴 만큼 기뻤었다. 더구나 이날 이때에 이 팔십 전이라는 돈이 그\r\n에게 얼마나 유용한지 몰랐다. 컬컬한 목에 모주 한 잔도 적실 수 있거니와\r\n그보다도 앓는 아내에게 설렁탕 한 그릇도 사다 줄 수 있음이다.\r\n 그의 아내가 기침으로 쿨룩거리기는 벌써 달포가 넘었다. 조밥도 굶기를\r\n먹다시피 하는 형편이니 물론 약 한 첩 써본 일이 없다. 구태여 쓰려면 못\r\n쓸 바도 아니로되 그는 병이란 놈에게 약을 주어 보내면 재미를 붙여서 자\r\n꾸 온다는 자기의 신조(信條)에 어디까지 충실하였다. 따라서 의사에게 보\r\n인 적이 없으니 무슨 병인지는 알 수 없으되 반듯이 누워 가지고 일어나기\r\n는 새로 모로도 못 눕는 걸 보면 중증은 중증인 듯. 병이 이대도록 심해지\r\n기는 열흘전에 조밥을 먹고 체한 때문이다. 그때도 김첨지가 오래간만에 돈\r\n을 얻어서 좁쌀 한 되와 십 전짜리 나무 한 단을 사다 주었더니 김첨지의\r\n말에 의지하면 그 오라질 년이 천방지축으로 냄비에 대고 끓였다. 마음은\r\n급하고 불길은 달지 않아 채 익지도 않은 것을 그 오라질년이 숟가락은 고\r\n만두고 손으로 움켜서 두 뺨에 주먹덩이 같은 혹이 불거지도록 누가 빼앗을\r\n듯이 처박질하더니만 그날 저녁부터 가슴이 땡긴다, 배가 켕긴다고 눈을 흡\r\n뜨고 지랄병을 하였다. 그때 김첨지는 열화와 같이 성을 내며,\r\n  “에이, 오라질년, 조랑복은 할 수가 없어, 못 먹어 병, 먹어서 병! 어쩌\r\n란 말이야! 왜 눈을 바루 뜨지 못해!”\r\n하고 앓는 이의 뺨을 한 번 후려갈겼다. 흡뜬 눈은 조금 바루어졌건만 이슬\r\n이 맺히었다. 김첨지의 눈시울도 뜨끈뜨끈하였다.',
        thumbnail:
          'https://user-images.githubusercontent.com/72306693/108985620-99c68280-76d4-11eb-9305-50ef35e77c93.png',
        cloud: 19,
        createdAt: '2021-02-24T21:20:58.760Z',
        updatedAt: '2021-03-04T15:23:30.000Z',
      },
    ],
    comments: [
      {
        id: 2,
        nickname: 'sanghyuk',
        comment: 'wow amazing :)',
        novelId: 1,
        createdAt: '2021-02-25T18:01:28.217Z',
        updatedAt: '2021-02-28T06:25:21.000Z',
      },
    ],
    userHistory: {
      id: 1,
      episodeNum: 1,
      title: '어느 좋은 날어느 좋은 날어느 좋은 날',
      thumbnail:
        'https://user-images.githubusercontent.com/72306693/108985620-99c68280-76d4-11eb-9305-50ef35e77c93.png',
      cloud: 22,
      novelEpisodeId: 1,
      updatedAt: '2021-03-06T05:07:47.538Z',
    },
    userLike: true, // 소설에 좋아요를 한 상태, 좋아요를 안했으면 false
    userPurchases: [
      {
        episodeId: 1,
      },
    ],
  });
  const handleAxiosClickedNovelData = (parameter: number) => {
    axios
      .get(`https://server.cloud-bookstore.com/novel/${parameter}`)
      .then((res) => {
        setClickedNovelData(res.data);
      });
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
  const [martialArtsNovelData, setMartialArtsNovelData] = useState({
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
      setMartialArtsNovelData(res.data);
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
          thumbnail:
            'https://user-images.githubusercontent.com/72306693/108985620-99c68280-76d4-11eb-9305-50ef35e77c93.png',
          updatedAt: '2021-02-26T02:55:20.000Z',
        },
        episodes: {
          id: 3,
          episodeNum: 2,
          cloud: 3,
          thumbnail:
            'https://user-images.githubusercontent.com/72306693/108985620-99c68280-76d4-11eb-9305-50ef35e77c93.png',
          title: '이런 날이...',
        },
      },
      {
        novels: {
          title: '잊지마 4시1분',
          complete: false,
          thumbnail:
            'https://user-images.githubusercontent.com/72306693/108985620-99c68280-76d4-11eb-9305-50ef35e77c93.png',
          updatedAt: '2021-02-26T02:55:20.000Z',
        },
        episodes: {
          id: 3,
          episodeNum: 2,
          cloud: 3,
          thumbnail:
            'https://user-images.githubusercontent.com/72306693/108985620-99c68280-76d4-11eb-9305-50ef35e77c93.png',
          title: '이런 날이...',
        },
      },
      {
        novels: {
          title: '잊지마 4시1분',
          complete: false,
          thumbnail:
            'https://user-images.githubusercontent.com/72306693/108985620-99c68280-76d4-11eb-9305-50ef35e77c93.png',
          updatedAt: '2021-02-26T02:55:20.000Z',
        },
        episodes: {
          id: 3,
          episodeNum: 2,
          cloud: 3,
          thumbnail:
            'https://user-images.githubusercontent.com/72306693/108985620-99c68280-76d4-11eb-9305-50ef35e77c93.png',
          title: '이런 날이...',
        },
      },
      {
        novels: {
          title: '잊지마 4시1분',
          complete: false,
          thumbnail:
            'https://user-images.githubusercontent.com/72306693/108985620-99c68280-76d4-11eb-9305-50ef35e77c93.png',
          updatedAt: '2021-02-26T02:55:20.000Z',
        },
        episodes: {
          id: 3,
          episodeNum: 2,
          cloud: 3,
          thumbnail:
            'https://user-images.githubusercontent.com/72306693/108985620-99c68280-76d4-11eb-9305-50ef35e77c93.png',
          title: '이런 날이...',
        },
      },
      {
        novels: {
          title: '잊지마 4시1분',
          complete: false,
          thumbnail:
            'https://user-images.githubusercontent.com/72306693/108985620-99c68280-76d4-11eb-9305-50ef35e77c93.png',
          updatedAt: '2021-02-26T02:55:20.000Z',
        },
        episodes: {
          id: 3,
          episodeNum: 2,
          cloud: 3,
          thumbnail:
            'https://user-images.githubusercontent.com/72306693/108985620-99c68280-76d4-11eb-9305-50ef35e77c93.png',
          title: '이런 날이...',
        },
      },
      {
        novels: {
          title: '잊지마 4시1분',
          complete: false,
          thumbnail:
            'https://user-images.githubusercontent.com/72306693/108985620-99c68280-76d4-11eb-9305-50ef35e77c93.png',
          updatedAt: '2021-02-26T02:55:20.000Z',
        },
        episodes: {
          id: 3,
          episodeNum: 2,
          cloud: 3,
          thumbnail:
            'https://user-images.githubusercontent.com/72306693/108985620-99c68280-76d4-11eb-9305-50ef35e77c93.png',
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
        thumbnail:
          'https://user-images.githubusercontent.com/72306693/108985620-99c68280-76d4-11eb-9305-50ef35e77c93.png',
        createdAt: '2021-02-24T21:20:11.925Z',
        updatedAt: '2021-02-26T02:55:20.000Z',
      },
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
        thumbnail:
          'https://user-images.githubusercontent.com/72306693/108985620-99c68280-76d4-11eb-9305-50ef35e77c93.png',
        createdAt: '2021-02-24T21:20:11.925Z',
        updatedAt: '2021-02-26T02:55:20.000Z',
      },
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
        thumbnail:
          'https://user-images.githubusercontent.com/72306693/108985620-99c68280-76d4-11eb-9305-50ef35e77c93.png',
        createdAt: '2021-02-24T21:20:11.925Z',
        updatedAt: '2021-02-26T02:55:20.000Z',
      },
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
        thumbnail:
          'https://user-images.githubusercontent.com/72306693/108985620-99c68280-76d4-11eb-9305-50ef35e77c93.png',
        createdAt: '2021-02-24T21:20:11.925Z',
        updatedAt: '2021-02-26T02:55:20.000Z',
      },
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
        thumbnail:
          'https://user-images.githubusercontent.com/72306693/108985620-99c68280-76d4-11eb-9305-50ef35e77c93.png',
        createdAt: '2021-02-24T21:20:11.925Z',
        updatedAt: '2021-02-26T02:55:20.000Z',
      },
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
        thumbnail:
          'https://user-images.githubusercontent.com/72306693/108985620-99c68280-76d4-11eb-9305-50ef35e77c93.png',
        createdAt: '2021-02-24T21:20:11.925Z',
        updatedAt: '2021-02-26T02:55:20.000Z',
      },
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
        thumbnail:
          'https://user-images.githubusercontent.com/72306693/108985620-99c68280-76d4-11eb-9305-50ef35e77c93.png',
        createdAt: '2021-02-24T21:20:11.925Z',
        updatedAt: '2021-02-26T02:55:20.000Z',
      },
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
        thumbnail:
          'https://user-images.githubusercontent.com/72306693/108985620-99c68280-76d4-11eb-9305-50ef35e77c93.png',
        createdAt: '2021-02-24T21:20:11.925Z',
        updatedAt: '2021-02-26T02:55:20.000Z',
      },
    ],
    userWorks: [
      {
        id: 34,
        title: '새침하게 흐린 품이 눈이 올 듯하더니 눈은 아니 오고 얼다가 ',
        author: 'chris',
        category: 3,
        description: '그를 본 순간, 나는 느꼈다...',
        cloud: 2000,
        userLike: 300,
        episodeCount: 0,
        complete: false,
        thumbnail:
          'https://user-images.githubusercontent.com/72306693/108985620-99c68280-76d4-11eb-9305-50ef35e77c93.png',
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
        thumbnail:
          'https://user-images.githubusercontent.com/72306693/108985620-99c68280-76d4-11eb-9305-50ef35e77c93.png',
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
        thumbnail:
          'https://user-images.githubusercontent.com/72306693/108985620-99c68280-76d4-11eb-9305-50ef35e77c93.png',
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
        thumbnail:
          'https://user-images.githubusercontent.com/72306693/108985620-99c68280-76d4-11eb-9305-50ef35e77c93.png',
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
        thumbnail:
          'https://user-images.githubusercontent.com/72306693/108985620-99c68280-76d4-11eb-9305-50ef35e77c93.png',
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
        thumbnail:
          'https://user-images.githubusercontent.com/72306693/108985620-99c68280-76d4-11eb-9305-50ef35e77c93.png',
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
        thumbnail:
          'https://user-images.githubusercontent.com/72306693/108985620-99c68280-76d4-11eb-9305-50ef35e77c93.png',
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
        thumbnail:
          'https://user-images.githubusercontent.com/72306693/108985620-99c68280-76d4-11eb-9305-50ef35e77c93.png',
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
                  onClick={() => {
                    handleMyOn();
                    props.history.push('/main/mypage/recentNovelList');
                  }}
                  aria-hidden="true"
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
                handleAxiosClickedNovelData={handleAxiosClickedNovelData}
              />
            )}
          />
          <Route
            path="/main/fantasy"
            render={() => (
              <FantasyCategory
                fantasyNovelData={fantasyNovelData}
                history={props.history}
                location={props.location}
                match={props.match}
                handleAxiosClickedNovelData={handleAxiosClickedNovelData}
              />
            )}
          />
          <Route
            path="/main/martialArts"
            render={() => (
              <MartialArtsCategory
                martialArtsNovelData={martialArtsNovelData}
                history={props.history}
                location={props.location}
                match={props.match}
                handleAxiosClickedNovelData={handleAxiosClickedNovelData}
              />
            )}
          />
          <Route
            path="/main/romance"
            render={() => (
              <RomanceCategory
                romanceNovelData={romanceNovelData}
                history={props.history}
                location={props.location}
                match={props.match}
                handleAxiosClickedNovelData={handleAxiosClickedNovelData}
              />
            )}
          />
          <Route
            path="/main/mypage"
            render={() => <Mypage myPageData={myPageData} />}
          />
          <Route
            path="/main/mypage/recentNovelList"
            render={() => (
              <HistoryNovel userHistoriesData={myPageData.userHistories} />
            )}
          />
          <Route
            path="/main/novel/:id"
            render={() => (
              <NovelInfo
                clickedNovelData={clickedNovelData}
                handleAxiosClickedNovelData={handleAxiosClickedNovelData}
                nickname={props.nickname}
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
