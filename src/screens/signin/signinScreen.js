import React from "react";
import { SafeAreaView, View, StyleSheet } from "react-native";
import Avatar from '../../components/Avatar/Avatar.component';
import SignInForm from "../../components/SignInForm/SignInForm.component";
import Header from "../../components/Header/Header.component";

const SignInScreen = ()=>{
    return(
        <View>
            <Header title={'Sign In'} />
            <Avatar/>
            <SignInForm/>
        </View>
    );
}
export default SignInScreen;

