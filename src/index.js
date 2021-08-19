// Bootstrap
import 'bootstrap/scss/bootstrap.scss';
import '@Style/variables.scss';

// Import Swiper styles
import 'swiper/swiper-bundle.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from '@/App';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
