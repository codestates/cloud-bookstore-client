/* eslint-disable */ // 현재 setIsLogin이 사용되지 않아 lint에 걸림

import React, { useState } from 'react';
import './App.css';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';

import Landingpage from './pages/Landingpage';
import Mainpage from './pages/Mainpage';

const App: React.FC = () => {
  const [isLogin, setIsLogin] = useState<boolean>(false);

  return (
    <div className="wholeWrapper">
      <Switch>
        <Route path="/landingpage" render={() => <Landingpage />} />
        <Route path="/home" render={() => <Mainpage />} />
        <Route
          path="/"
          render={() => {
            if (isLogin) {
              return <Redirect to="/home" />;
            }
            return <Redirect to="/landingpage" />;
          }}
        />
      </Switch>
    </div>
  );
};

export default withRouter(App);
