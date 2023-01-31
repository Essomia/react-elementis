import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './layout/App/App';

import './index.css';

const Root = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// eslint-disable-next-line no-undef
const idRoot = document.getElementById('root');

ReactDOM.createRoot(idRoot).render(Root);
