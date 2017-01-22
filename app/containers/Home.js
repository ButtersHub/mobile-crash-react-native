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


class Home extends Component {

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
                        <Text> Discover movies </Text>
                    </TouchableHighlight>
                </View>
                <ScrollView >
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
    resultTitle:{
        fontSize: 16,
        color: '#000',
        paddingLeft: 10,
    },
    resultImage: {
        height: 197,
        width: 350,
    },
    button:{
        paddingTop: 20,
    }
});

function mapStateToProps(state) {
    return {
        discoveredMovies: state.discoveredMovies
    }
}

export default connect(mapStateToProps)(Home);