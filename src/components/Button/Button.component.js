import React from "react";
import { View } from "react-native";
import {Button} from 'react-native-elements';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { appColors } from "../../infrastructure/colors";



const CustomButton = ({title='Button', type='solid', icon })=>{
    return(
        <View style={{marginHorizontal:20,}}>
            <Button
                buttonStyle={{borderRadius:20, height:50}}
                type={type}
                title={title}
                icon={
                  icon &&  <AntDesign name="rightcircle" color={appColors.backgroundColor} size={25} style={{position:"absolute", left:10}}/>
                }
                iconPosition='right'
            />
        </View>
    );
}

export default CustomButton;