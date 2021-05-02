import React from 'react';
import {Route} from 'react-router-dom';

import MainPage from './components/mainPage';
import App from "./components/App";

export default (
    <div>
        <Route exact path='/' component={App}/>
        <Route exact path="/main" component={MainPage}/>
    </div>
)