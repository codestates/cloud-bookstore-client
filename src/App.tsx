/* eslint-disable */ // 현재 setIsLogin이 사용되지 않아 lint에 걸림

import React, { useState } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import Landingpage from './pages/Landingpage';
import Mainpage from './pages/Mainpage';

function App() {
  const [isLogin, setIsLogin] = useState<boolean>(false);

  return (
    <>
      <Switch>
        <Route path="/landingpage" render={() => <Landingpage />} />
        <Route path="/mainpage" render={() => <Mainpage />} />
        <Route
          path="/"
          render={() => {
            if (isLogin) {
              return <Redirect to="/mainpage" />;
            }
            return <Redirect to="/landingpage" />;
          }}
        />
      </Switch>
    </>
  );
}

export default withRouter(App);
