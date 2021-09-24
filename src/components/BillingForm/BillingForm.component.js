import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { TextInput } from 'react-native-paper';
import { appColors } from '../../infrastructure/colors';

let cardInfos = ['Exp','CVC','Zip'];
let addressInfo = ['City', 'State', 'Zip']

const BillingForm = ({address, bank, card}) => {
    return (
        <View style={styles.container} >
            <View style={styles.top}>
                <TextInput 
                    mode="outlined"
                    outlineColor= {appColors.thirdColor}
                    label={card ? 'Card Number' : bank ? 'Email Adress' : 'Address'}
                    left={<TextInput.Icon name='plus' />}
                />
            </View>
            <FlatList
                contentContainerStyle={styles.trio}
                data={card ? cardInfos : addressInfo }
                renderItem={renderText}
                keyExtractor={item => item }
            />
        </View>
    );
}

function renderText({item}){
    return(
        <TextInput
            style={{ width:100}}
            mode="outlined"
            outlineColor= {appColors.thirdColor}
            label={item}
        />
    );
}


export default BillingForm;


const styles = StyleSheet.create({
    trio:{
        flexDirection: 'row',
        justifyContent:'space-evenly',
        marginHorizontal:20
    },
    top:{
        marginHorizontal:26
    }, 
    container:{
        marginVertical: 20
    },
    text:{
        color: appColors.primaryColor
    }
})