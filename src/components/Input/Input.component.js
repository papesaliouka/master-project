import React from "react"
import {Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';


const CustomInput = ({type='user', placeholder=''})=>{
    return(
        <>
            <Input
            containerStyle={{height:40, marginBottom:10}}
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