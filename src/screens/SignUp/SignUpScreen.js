import React from "react";
import { View} from "react-native";
import SignUpForm from "../../components/SignUpForm/SignUpForm.component";
import Header from "../../components/Header/Header.component";
import Icon from "react-native-vector-icons/AntDesign";

const SignUpScreen = ()=>{
    return(
        <View>
            <Header title={'Sign Up'} />
            <View style={{alignItems:"center", justifyContent:'center', marginTop:20}}>
                <Icon
                name='pluscircle'
                color='#168bc9'
                size={40}
                />
            </View>
            
            <SignUpForm/>
            
        </View>
    );
}
export default SignUpScreen;

