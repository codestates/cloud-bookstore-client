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
import EditNovel from './myCategoryComponents/EditNovel';
import MakeNovel from './myCategoryComponents/MakeNovel';
import MyNovelEpisodeList from './myCategoryComponents/MyNovelEpisodeList';
import axios from 'axios';

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

  const [myNovelEpisodeList, setMyNovelEpisodeList] = useState([
    {
      id: 7,
      episodeNum: 1,
      novelId: 34,
      title: '내가 자존심이 없냐? 돈이 없지',
      text:
        '  “여보게 돈 떨어졌네, 왜 돈을 막 끼얹나.”\r\n 이런 말을 하며 일변 돈을 줍는다. 김첨지는 취한 중에도 돈의 거처를 살\r\n피는 듯이 눈을 크게 떠서 땅을 내려다보다가 불시에 제 하는 짓이 너무 더\r\n럽다는 듯이 고개를 소스라치자 더욱 성을 내며,\r\n  “봐라 봐! 이 더러운 놈들아, 내가 돈이 없나, 다리뼉다구를 꺾어 놓을\r\n놈들 같으니.”\r\n하고 치삼의 주워 주는 돈을 받아,\r\n  “이 원수엣돈! 이 육시를 할 돈!”\r\n하면서 풀매질을 친다. 벽에 맞아 떨어진 돈은 다시 술 끓이는 양푼에 떨어\r\n지며 정당한 매를 맞는다는 듯이 쨍 하고 울었다.\r\n 곱배기 두 잔은 또 부어질 겨를도 없이 말려 가고 말았다. 김첨지는 입술\r\n과 수염에 붙은 술을 빨아들이고 나서 매우 만족한 듯이 그 솔잎 송이 수염\r\n을 쓰다듬으며,\r\n  “또 부어, 또 부어.”\r\n라고 외쳤다.\r\n 또 한 잔 먹고 나서 김첨지는 치삼의 어깨를 치며 문득 껄껄 웃는다. 그\r\n웃음 소리가 어떻게 컸던지 술집에 있는 이의 눈은 모두 김첨지에게로 몰리\r\n었다. 웃는 이는 더욱 웃으며,\r\n  “여보게 치삼이, 내 우스운 이야기 하나 할까. 오늘 손을 태고 정거장에\r\n가지 않았겠나.”\r\n  “그래서.”\r\n  “갔다가 그저 오기가 안됐데그려. 그래 전차 정류장에서 어름어름하며 손\r\n님 하나를 태울 궁리를 하지 않았나. 거기 마침 마마님이신지 여학생이신지\r\n(요새야 어디 논다니와 아가씨를 구별할 수가 있던가) 망토를 잡수시고 비\r\n를 맞고 서 있겠지. 슬근슬근 가까이 가서 인력거 타시랍시요 하고 손가방\r\n을 받으랴니까 내 손을 탁 뿌리치고 홱 돌아서더니만  ‘왜 남을 이렇게 귀\r\n찮게 굴어!’   그 소리야말로 꾀꼬리 소리지, 허허!”\r\n 김첨지는 교묘하게도 정말 꾀꼬리 같은 소리를 내었다. 모든 사람은 일시\r\n에 웃었다.\r\n  “빌어먹을 깍쟁이 같은 년, 누가 저를 어쩌나,   ‘왜 남을 귀찮게 굴어!’\r\n어이구 소리가 처신도 없지, 허허.”\r\n 웃음 소리들은 높아졌다. 그러나 그 웃음 소리들이 사라도 지기 전에 김첨\r\n지는 훌쩍훌쩍 울기 시작하였다.\r\n 치삼은 어이없이 주정뱅이를 바라보며,\r\n  “금방 웃고 지랄을 하더니 우는 건 또 무슨 일인가.”\r\n 김첨지는 연해 코를 들이마시며,\r\n  “우리 마누라가 죽었다네.”\r\n  “뭐, 마누라가 죽다니, 언제?”\r\n  “이놈아 언제는, 오늘이지.”\r\n  “엣기 미친놈, 거짓말 말아.”\r\n  “거짓말은 왜, 참말로 죽었어, 참말로…… 마누라 시체를 집에 뻐들쳐 놓\r\n고 내가 술을 먹다니, 내가 죽일 놈이야, 죽일 놈이야.”\r\n하고 김첨지는 엉엉 소리를 내어 운다.\r\n 치삼은 흥이 조금 깨어지는 얼굴로,\r\n  “원 이 사람이, 참말을 하나 거짓말을 하나. 그러면 집으로 가세, 가.”\r\n하고 우는 이의 팔을 잡아당기었다.\r\n 치삼의 끄는 손을 뿌리치더니 김첨지는 눈물이 글썽글썽한 눈으로 싱그레\r\n웃는다.\r\n  “죽기는 누가 죽어.”\r\n하고 득의가 양양.\r\n  “죽기는 왜 죽어, 생때같이 살아만 있단다. 그 오라질 년이 밥을 죽이지.\r\n인제 나한테 속았다.”\r\n하고 어린애 모양으로 손뼉을 치며 웃는다.\r\n  “이 사람이 정말 미쳤단 말인가. 나도 아주먼네가 앓는단 말은 들었는\r\n데.”\r\n하고 치삼이도 어느 불안을 느끼는 듯이 김첨지에게 또 돌아가라고 권하였\r\n다.\r\n  “안 죽었어, 안 죽었대도 그래.”\r\n 김첨지는 화증을 내며 확신 있게 소리를 질렀으되 그 소리엔 안 죽은 것을\r\n믿으려고 애쓰는 가락이 있었다. 기어이 일 원 어치를 채워서 곱배기 한 잔\r\n씩 더 먹고 나왔다. 궂은비는 의연히 추적추적 내린다.\r\n 김첨지는 취중에도 설렁탕을 사가지고 집에 다다랐다. 집이라 해도 물론\r\n셋집이요 또 집 전체를 세든 게 아니라 안과 뚝 떨어진 행랑방 한 간을 빌\r\n려 든 것인데 물을 길어 대고 한 달에 일 원씩 내는 터이다. 만일 김첨지가\r\n주기를 띠지 않았던들 한 발을 대문에 들여놓았을 제 그곳을 지배하는 무시\r\n무시한 정적(靜寂) ― 폭풍우가 지나간 뒤의 바다 같은 정적이 다리가 떨렸\r\n으리라. 쿨룩거리는 기침 소리도 들을 수 없다. 그르렁거리는 숨소리조차\r\n들을 수 없다. 다만 이 무덤 같은 침묵을 깨뜨리는 ― 깨뜨린다느니보다 한\r\n층 더 침묵을 깊게 하고 불길하게 하는 빡빡 하는 그윽한 소리, 어린애의\r\n젖 빠는 소리가 날 뿐이다. 만일 청각(聽覺)이 예민한 이 같으면 그 빡빡\r\n소리는 빨 따름이요, 꿀떡꿀떡 하고 젖 넘어가는 소리가 없으니 빈 젖을 빤\r\n다는 것도 짐작할는지 모르리라.\r\n 혹은 김첨지도 이 불길한 침묵을 짐작했는지도 모른다. 그렇지 않으면 대\r\n문에 들어서자마자 전에 없이,\r\n  “이 난장맞을 년, 남편이 들어오는데 나와 보지도 않아, 이 오라질 년.”\r\n이라고 고함을 친 게 수상하다. 이 고함이야말로 제 몸을 엄습해 오는 무시\r\n무시한 증을 쫓아 버리려는 허장성세인 까닭이다.\r\n 하여간 김첨지는 방문을 왈칵 열었다. 구역을 나게 하는 추기 ― 떨어진\r\n삿자리 밑에서 나온 먼지내 빨지 않은 기저귀에서 나는 똥내와 오줌내 가지\r\n각색 때가 켜켜이 앉은 옷내 병인의 땀 썩은 내가 섞인 추기가 무딘 김첨지\r\n의 코를 찔렀다.\r\n 방 안에 들어서며 설렁탕을 한구석에 놓을 사이도 없이 주정꾼은 목청을\r\n있는 대로 다 내어 호통을 쳤다.\r\n  “이런 오라질 년, 주야장천 누워만 있으면 제일이야. 남편이 와도 일어나\r\n지를 못해.”\r\n라는 소리와 함께 발길로 누운 이의 다리를 몹시 찼다. 그러나 발길에 채이\r\n는 건 사람의 살이 아니고 나무등걸과 같은 느낌이 있었다. 이때에 빽빽 소\r\n리가 응아 소리로 변하였다. 개똥이가 물었던 젖을 빼어 놓고 운다. 운대도\r\n온 얼굴을 찡그려 붙여서 운다는 표정을 할 뿐이다. 응아 소리도 입에서 나\r\n는 게 아니고 마치 뱃속에서 나는 듯하였다. 울다가 울다가 목도 잠겼고 또\r\n울 기운조차 시진한 것 같다.\r\n 발로 차도 그 보람이 없는 걸 보자 남편은 아내의 머리맡으로 달려들어 그\r\n야말로 까치집 같은 환자의 머리를 꺼들어 흔들며,\r\n  “이년아, 말을 해, 말을! 입이 붙었어, 이 오라질 년!”\r\n  “……”\r\n  “으응, 이것 봐, 아무 말이 없네.”\r\n  “……”\r\n  “이년아, 죽었단 말이냐, 왜 말이 없어.”\r\n  “……”\r\n  “으응, 또 대답이 없네. 정말 죽었나 버이.”\r\n이러다가 누운 이의 흰 창을 덮은 위로 치뜬 눈을 알아보자마자,\r\n  “이 눈깔! 이 눈깔! 왜 나를 바라보지 못하고 천장만 보느냐, 응.”\r\n하는 말 끝엔 목이 메였다. 그러자 산 사람의 눈에서 떨어진 닭의 똥 같은\r\n눈물이 죽은 이의 뻣뻣한 얼굴을 어룽어룽 적시었다. 문득 김첨지는 미친\r\n듯이 제 얼굴을 죽은 이의 얼굴에 한데 비비대며 중얼거렸다.\r\n  “설렁탕을 사다 놓았는데 왜 먹지를 못하니, 왜 먹지를 못하니…… 괴상\r\n하게도 오늘은! 운수가, 좋더니만…….”',
      thumbnail: '',
      cloud: 0,
      createdAt: '2021-02-24T21:24:59.962Z',
      updatedAt: '2021-02-26T14:43:22.768Z',
    },
    {
      id: 11,
      episodeNum: 2,
      novelId: 34,
      title: '두 번째 만남',
      text: '그를 본 순간, 나는 느꼈다...',
      thumbnail:
        'https://user-images.githubusercontent.com/72306693/108985620-99c68280-76d4-11eb-9305-50ef35e77c93.png',
      cloud: 0,
      createdAt: '2021-02-26T16:01:48.765Z',
      updatedAt: '2021-02-26T16:01:48.765Z',
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
          render={() => (
            <MyWorks
              history={props.history}
              location={props.location}
              match={props.match}
              userWorksData={props.myPageData.userWorks}
              handleAxiosMyNovelEpisodeList={handleAxiosMyNovelEpisodeList}
              handleMyCurrentNewNovel={handleMyCurrentNewNovel}
            />
          )}
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
          path="/main/mypage/MyNovelEpisodeList/:id"
          render={() => (
            <MyNovelEpisodeList
              handleAxiosMyPage={props.handleAxiosMyPage}
              myCurrentNewNovel={myCurrentNewNovel}
              myNovelEpisodeList={myNovelEpisodeList}
            />
          )}
        />
        <Route></Route>
      </Switch>
    </div>
  );
};

export default withRouter(Mypage);
