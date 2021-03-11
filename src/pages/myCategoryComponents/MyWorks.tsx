import React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import '../../css/MyWorks.css';
import MyWorksWrapper from './myWrapperComponents/MyWorksWrapper';

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

const MyWorks: React.FC<UserWorksDataProps> = (props: UserWorksDataProps) => {
  return (
    <div>
      {props.userWorksData.length !== 0 ? (
        <>
          <MyWorksWrapper
            history={props.history}
            location={props.location}
            match={props.match}
            userWorksData={props.userWorksData}
            handleMyCurrentNewNovel={props.handleMyCurrentNewNovel}
            handleAxiosMyNovelEpisodeList={props.handleAxiosMyNovelEpisodeList}
            myCurrentNewNovel={props.myCurrentNewNovel}
          />
        </>
      ) : (
        <div className="emtyBox">
          <div className="boxGrid">
            <div className="emptyTitle">등록된 작품이 없습니다</div>
            <div className="smallEmtyText">
              웹소설 작가의 꿈, 지금 펼쳐보세요
            </div>
            <Link className="emptyBtn" to="/main/mypage/makeNovel">
              새 작품 쓰기
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyWorks;
