import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import App from './App';
import { Provider } from 'react-redux';
import promiseMiddleware from 'redux-promise';
import ReduxThunk from 'redux-thunk';
import Reducer from './_reducers';
import{ applyMiddleware, createStore } from 'redux';

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware, ReduxThunk)(createStore)

ReactDOM.render((
  <Provider
      store={createStoreWithMiddleware(Reducer,
          window.__REDUX_DEVTOOLS_EXTENSION__&&
          window.__REDUX_DEVTOOLS_EXTENSION__()
        )}
  >

 <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>
  
), document.getElementById('root'));

serviceWorker.unregister();