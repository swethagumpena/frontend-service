/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './App.css';
import './Normalize.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Content from './pages/Content/Content';

const App = () => {
  const [error, setError] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    setLoggedIn(false);
  }, []);

  const loginHandleSubmit = () => {
    setLoggedIn(true);
  };

  return (
    <>
      <BrowserRouter>
        <Switch>
          {loggedIn ? null : <Home loginHandleSubmit={loginHandleSubmit} />}

          {/* <Route path="/" exact>
            <Home />
          </Route> */}
          <Route path="/content" exact>
            <Content />
          </Route>
        </Switch>
      </BrowserRouter>

    </>
  );
};

export default App;
