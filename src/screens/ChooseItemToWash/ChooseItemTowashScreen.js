import React from 'react';
import Header from '../../components/Header/Header.component';
import ItemToWash from '../../components/ItemToWash/ItemToWash.component';

const ChooseItemToWashScreen = ()=>{
    return(
        <>
            <Header title='What are we washing'/>
            <ItemToWash/>  
        </>
    );
}

export default ChooseItemToWashScreen;