import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import './styles/index.css';
import Main from './app/containers/main';
import configureStore from './app/store/configure-store';

const store = configureStore();

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
