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
  const handleMartialartOn = () => {
    setIsCategoryOn('martialart');
  };
  const handleRomanceOn = () => {
    setIsCategoryOn('romance');
  };
  const handleMyOn = () => {
    setIsCategoryOn('my');
  };
  return (
    <div className="wholeCategoryNav">
      <div className="categoryNavInnerWrapper">
        <div className="categoryNavWrapper">
          <div
            role="button"
            tabIndex={0}
            id={isCategoryOn === 'home' ? 'categoryOn' : ''}
            className="categoryBtn"
            onClick={handleHomeOn}
            onKeyPress={handleHomeOn}
          >
            홈
          </div>
          <div
            role="button"
            tabIndex={0}
            id={isCategoryOn === 'fantasy' ? 'categoryOn' : ''}
            className="categoryBtn"
            onClick={handleFantasyOn}
            onKeyPress={handleFantasyOn}
          >
            판타지
          </div>
          <div
            role="button"
            tabIndex={0}
            id={isCategoryOn === 'martialart' ? 'categoryOn' : ''}
            className="categoryBtn"
            onClick={handleMartialartOn}
            onKeyPress={handleMartialartOn}
          >
            무협
          </div>
          <div
            role="button"
            tabIndex={0}
            id={isCategoryOn === 'romance' ? 'categoryOn' : ''}
            className="categoryBtn"
            onClick={handleRomanceOn}
            onKeyPress={handleRomanceOn}
          >
            로맨스
          </div>
          <div
            role="button"
            tabIndex={0}
            id={isCategoryOn === 'my' ? 'categoryOn' : ''}
            className="categoryBtn"
            onClick={handleMyOn}
            onKeyPress={handleMyOn}
          >
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
