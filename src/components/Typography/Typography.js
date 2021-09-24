import React from 'react';

import { Text, StyleSheet, View } from 'react-native';
import { appColors } from '../../infrastructure/colors';
import { CheckBox } from 'react-native-elements'


export const Title =({title}) => <Text style={styles.title} >{title}</Text>;

export const Caption = ({title}) => <Text style={styles.caption} >{title}</Text>;

export const Hint = ({title}) => <Text style={styles.hint} >{title}</Text>;

export const CheckBoxWithText =({title}) =>(
    <View style={styles.container}>
        <Text style={styles.regular}>{title}</Text>
        <CheckBox
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            checkedColor= {appColors.thirdColor}
            style={{borderColor: appColors.thirdColor}}
        />
    </View>
);

export const CheckBoxWithTextRev = ({title}) =>(
    <View style={styles.container}>
        <CheckBox
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            checkedColor= {appColors.thirdColor}
            size={30}
        />
        <Text style={styles.regular}>{title}</Text>
    </View>
);



const styles = StyleSheet.create({
    title:{
        color: appColors.primaryColor,
        fontSize: 30,
        alignSelf:'center'
    },
    caption:{
        color: 'grey',
        fontSize:10
    },
    hint:{
        fontSize:10,
        color:appColors.thirdColor
    },
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginHorizontal:40,
        marginRight:70
    },
    regular:{
        marginVertical:10,
        color: appColors.thirdColor,
        marginHorizontal:10
    }
})