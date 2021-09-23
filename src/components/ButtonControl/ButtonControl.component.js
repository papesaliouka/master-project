import React, {useContext, useState} from "react";
import { View, StyleSheet, Text } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { appColors } from "../../infrastructure/colors";
import { ChooseItemToWashContext } from "../../screens/ChooseItemToWash/ChooseItemToWashContext";
const ButtonControl =()=>{
    const {setTotal} = useContext(ChooseItemToWashContext);
    const [count, setCount] = useState(0);
    const increment = () => {setCount(prev => prev +1); setTotal(prev=> prev+1)}
    const decrement = () => {setCount(prev => prev >=1 ? prev -1 : 0 ); count >= 1 && setTotal(prev => prev -1)    }
    return(
        <View style={style.container}>
            <Icon name={'left'} size={20} color='white' style={style.icon} onPress={()=>decrement()}/>
                <Text style={style.text} >{count}</Text>
            <Icon name='right' size={20} color='white' style={style.icon} onPress={()=>increment()}/>
        </View>
    );
}

export default ButtonControl;

const style = StyleSheet.create({
    container:{
        marginTop:10,
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
    },
    icon:{
        marginHorizontal:5
    }
})