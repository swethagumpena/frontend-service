/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './App.css';
import './Normalize.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Content from './pages/Content/Content';

const App = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState('false');

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/content">
            <Content />
          </Route>
        </Switch>
      </BrowserRouter>

    </>
  );
};

export default App;
