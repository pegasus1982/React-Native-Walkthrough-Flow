/**
 * Sample React Native TestPage
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';

import WorkThrough from 'WorkThrough';

const flowData = {
    bgColor: "blue", 
    fgColor: "white", 
    screens:
    [
        {icon: "bell.png", title: "Get Notified", description: "Receive notifications when critical situations occur to stay on top of everything important."},
        {icon: "home.png", title: "Some other screen", description: "bla bla"},
    ]
        
}

export default class TestPage extends Component {
    componentDidMount(){
        StatusBar.setHidden(true);
        setTimeout(() => {
            this.props.navigation.navigate('loginScreen');
        }, 1000);
    }
    render() {
        return (
            <View style={styles.container}>
                <WorkThrough data={flowData}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
    }
});
