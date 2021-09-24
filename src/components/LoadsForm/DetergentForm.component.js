import React from 'react';
import { View } from 'react-native';

import { CheckBoxWithText, Title } from '../Typography/Typography';

const DetergentForm = () => (
    <View style={{marginTop:40}}>
        <Title title='Detergent'/>
        <CheckBoxWithText title='Natural Washn' />
        <CheckBoxWithText title='Basic Washn' />
        <CheckBoxWithText title='Sensitive'/>
    </View>
);

export default DetergentForm;