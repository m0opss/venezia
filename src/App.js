import React from 'react';

import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import Footer from './components/Footer/Footer';
import store from './store';
import {Home} from './pages/Home';
import {Contacts} from './pages/Contacts';
import Header from './components/Header/Header';
import {MyBasket} from './pages/MyBasket';

import './App.scss';

const App = () => (
  <BrowserRouter>
    <Provider store={store}>
      <Header/>
      <div className='container'>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/contacts' component={Contacts}/>
          <Route path='/basket' component={MyBasket}/>
        </Switch>
      </div>
      <Footer/>
    </Provider>
  </BrowserRouter>
);

export default App;
