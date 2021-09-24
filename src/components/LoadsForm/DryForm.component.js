import React from 'react';
import { View } from 'react-native';
import { CheckBoxWithText,Title } from '../Typography/Typography';

const DryForm = () => (
    <View>
        <Title title='DRY'/>
        <CheckBoxWithText title='Machine Dry' />
        <CheckBoxWithText title='Air Dry ($2)' />
    </View>
);

export default DryForm;