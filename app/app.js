
import { Navigation } from 'react-native-navigation';
import { registerScreens } from './containers';
import {createStore,applyMiddleware, combineReducers, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger'
import { Provider } from 'react-redux';
import reducer from './reducers'

//writing state logs in chrome console
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


export function start() {
  registerScreens(store, Provider);

  Navigation.startTabBasedApp({
    tabs: [
       {
            screen: 'com.crachapp2.PopularMovies',
            label: 'Popular Movies',
            icon: require('../img/one.png'),
        },
        {
            screen: 'com.crachapp2.NotPopularMoviesScreen',
            label: 'Not Populart Movies',
            icon: require('../img/two.png'),
        }
    ]
  });
}
