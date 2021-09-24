import React from 'react';
import { Card } from 'react-native-elements';
import {View, StyleSheet} from 'react-native';

import { appColors } from '../../infrastructure/colors';
import { CheckBoxWithTextRev } from '../Typography/Typography';
import { Button } from 'react-native-paper';

const ChooseLocationCard = () => {
    return (
        <Card 
            containerStyle={{marginHorizontal:30, marginVertical:30, borderRadius:5}}
        >
                <View style={styles.button}>
                    <Button mode="contained" color={appColors.primaryColor} style={{borderRadius:20, marginLeft:20}} >Home</Button>
                    <Button mode="contained" color={appColors.primaryColor} style={{borderRadius:20, marginRight:20}} >Business</Button>
                </View>
                <View style={styles.check}>
                    <CheckBoxWithTextRev title='Primary Location ?'/>
                </View>
        </Card>
    );
}

export default ChooseLocationCard;


const styles = StyleSheet.create({
    container:{
        marginHorizontal:20
    },
    button:{
        flexDirection:'row',
        justifyContent: 'space-between',
        marginTop:10,
    },
    check:{
        marginTop:20
    }
})