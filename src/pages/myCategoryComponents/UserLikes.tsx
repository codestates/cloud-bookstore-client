import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import './HistoryNovel.css';
import UserLikesList from '../myCategoryComponents/myWrapperComponents/UserLikesList';

interface userHistoriesDataProps extends RouteComponentProps {
  handleAxiosClickedNovelData: (data: number) => void;
  userLikesData: {
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

const UserLikes: React.FC<userHistoriesDataProps> = (
  props: userHistoriesDataProps,
) => {
  return (
    <div className="wholeHistoryNovelWrapper">
      {props.userLikesData.length === 0 ? (
        <div className="emtyBox">
          <div className="boxGrid">
            <div className="emptyTitle">관심 작품이 없습니다</div>
          </div>
        </div>
      ) : (
        <div className="historyNovelInnerWrapper">
          {props.userLikesData.map((ele) => (
            <UserLikesList
              key={ele.id}
              userLikes={ele}
              handleAxiosClickedNovelData={props.handleAxiosClickedNovelData}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default withRouter(UserLikes);
