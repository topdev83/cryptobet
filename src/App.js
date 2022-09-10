import React, { useState } from 'react';
import './App.scss';
//import 'bootstrap/dist/css/bootstrap.min.css';
import Navigations from './components/Navigation';
function App() {
  const [isOpened, setOpened] = useState(false);

  const toggle = () => {
    if (isOpened) {
      setOpened(false);
    } else {
      setOpened(true);
    }
  };
  return (
    <div className={`App ${isOpened ? 'opened' : ''}`}>
      <Navigations toggle={toggle} isOpened={isOpened} />
    </div>
  );
}

export default App;
