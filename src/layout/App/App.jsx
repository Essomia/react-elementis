import { useState } from 'react';

import reactLogo from './react.svg';

import styles from './App.module.css';

const App = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((countn) => countn + 1);
  };

  return (
    <div className={styles.root}>
      <div>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className={styles.logo} alt="React logo" />
        </a>
      </div>
      <h1 className={styles.title}>Vite + React</h1>
      <p>
        If you are seeing this page, it means that your Vite + React setup is
        working.
      </p>
      <div className={styles.card}>
        <button type="button" onClick={handleClick}>
          click to count is {count}
        </button>
      </div>
    </div>
  );
};

export default App;
