import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import './HistoryNovel.css';
import UserLikesList from '../myCategoryComponents/myWrapperComponents/UserLikesList';

interface userHistoriesDataProps extends RouteComponentProps {
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
      <div className="historyNovelInnerWrapper">
        {props.userLikesData.length === 0 ? (
          <></>
        ) : (
          props.userLikesData.map((ele) => (
            <UserLikesList key={ele.id} userLikes={ele} />
          ))
        )}
      </div>
    </div>
  );
};

export default withRouter(UserLikes);
