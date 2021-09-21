import React from 'react';
import CustomInput from '../Input/Input.component';
import CustomButton from '../Button/Button.component';
import { Card } from 'react-native-elements';
import {View, StyleSheet} from 'react-native';

const CustomForm = ()=>{
    return (
        <>
            <Card containerStyle={{borderRadius:10, margin:20, marginBottom:20}}>
                <CustomInput placeholder='USERNAME / EMAIL'/>
                <CustomInput type={'lock'} placeholder='PASSWORD'/>
            </Card>
            <CustomButton title={'Sign In'} icon/>
            <CustomButton type={'clear'} title={'Sign Up'}/>
            <View style={styles.spacer}></View>
            <CustomButton type={'clear'} title={'Join the Wash Mob'}/>
        </>
    );
}

export default CustomForm;


const styles= StyleSheet.create({
    spacer:{
        marginTop:40
    }
})