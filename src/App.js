import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { createStore } from 'redux'
import reducer from './reducers'
import { Provider } from 'react-redux'
import Notification from './components/Notification'

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

window.axios = axios

function App() {
  return (
    <Provider store={store}>
      <Notification />
    </Provider>
  );
}

export default App;
