/**
 * Created by levv on 22/01/2017.
 */
import React, { Component } from 'react';
import ReactNative from 'react-native'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {ActionCreators} from '../actions'
import PopularMovies from './PopularMovies';
import {
    Text,
    View
} from 'react-native';


class AppContainer extends Component {
    render(){
        return <PopularMovies {...this.props} />
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(ActionCreators, dispatch)
}

export default connect ((state) => { return {} }, mapDispatchToProps) (AppContainer);