import React from 'react';
import {View} from 'react-native';
import { Card } from 'react-native-elements';
import { appColors } from '../../infrastructure/colors';
const LoadsImage = ()=>{
    return(
        <View>
            <Card containerStyle={{padding:0, margin:40, borderColor:appColors.primaryColor, borderRadius:5}}>
                <Card.Image resizeMode="cover" source={{uri:'https://hips.hearstapps.com/ghk.h-cdn.co/assets/18/07/640x320/landscape-1518557889-how-to-bleach-clothes.jpg?resize=640:*'}}/>
            </Card>
        </View>
    );
}

export default LoadsImage
