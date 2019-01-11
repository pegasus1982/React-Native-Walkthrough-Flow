import React , { Component } from 'react';
import {View, Image, Text, StyleSheet } from 'react-native';
import { icons } from '@assets';
export default class FlowItem extends Component{
    render(){
        const {icon,image, title,description} = this.props.data;
        const {style, textColor} = this.props;
        return(
            <View style={style}>
                <View style={styles.container}>
                    <Image source={icons[icon]} style={styles.icon}/>
                    <Text style={[textColor, styles.title]}>{title}</Text>
                    <Text style={[textColor, styles.description]}>{description}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft : 30,
        paddingRight : 30
    },
    icon : {
        width : 120,
        height : 120,
        marginBottom : 30
    },
    title : {
        fontSize : 20,
        textAlign : 'center',
        paddingBottom : 20
    },
    description : {
        textAlign : 'center'
    }
});