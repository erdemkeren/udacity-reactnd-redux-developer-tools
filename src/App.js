import axios from 'axios';
import React from 'react';
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
      <p>
        Send a post request to
        &nbsp;<a href="http://webinar-4.erdemkeren.com/api/v1/generate/notification?username=yournamehere">
          http://webinar-4.erdemkeren.com/api/v1/generate/notification?username=yournamehere
        </a>&nbsp;
        to create an example notification.
        <br/><br/>
        Then refresh this page to see the new notification.
      </p>
      <hr />
      <Notification />
    </Provider>
  );
}

export default App;
