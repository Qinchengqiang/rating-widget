import React from 'react';
import ReactDOM from 'react-dom';
import './asset/style/index.css';
import reportWebVitals from './reportWebVitals';

import routes from './routes';
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
        <BrowserRouter>
            <div>
                {routes}
            </div>
        </BrowserRouter>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
