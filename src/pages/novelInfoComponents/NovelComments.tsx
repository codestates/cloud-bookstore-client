import React from 'react';
import './NovelComments.css';
import { IconContext } from 'react-icons';
import { IoMdRefresh } from 'react-icons/io';

import MakeNewComment from './commentComponents/MakeNewComment';
import CommentsList from './commentComponents/CommentsList';

interface CommentsDataProps {
  commentsData: {
    id: number;
    nickname: string;
    comment: string;
    novelId: number;
    createdAt: string;
    updatedAt: string;
  }[];
}

const NovelComments: React.FC<CommentsDataProps> = (
  props: CommentsDataProps,
) => {
  return (
    <IconContext.Provider value={{ size: '1.4em', color: '#464646' }}>
      <div className="wholeNovelCommentsWrapper">
        <div className="novelCommentsTextRefreshWrapper">
          <div className="novelCommentsText">
            작품 리뷰({props.commentsData.length})
          </div>
          <div className="novelRefreshBtn">
            <IoMdRefresh />
          </div>
        </div>
        <MakeNewComment />
        <div className="commentsListWrapper">
          {props.commentsData.map((data) => (
            <CommentsList key={data.id} data={data} />
          ))}
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default NovelComments;
