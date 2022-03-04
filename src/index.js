import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import './index.css';
import App from './App';

const RenderApp = () => {
  return (
    <Provider store={store}>
      <App  />
    </Provider>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <RenderApp />
  </React.StrictMode>,
  document.getElementById('root')
);


