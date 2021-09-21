import React from "react";
import { SafeAreaView, Platform } from "react-native";
import {Header} from 'react-native-elements';

const CustomHeader = ({title})=>{
    return(
        <SafeAreaView style={Platform.OS='android' && style.header}>
            <Header
                containerStyle={{height:70}}
                placement="center"
                centerComponent={{ text: `${title}`, style: { color: '#fff', fontSize:20 } }}
            />
        </SafeAreaView>
    );
}

export default CustomHeader;

const style={
    header:{
        marginTop:24,
    }
}