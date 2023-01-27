import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './components/App/App';

import './index.css';

const Root = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// eslint-disable-next-line no-undef
const rootId = document.getElementById('root');

ReactDOM.createRoot(rootId).render(Root);
