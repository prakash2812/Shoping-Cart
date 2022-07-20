import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalContext from './context/GlobalContext';
import { BrowserRouter } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

const rootElement = document.getElementById('root');

ReactDOM.render(
    <BrowserRouter>
        <GlobalContext>
            <App />
        </GlobalContext>
    </BrowserRouter>,
    rootElement
);
