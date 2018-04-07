import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import Main from './app/containers/main';

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

ReactDOM.render(
  <Main />,
  document.getElementById('root')
);
