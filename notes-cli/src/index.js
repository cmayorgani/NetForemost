import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

import createDebounce from "redux-debounced";
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider} from 'react-redux';
import thunk from 'redux-thunk'

import rReducer from './redux/config';

import './index.css';

const middlewares = [thunk, createDebounce()];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rReducer, {}, composeEnhancers(applyMiddleware(...middlewares)));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
