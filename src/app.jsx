import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import './styles/app.css';
import Header from './components/header';
import Properties from './components/properties';
import AddProperty from './components/add-property';
import HeaderImage from './components/header-image';

const App = () => (
  <Fragment>
    <Header />
    <HeaderImage />
    <Switch>
      <Route exact path="/" component={Properties} />
      <Route exact path="/add-property" component={AddProperty} />
    </Switch>
  </Fragment>
);

export default App;
