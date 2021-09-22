import React from 'react';
import {View, Text, StyleSheet } from 'react-native';
import ButtonControl from '../ButtonControl/ButtonControl.component';
const ItemToWash = ({name='White Loads'})=>{
    return(
        <View style={style.container}>
            <Text>{name}</Text>
            <ButtonControl/>
        </View>
    );
}

export default ItemToWash;

const style =StyleSheet.create({
    container:{
        marginTop:24,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    }
})