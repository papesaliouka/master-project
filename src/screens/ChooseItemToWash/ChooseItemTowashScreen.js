import React, {useState} from 'react';
import Button from '../../components/Button/Button.component';
import Header from '../../components/Header/Header.component';
import Price from '../../components/ItemPriceText/ItemPriceText.component';
import Count from '../../components/ItemCountText/ItemCountText.component';
import ItemToWash from '../../components/ItemToWash/ItemToWash.component';
import LoadsImage from '../../components/LoadsImage/LoadsImage.component';
import Spacer from '../../components/Spacer/Spacer.component';
import { FlatList } from 'react-native';
import ChooseItemToWashContextProvider from './ChooseItemToWashContext';

const array = [
    {id:1, name:'White Load'},
    {id:2, name:'Colored Load'},
    {id:3, name:'Mixed Load'},
    {id:4, name:'Delicate Load'},
    {id:5, name:'Linen/Comforter Load'},
]

const ChooseItemToWashScreen = ()=>{
    const renderItem = ({item})=> <ItemToWash name={item.name}/>
    return(
        <>
            <Header title='What are we washing'/>
            <LoadsImage/>
            <ChooseItemToWashContextProvider>
                <FlatList
                    data={array}
                    renderItem={renderItem}
                    keyExtractor={item => item.name}
                />
                <Count name={'Total Loads'}/>
                <Price name={'Estimated Cost'}/>
            </ChooseItemToWashContextProvider>
            <Spacer/>
            <Button title='CONTINUE' icon/>
        </>
    );
}

export default ChooseItemToWashScreen;