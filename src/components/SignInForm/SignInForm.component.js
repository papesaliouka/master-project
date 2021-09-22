import React from 'react';
import CustomInput from '../Input/Input.component';
import CustomButton from '../Button/Button.component';
import { Card } from 'react-native-elements';
import {View, StyleSheet} from 'react-native';

const SignInForm = ()=>{
    return (
        <>
            <Card containerStyle={{borderRadius:10, margin:20, marginBottom:20}}>
                <CustomInput type={'user'} placeholder='USERNAME / EMAIL'/>
                <CustomInput type={'lock'} placeholder='PASSWORD'/>
            </Card>
            <CustomButton title={'Sign In'} icon/>
            <CustomButton type={'clear'} title={'Sign Up'}/>
            <View style={styles.spacer}></View>
            <CustomButton type={'clear'} title={'Join Us'}/>
        </>
    );
}

export default SignInForm;


const styles= StyleSheet.create({
    spacer:{
        marginTop:40
    }
})