import React from 'react';
import { MdSearch } from 'react-icons/md';
import '../css/CategoryNav.css';

interface categoryOnProps {
  isCategoryOn: string;
  handleHomeOn(): void;
  handleFantasyOn(): void;
  handleMartialartOn(): void;
  handleRomanceOn(): void;
  handleMyOn(): void;
}

const CategoryNav: React.FC<categoryOnProps> = (props: categoryOnProps) => {
  return (
    <div className="wholeCategoryNav">
      <div className="categoryNavInnerWrapper">
        <div className="categoryNavWrapper">
          <div
            role="button"
            tabIndex={0}
            id={props.isCategoryOn === 'home' ? 'categoryOn' : ''}
            className="categoryBtn"
            onClick={props.handleHomeOn}
            onKeyPress={props.handleHomeOn}
          >
            홈
          </div>
          <div
            role="button"
            tabIndex={0}
            id={props.isCategoryOn === 'fantasy' ? 'categoryOn' : ''}
            className="categoryBtn"
            onClick={props.handleFantasyOn}
            onKeyPress={props.handleFantasyOn}
          >
            판타지
          </div>
          <div
            role="button"
            tabIndex={0}
            id={props.isCategoryOn === 'martialart' ? 'categoryOn' : ''}
            className="categoryBtn"
            onClick={props.handleMartialartOn}
            onKeyPress={props.handleMartialartOn}
          >
            무협
          </div>
          <div
            role="button"
            tabIndex={0}
            id={props.isCategoryOn === 'romance' ? 'categoryOn' : ''}
            className="categoryBtn"
            onClick={props.handleRomanceOn}
            onKeyPress={props.handleRomanceOn}
          >
            로맨스
          </div>
          <div
            role="button"
            tabIndex={0}
            id={props.isCategoryOn === 'my' ? 'categoryOn' : ''}
            className="categoryBtn"
            onClick={props.handleMyOn}
            onKeyPress={props.handleMyOn}
          >
            MY
          </div>
        </div>
        <form
          className="navSearchWrapper"
          name="google_search"
          method="get"
          action="https://www.google.co.kr/search"
        >
          <input
            type="text"
            className="navSearchBox"
            placeholder="검색해주세요."
          ></input>
          <div className="navSearchBtn">
            <MdSearch />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CategoryNav;
