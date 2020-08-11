import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import LoginContext from '../Components/Context/LoginContext';
import Registration from '../Registration';
import * as serviceWorker from './serviceWorker';
import Nav from '.Components/navBar';

ReactDOM.render(
   <BrowserRouter>
   <Nav />
   <Registration />
       <App />
       <Nav />
       <LoginContext />
       <Registration />
     </BrowserRouter>,
      document.getElementById('#root')
    );

    serviceWorker.unregister()