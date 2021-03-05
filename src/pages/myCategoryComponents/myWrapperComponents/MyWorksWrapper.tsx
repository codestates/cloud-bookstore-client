import React from 'react';
import MyWorksList from './MyWorksList';
import { Link } from 'react-router-dom';
import '../myCategoryCSS/MyWorksWrapper.css';

interface UserWorksDataProps {
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
            <MyWorksList key={data.id} userWorksData={data} />
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
