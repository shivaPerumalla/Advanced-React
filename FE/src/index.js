import React from 'react';
import ReactDOM from 'react-dom';
// import LoginPage from './containers/LoginPage';
import LoginPage from './containers/LoginPage';
import store from "./store/store";
import {Provider} from "react-redux";

ReactDOM.render(
    <Provider store={store}>
        <LoginPage/>
    </Provider>, document.getElementById('root'));
