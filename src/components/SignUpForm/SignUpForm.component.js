import React from "react";

import Input from '../Input/Input.component';
import Button from '../Button/Button.component';
import { Card } from 'react-native-elements';
import {View, StyleSheet} from 'react-native';

const SignUpForm = ()=>{
    return(
        <>
            <Card containerStyle={{borderRadius:10, margin:20, marginBottom:20}}>
                <Input placeholder='FULLNAME'/>
                <Input  placeholder='EMAIL ADRESS'/>
                <Input placeholder='USERNAME'/>
                <Input placeholder='PHONE NUMBER'/>
                <Input placeholder='PASSWORD'/>
                <Input placeholder='CONFIRM PASSWORD'/>
            </Card>
            <Button title={'CONTINUE'} icon/>
            <Button type={'clear'} title={'Generate OTP'}/>
        </>
    );
}

export default SignUpForm;