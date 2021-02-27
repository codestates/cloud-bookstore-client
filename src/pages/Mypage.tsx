import React, { useState } from 'react';
import {
  withRouter,
  BrowserRouter,
  Link,
  Route,
  Switch,
} from 'react-router-dom';
import '../css/Mypage.css';
import '../css/MypageNav.css';
import MyWorks from './myCategotyComponents/MyWorks';
import HistoryNovel from './myCategotyComponents/HistoryNovel';
import UserLikes from './myCategotyComponents/UserLikes';

const Mypage: React.FC = () => {
  const [isMyCategoryOn, setIsMyCategoryOn] = useState<string>('historyNovel');
  const handleHistoryNovelOn = (): void => {
    setIsMyCategoryOn('historyNovel');
  };
  const handleUserLikesOn = (): void => {
    setIsMyCategoryOn('userLikes');
  };
  const handleMyworksOn = (): void => {
    setIsMyCategoryOn('myWorks');
  };
  return (
    <BrowserRouter>
      <nav>
        <div className="mywholeCategoryNav">
          <div className="mycategoryNavInnerWrapper">
            <div className="mycategoryNavWrapper">
              <Link
                to="/mypage/recentNovelList"
                role="button"
                id={isMyCategoryOn === 'historyNovel' ? 'mycategoryOn' : ''}
                className="mycategoryBtn"
                onClick={handleHistoryNovelOn}
                onKeyPress={handleHistoryNovelOn}
              >
                최근 본 작품
              </Link>
              <Link
                to="/mypage/concernNovelList"
                role="button"
                id={isMyCategoryOn === 'userLikes' ? 'mycategoryOn' : ''}
                className="mycategoryBtn"
                onClick={handleUserLikesOn}
                onKeyPress={handleUserLikesOn}
              >
                관심 작품
              </Link>
              <Link
                to="/mypage/myNovelList"
                role="button"
                id={isMyCategoryOn === 'myWorks' ? 'mycategoryOn' : ''}
                className="mycategoryBtn"
                onClick={handleMyworksOn}
                onKeyPress={handleMyworksOn}
              >
                내 작품
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <Switch>
        <Route path="/mypage/recentNovelList">
          <HistoryNovel />
        </Route>
        <Route path="/mypage/concernNovelList">
          <UserLikes />
        </Route>
        <Route path="/mypage/myNovelList">
          <MyWorks />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default withRouter(Mypage);
