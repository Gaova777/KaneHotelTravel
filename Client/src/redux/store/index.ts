import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducer/index';
import thunk from 'redux-thunk';

declare global {
   interface Window {
     __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
   }
}

const composeEnhancers =
   (typeof window !== 'undefined' &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ as typeof compose) ||
   compose;

const store = createStore(
   rootReducer,
   composeEnhancers(applyMiddleware(thunk))
);

export default store;

// RootState y AppDispatch serán los tipos para poder usar los hooks useDispatch y useSelector

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch