import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import reducers from '../reducers';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import { createLogger } from 'redux-logger';
import { localeReducer as locale } from 'react-localize-redux';

const logger = createLogger();

// In order to use the devtools (https://github.com/gaearon/redux-devtools)
// we prepare it to enhance the store.
const devtools = window.devToolsExtension ? window.devToolsExtension() : f => f;
const middlewareWithHistory = routerMiddleware(browserHistory);

export default function configureStore(initialState) {
  return createStore(
    combineReducers({
      reducers,
      routing: routerReducer,
      locale
    }),
    initialState,
    compose(
      applyMiddleware(
        reduxImmutableStateInvariant(),
        logger,
        middlewareWithHistory,
      ),
      devtools
    )
  );
}
