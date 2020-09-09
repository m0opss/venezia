import React, { Fragment } from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Navbar } from './components/Navbar/Navbar';

const App = () => (
    <BrowserRouter>
        <Provider store={store}>
            <Navbar />
            <div className='container'>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/about' component={About} />
            </Switch>
            </div>
        </Provider>
    </BrowserRouter>
);

export default App;
