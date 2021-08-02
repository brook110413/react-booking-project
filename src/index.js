// Bootstrap
import 'bootstrap/scss/bootstrap.scss';
import '@Style/variables.scss';

import React from 'react';
import ReactDOM from 'react-dom';

import App from '@/App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
