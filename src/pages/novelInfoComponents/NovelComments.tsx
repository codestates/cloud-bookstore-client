import React from 'react';
import './NovelComments.css';
import MakeNewComment from './commentComponents/MakeNewComment';
import CommentsList from './commentComponents/CommentsList';

const NovelComments: React.FC = () => {
  return (
    <div>
      <div className="wholeNovelCommentsWrapper">
        <MakeNewComment />
        <CommentsList />
      </div>
    </div>
  );
};

export default NovelComments;
