import React from "react"
import {Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/SimpleLineIcons';


const CustomInput = ({type='', placeholder=''})=>{
    return(
        <>
            <Input
            secureTextEntry={ placeholder==='PASSWORD' ? true : false}
            containerStyle={{height:40, marginVertical:6, }}
            inputStyle={{fontSize:15}}
                placeholder={placeholder}
                leftIcon={
                    <Icon
                    name={`${type}`}
                    size={15}
                    color='black'
                    />
                }
            />
            
        </> 
    );
}


export default CustomInput;