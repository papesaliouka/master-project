import React from 'react';
import Header from "../../components/Header/Header.component";
import Icon from "react-native-vector-icons/AntDesign";
import Button from '../../components/Button/Button.component';
import { Card } from 'react-native-elements/dist/card/Card';
import VerifCode from 'rn-verifcode';
import { View, Text } from 'react-native';
import { appColors } from '../../infrastructure/colors';
const ConfirmationScreen = ()=>{
    return(
        <>
            <Header title={'Confirmation'}/>
            <Card 
                containerStyle={{borderColor:appColors.primaryColor, borderRadius:10, borderWidth:1, backgroundColor:appColors.secondaryColor, justifyContent:'center', alignItems:'center', marginTop:40}}
            >
                <Text>Confirm Your Account </Text>
                <Text>Your Almost Done</Text>
            </Card>    
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginVertical:110, marginHorizontal:40 }}>
                <Icon name='checkcircle' size={100} color={appColors.primaryColor}/>
            </View>
            <View style={{marginBottom:50, justifyContent: 'center', alignItems: 'center',}}>
                <Text style={{color: appColors.thirdColor}}>A code has been sent to</Text>
                <Text style={{fontSize:25}} >test@gmail.com</Text>
            </View>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginBottom:100, marginHorizontal:40  }}>
                <VerifCode numberOfDigits={4} onFulfill={code => alert(code)} />
            </View>
            <Button title={'CONTINUE'}/>
        </>
    );
}

export default ConfirmationScreen;