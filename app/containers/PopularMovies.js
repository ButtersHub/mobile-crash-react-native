/**
 * Created by levv on 22/01/2017.
 */
import React, { Component } from 'react'
import ReactNative from 'react-native'
import {connect} from 'react-redux'

import {
    ScrollView,
    View,
    Text,
    Image,
    StyleSheet,
    TouchableHighlight
} from 'react-native'


class PopularMovies extends Component {

    constructor(props) {
        super(props);
    }

    discoverPresses() {
        this.props.fetchMovies();
    }

    movies() {
        return Object.keys(this.props.discoveredMovies).map(key => this.props.discoveredMovies[key])
    }

    render() {
        return (
            <View>
                <View>
                    <TouchableHighlight style={styles.button} onPress={ () => this.discoverPresses()}>
                        <Text> Discover Popular Movies </Text>
                    </TouchableHighlight>
                </View>
                <ScrollView style={styles.scrollSection} >
                    {this.movies().map((movie) => {
                        console.log('0');
                        return <View key={movie.id}>
                            <Image  source={{uri: 'https://image.tmdb.org/t/p/w500/'+movie.backdrop_path}} style={styles.resultImage}/>
                            <Text style={styles.resultTitle}>{movie.title}</Text>
                        </View>
                    })}
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    scrollSection: {

    },

    resultTitle:{
        fontSize: 16,
        color: '#000',
        paddingLeft: 10,
    },
    resultImage: {
        height: 150,
        width: 400,
        alignSelf: 'stretch',
    },
    button:{
        paddingTop: 5,
        backgroundColor: '#fff936'
    }
});

function mapStateToProps(state) {
    return {
        discoveredMovies: state.discoveredMovies
    }
}

export default connect(mapStateToProps)(PopularMovies);