import React, { useState } from 'react';
import {
  withRouter,
  Route,
  Switch,
  RouteComponentProps,
} from 'react-router-dom';
import '../css/Mypage.css';
import '../css/MypageNav.css';

import MyWorks from './myCategoryComponents/MyWorks';
import HistoryNovel from './myCategoryComponents/HistoryNovel';
import UserLikes from './myCategoryComponents/UserLikes';
import MakeNovel from './myCategoryComponents/MakeNovel';

const Mypage: React.FC<RouteComponentProps> = (props: RouteComponentProps) => {
  const [isMyCategoryOn, setIsMyCategoryOn] = useState<string>(
    '/main/mypage/recentNovelList',
  );
  const handleHistoryNovelOn = (): void => {
    setIsMyCategoryOn('/main/mypage/recentNovelList');
  };
  const handleUserLikesOn = (): void => {
    setIsMyCategoryOn('/main/mypage/concernNovelList');
  };
  const handleMyworksOn = (): void => {
    setIsMyCategoryOn('/main/mypage/myNovelList');
  };
  return (
    <div>
      <nav>
        <div className="mywholeCategoryNav">
          <div className="mycategoryNavInnerWrapper">
            <div className="mycategoryNavWrapper">
              <div
                role="presentation"
                id={
                  isMyCategoryOn === '/main/mypage/recentNovelList'
                    ? 'mycategoryOn'
                    : ''
                }
                className="mycategoryBtn"
                onClick={() => {
                  handleHistoryNovelOn();
                  props.history.push('/main/mypage/recentNovelList');
                }}
                onKeyPress={handleHistoryNovelOn}
              >
                최근 본 작품
              </div>
              <div
                role="presentation"
                id={
                  isMyCategoryOn === '/main/mypage/concernNovelList'
                    ? 'mycategoryOn'
                    : ''
                }
                className="mycategoryBtn"
                onClick={() => {
                  handleUserLikesOn();
                  props.history.push('/main/mypage/concernNovelList');
                }}
                onKeyPress={handleUserLikesOn}
              >
                관심 작품
              </div>
              <div
                role="presentation"
                id={
                  isMyCategoryOn === '/main/mypage/myNovelList'
                    ? 'mycategoryOn'
                    : ''
                }
                className="mycategoryBtn"
                onClick={() => {
                  handleMyworksOn();
                  props.history.push('/main/mypage/myNovelList');
                }}
                onKeyPress={handleMyworksOn}
              >
                내 작품
              </div>
            </div>
          </div>
        </div>
      </nav>
      <Switch>
        <Route
          path="/main/mypage/recentNovelList"
          render={() => <HistoryNovel />}
        />
        <Route
          path="/main/mypage/concernNovelList"
          render={() => <UserLikes />}
        />
        <Route path="/main/mypage/myNovelList" render={() => <MyWorks />} />
        <Route path="/main/mypage/makeNovel" render={() => <MakeNovel />} />
      </Switch>
    </div>
  );
};

export default withRouter(Mypage);
