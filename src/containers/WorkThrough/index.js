import React, { Component } from 'react';
import { View, Text, StyleSheet,Dimensions } from 'react-native';
import Carousel from 'react-native-looped-carousel';

import FlowItem from './FlowItem';


export default class WorkThrough extends Component{
    constructor(props){
        super(props);
        this.state = {
            next : 0,
        }
    }

    _onAnimNextPage = (p) => {
        const { screens } = this.props.data;
        let current = this.state.next;

        if(parseInt(current) == (screens.length - 1) && parseInt(p) == 0)
        {
            this.props.onFinished();
        }
        else{
            this.setState({next : p})
        }
    }
    render(){
        const { bgColor , fgColor, screens } = this.props.data;

        let backgroundColor = backgroundList[bgColor]?backgroundList[bgColor] : "white";
        const backgroundStyle = {
            backgroundColor : backgroundColor,
        }

        const textColorStyle = {
            color : fgColor
        }

        const { iconpackage } = this.props;

        const { next } = this.state;
        return(
            <View style={[styles.container,backgroundStyle]}>
            <Text>{next}</Text>
            <Carousel
                delay={4000}
                style={styles.carousel}
                bullets = {true}
                // autoplay = { false }
                onAnimateNextPage={this._onAnimNextPage}
                >
                {
                    screens.map((item,i)=>{
                        return(
                            <FlowItem
                                key={i}
                                style={styles.flowItem}
                                textColor = {textColorStyle}
                                data={item}
                                iconpackage = {iconpackage}/>
                        )
                    })
                }
            </Carousel>
        </View>
        )
    }
}

const backgroundList = {
    "blue" : "#2A5DC5"
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    carousel : {
        width : "100%",
        flex : 0.5
    },
    flowItem : {
        width : "100%",
        flex : 0.5
    }
});
