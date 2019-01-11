import React, { Component } from 'react';
import { View, Text, StyleSheet,Dimensions } from 'react-native';
import Carousel from 'react-native-looped-carousel';

import FlowItem from './FlowItem';

export default class WorkThrough extends Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }
    // _onLayoutDidChange = (e) => {
    //     const layout = e.nativeEvent.layout;
    //     this.setState({ size: { width: layout.width, height: layout.height } });
    // }
    render(){
        const { bgColor , fgColor, screens } = this.props.data;

        let backgroundColor = backgroundList[bgColor]?backgroundList[bgColor] : "white";
        const backgroundStyle = {
            backgroundColor : backgroundColor,
        }

        const textColorStyle = {
            color : fgColor
        }
        return(
            <View style={[styles.container,backgroundStyle]}>
            <Carousel
                delay={3000}
                style={styles.carousel}
                bullets = {true}
                autoplay
                >
                {
                    screens.map((item,i)=>{
                        let imagePath = '../../assets/images/home.png';
                        item.image = require(imagePath);
                        return(
                            <FlowItem
                                key={i}
                                style={styles.flowItem}
                                textColor = {textColorStyle}
                                data={item}/>
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
