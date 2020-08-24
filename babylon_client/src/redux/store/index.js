import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { errorMiddleware, modalMiddleware } from 'redux/middleware';
import reducer from 'redux/reducers';
const middlewares = [errorMiddleware, modalMiddleware];
const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
