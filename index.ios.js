/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware, combineReducers, compose} from 'redux';
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import reducer from './app/reducers'
import AppContainer from './app/containers/AppContainer';
import {
    AppRegistry,
} from 'react-native';

const loggerMiddleware = createLogger({predicate: (getState,action)=>__DEV__});

// configuring the store
function configureStore(initialState){
    const enhancer = compose(
        applyMiddleware(
            thunkMiddleware,
            loggerMiddleware,
        ),
    );
    return createStore(reducer, initialState, enhancer);
}

//initialisation of store
const store = configureStore({});


const App = () => (
    <Provider store={store}>
      <AppContainer />
    </Provider>
);

AppRegistry.registerComponent('CrachApp2', () => App);

