import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import rootReducer from './reducers';
import { loadState, saveState } from './localStorage'

const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const persistedState = loadState();

const store = createStore(
  rootReducer,
  persistedState,
  devTools
);

store.subscribe(() => {
  const state = store.getState();
  saveState(state);
});


const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

registerServiceWorker();
