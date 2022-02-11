import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import 'bootstrap/dist/css/bootstrap.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Reducer from './redux/reducers/reducer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(Reducer); 

ReactDOM.render(
  <Provider store = {store}> 
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
