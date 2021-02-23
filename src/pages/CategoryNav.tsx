import React from 'react';
import '../css/CategoryNav.css';

const CategoryNav: React.FC = () => {
  return (
    <div className="wholeCategoryNav">
      <div className="categoryNavInnerWrapper">
        <div className="categoryNavWrapper">
          <div id="cateHomeBtn" className="categoryBtn">
            홈
          </div>
          <div id="cateFantasyBtn" className="categoryBtn">
            판타지
          </div>
          <div id="cateMartialartsBtn" className="categoryBtn">
            무협
          </div>
          <div id="cateRomanceBtn" className="categoryBtn">
            로맨스
          </div>
          <div id="cateMyBtn" className="categoryBtn">
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
