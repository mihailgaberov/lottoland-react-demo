/**
 * Created by mgab on 05/05/2017.
 */

import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from '../reducers'
import rootSaga from '../sagas'

const configureStore = () => {

  const sagaMiddleware = createSagaMiddleware()
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  return {
    ...createStore(
      rootReducer,
      composeEnhancers(applyMiddleware(sagaMiddleware))
    ),
    runSaga: sagaMiddleware.run(rootSaga)
  }
}

export default configureStore