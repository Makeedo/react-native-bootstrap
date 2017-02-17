import React, { Component } from 'react';
import {
    View,
    Text,
} from 'react-native';

import connectScreen from '../lib/screenConnector';

class Home extends Component {

    static navigatorStyle = {
        navBarHidden: true
    };

    render() {
        return (
            <View>
                <Text>Hello!</Text>
            </View>
        );
    }


}

function mapStateToProps(state){
    return {};
}

export default connectScreen(mapStateToProps, Home);