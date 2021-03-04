import React from 'react';
import './NovelComments.css';
import CommentsList from './commentComponents/CommentsList';

const NovelComments: React.FC = () => {
  return (
    <div>
      <div className="wholeNovelCommentsWrapper">NovelComments</div>
      <CommentsList />
    </div>
  );
};

export default NovelComments;
