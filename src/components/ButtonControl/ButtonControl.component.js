import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { appColors } from "../../infrastructure/colors";
const ButtonControl =()=>{
    return(
        <View style={style.container}>
            <Icon name={'left'} size={20} color='white'/>
               <Text style={style.text} >1</Text>
            <Icon name='right' size={20} color='white'/>
        </View>
    );
}

export default ButtonControl;

const style = StyleSheet.create({
    container:{
        marginTop:24,
        backgroundColor:appColors.primaryColor,
        borderRadius:25,
        justifyContent: 'space-between',
        alignItems:'center',
        flexDirection: 'row',
        width:70,
        height:30
    }, 
    text:{
        color:'#fff',
        fontSize:20
    }
})