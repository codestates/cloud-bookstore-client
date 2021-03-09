import React from 'react';
import MyWorksList from './MyWorksList';
import { Link, RouteComponentProps } from 'react-router-dom';
import '../myCategoryCSS/MyWorksWrapper.css';

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
interface UserWorksDataProps extends RouteComponentProps {
  handleAxiosMyNovelEpisodeList: (novelId: number) => void;
  handleMyCurrentNewNovel: (data: CurrentNewNovelProps) => void;
  myCurrentNewNovel: {
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
  userWorksData: {
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
const MyWorksWrapper: React.FC<UserWorksDataProps> = (
  props: UserWorksDataProps,
) => {
  return (
    <div className="MypageContentWrapper">
      <div className="MyWorksMainPageNovelWrapper">
        {/* <div className="MyWorksMainNovelTextWrapper">더보기</div> */}
        <div className="MyWorksMainNovelInnerWrapper">
          {props.userWorksData.map((data) => (
            <MyWorksList
              handleMyCurrentNewNovel={props.handleMyCurrentNewNovel}
              history={props.history}
              location={props.location}
              match={props.match}
              key={data.id}
              userWorksData={data}
              handleAxiosMyNovelEpisodeList={
                props.handleAxiosMyNovelEpisodeList
              }
              myCurrentNewNovel={props.myCurrentNewNovel}
            />
          ))}
        </div>
      </div>
      <Link className="MyEmptyBtn" to="/main/mypage/makeNovel">
        새 작품 쓰기
      </Link>
    </div>
  );
};

export default MyWorksWrapper;
