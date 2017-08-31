import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
// import initialState from './core/initialStore';
// import { getUserMedia } from './actions/userAction';
import rootReducer from './reducers';


const initStore = initialState => createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunkMiddleware)));

if (module.hot) {
  module.hot.accept('./reducers/', () => {
    const nextRootReducer = require('./reducers/index').default; // eslint-disable-line global-require
    initStore.replaceReducer(nextRootReducer);
  });
}

export default initStore;
