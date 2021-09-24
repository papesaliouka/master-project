import React from 'react';
import { View, StyleSheet } from 'react-native';
import Button from '../../components/Button/Button.component';
import Header from '../../components/Header/Header.component';
import DetergentForm from '../../components/LoadsForm/DetergentForm.component';
import DryForm from '../../components/LoadsForm/DryForm.component';
import Spacer from '../../components/Spacer/Spacer.component';

const SelectLoadsScreen = () => {
    return(
        <>
            <Header title='What are we washn'/>
            <DetergentForm/>
            <DryForm/>
            <Spacer/>
            <View style ={styles.frag}>
                <Button title='Your Fragrance'/>
            </View>
            <Spacer/>
            <View style={styles.continue} >
            <Button title='CONTINUE' icon/>
            </View>
        </>
    );
}
export default SelectLoadsScreen;

const styles =StyleSheet.create({
    continue:{
        marginHorizontal: 80
    },
    frag:{
        marginHorizontal:60
    }
})