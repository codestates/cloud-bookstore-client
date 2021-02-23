import React, { useState } from 'react';
import '../css/CategoryNav.css';

const CategoryNav: React.FC = () => {
  const [isCategoryOn, setIsCategoryOn] = useState<string>('home');
  const handleHomeOn = () => {
    setIsCategoryOn('home');
  };
  const handleFantasyOn = () => {
    setIsCategoryOn('fantasy');
  };
  return (
    <div className="wholeCategoryNav">
      <div className="categoryNavInnerWrapper">
        <div className="categoryNavWrapper">
          <div
            role="presentation"
            id={isCategoryOn === 'home' ? 'categoryOn' : ''}
            className="categoryBtn"
            onClick={handleHomeOn}
            onKeyPress={handleHomeOn}
          >
            홈
          </div>
          <div
            role="presentation"
            id={isCategoryOn === 'fantasy' ? 'categoryOn' : ''}
            className="categoryBtn"
            onClick={handleFantasyOn}
            onKeyDown={handleFantasyOn}
          >
            판타지
          </div>
          <div id="categoryOn" className="categoryBtn">
            무협
          </div>
          <div id="categoryOn" className="categoryBtn">
            로맨스
          </div>
          <div id="categoryOn" className="categoryBtn">
            MY
          </div>
        </div>
        <div className="navSearchWrapper">
          <input
            type="text"
            className="navSearchBox"
            placeholder="검색해주세요."
          ></input>
          <div className="navSearchBtn"></div>
        </div>
      </div>
    </div>
  );
};

export default CategoryNav;
