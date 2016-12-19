import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
 


import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'

import rootReducer from './reducers'

//import todoApp from './reducers';
import App from './components/App';
const loggerMiddleware = createLogger()

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
    loggerMiddleware // neat middleware that logs actions
  )
)

// store.dispatch(selectSubreddit('reactjs'))
// store.dispatch(fetchPosts('reactjs')).then(() =>
//   console.log(store.getState())
// )


 
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)