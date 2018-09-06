import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import rootReducer from './redux/reducers';

const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__ });
function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware,
    ),
  );
  return createStore(rootReducer, initialState, enhancer);
}
const store = configureStore({});

const Test = () => (
  <Provider store={store}>
    <View>
      <Text>Hello</Text>
    </View>
  </Provider>
);
export default Test;
