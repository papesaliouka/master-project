import React from 'react';
import { Avatar } from 'react-native-elements/dist/avatar/Avatar';
import { Divider } from 'react-native-elements/dist/divider/Divider';
import { View, Text } from 'react-native';
import Button from '../../components/Button/Button.component';
import Header from '../../components/Header/Header.component';
import Spacer from '../../components/Spacer/Spacer.component';
import { appColors } from '../../infrastructure/colors';

const HomeScreen = ()=>{
    return(
        <>
            <Header title={'Welcome'} />
            <Avatar
                rounded
                size={200}
                containerStyle={{ marginLeft: 75, marginTop: 50}}
                source={{
                    uri:
                    'https://reactnativeelements.com/img/avatar/avatar--photo.jpg',
                }}/>
            <View style={{justifyContent:'center', alignItems:'center'}} >
                <Text style={{color: appColors.thirdColor, fontSize:20, marginVertical:40}} >Profile Name</Text>
            </View>
            <View style={{marginHorizontal:60}}>
                <Divider/>
            </View>
            <View style={{marginTop:40, marginHorizontal:75}}>
            <Button title={'GET WASH'}/>
            </View>
            <Button type={'clear'} title={'Refer a Friend'}/>
            <Spacer/>
            <Button type={'clear'} title={'Join Us'}/>
        </>
    );
}

export default HomeScreen;