/* eslint-disable */
import React from 'react';
import { withRouter, RouteComponentProps, Link } from 'react-router-dom';
import '../../css/MyWorks.css';
interface UserWorksDataProps extends RouteComponentProps {
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
  console.log(props.userWorksData);
  return (
    <div>
      {props.userWorksData.length !== 0 ? (
        <div>안녕</div>
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

export default withRouter(MyWorks);
