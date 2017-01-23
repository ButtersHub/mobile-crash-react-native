import NotPopularMovies from './NotPopularMovies';
import AppContainer from './AppContainer';
import { Navigation } from 'react-native-navigation';

export function registerScreens(store, Provider) {
    Navigation.registerComponent('com.crachapp2.NotPopularMoviesScreen', () => NotPopularMovies, store, Provider);
    Navigation.registerComponent('com.crachapp2.PopularMovies', () => AppContainer, store, Provider);
}
