import React from 'react';
import './NovelComments.css';
import { IconContext } from 'react-icons';
import { IoMdRefresh } from 'react-icons/io';

import MakeNewComment from './commentComponents/MakeNewComment';
import CommentsList from './commentComponents/CommentsList';

const NovelComments: React.FC = () => {
  return (
    <IconContext.Provider value={{ size: '1.4em', color: '#464646' }}>
      <div className="wholeNovelCommentsWrapper">
        <div className="novelCommentsTextRefreshWrapper">
          <div className="novelCommentsText">작품 리뷰(32)</div>
          <div className="novelRefreshBtn">
            <IoMdRefresh />
          </div>
        </div>
        <MakeNewComment />
        <CommentsList />
      </div>
    </IconContext.Provider>
  );
};

export default NovelComments;
