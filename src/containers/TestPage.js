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
import {icons} from '@assets';

const flowData = {
    bgColor: "blue", 
    fgColor: "white", 
    screens:
    [
        {icon: "bell.png", title: "Get Notified", description: "Receive notifications when critical situations occur to stay on top of everything important."},
        {icon: "home.png", title: "Some other screen", description: "bla bla"},
        {icon: "plane.png", title: "Get Notified", description: "Receive notifications when critical situations bla bla."},
    ]
        
}

export default class TestPage extends Component {
    componentDidMount(){
        StatusBar.setHidden(true);
        setTimeout(() => {
            this.props.navigation.navigate('loginScreen');
        }, 1000);
    }

    _onWorkFlowFinished = () => {
        // alert('goto next page');
        this.props.navigation.navigate('AfterTestPage');
    }
    render() {
        return (
            <View style={styles.container}>
                <WorkThrough
                    iconpackage = {icons}
                    data={flowData}
                    onFinished = {this._onWorkFlowFinished}/>
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
