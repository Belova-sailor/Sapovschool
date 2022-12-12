import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';
import Marvelservice from './services/Marvelservice';

import './style/style.scss';

const marvelservice = new Marvelservice();
marvelservice.getAllCharacters().then(res => console.log(res));

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

