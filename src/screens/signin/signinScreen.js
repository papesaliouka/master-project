import React from "react";
import { SafeAreaView, View, StyleSheet } from "react-native";
import Avatar from '../../components/Avatar/Avatar.component';
import Form from "../../components/Form/Form.component";
import Header from "../../components/Header/Header.component";

const SignInScreen = ()=>{
    return(
        <View>
            <Header title={'Sign In'} />
            <Avatar/>
            <Form/>
        </View>
    );
}
export default SignInScreen;

