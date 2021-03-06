import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Cart from './Cart/Cart';
import MainPage from './MainPage/MainPage';
import Orders from './Orders/Orders';
import Layout from './Layout/Layout';

import craeteStore from '../createStore';

const store = craeteStore();
const Routes = () => (
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Layout>
                    <Route path="/" exact component={MainPage}/>
                    <Route path="/cart" exact component={Cart}/>
                    <Route path="/pizza" exact component={MainPage}/>
                    <Route path="/history" exact component={Orders}/>
                </Layout>
            </Switch>
        </BrowserRouter>
    </Provider>
);

export default Routes;