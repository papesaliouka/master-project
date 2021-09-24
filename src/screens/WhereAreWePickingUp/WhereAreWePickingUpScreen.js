import React from 'react';
import { View } from 'react-native';
import BillingForm from '../../components/BillingForm/BillingForm.component';
import Button from '../../components/Button/Button.component';
import ChooseLocationCard from '../../components/ChooseLocationCard/ChooseLocationCard.component';
import Header from '../../components/Header/Header.component';
import Spacer from '../../components/Spacer/Spacer.component';

const WhereAreWePickingUpScreen = () => {
    return (
        <>
            <Header title='Where are we picking up'/>
            <BillingForm/>
            <ChooseLocationCard/>
            <Spacer/>
            <View style={{marginHorizontal:70}}>
                <Button title='CONTINUE' icon/>
            </View>
        </>
    );
}

export default WhereAreWePickingUpScreen;