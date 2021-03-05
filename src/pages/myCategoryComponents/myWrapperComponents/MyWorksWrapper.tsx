import React from 'react';
import MyWorksList from './MyWorksList';
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
        {/* <div className="MyWorksMainNovelTextWrapper"></div> */}
        <div className="MyWorksMainNovelInnerWrapper">
          {props.userWorksData.map((data) => (
            <MyWorksList key={data.id} userWorksData={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyWorksWrapper;
