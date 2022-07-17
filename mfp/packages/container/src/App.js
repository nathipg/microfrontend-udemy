import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

import Header from './components/Header';
import AuthApp from './components/AuthApp';
import MarketingApp from './components/MarketingApp';

const generateClassName = createGenerateClassName({
  productionPrefix: 'co',
});

const App = () => {
  return (
    <BrowserRouter>
      <StylesProvider>
        <Header />
        <Switch>
          <Route path="/auth" component={AuthApp} />
          <Route path="/" component={MarketingApp} />
        </Switch>
      </StylesProvider>
    </BrowserRouter>
  );
};

export default App;
