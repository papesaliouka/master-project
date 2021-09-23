import React, {createContext, useState, useEffect} from 'react';

export const ChooseItemToWashContext = createContext();

const ChooseItemToWashContextProvider = ({children})=>{
    const [total, setTotal] = useState(0);
    const [cost, setCost] = useState(0);
    useEffect(()=>{
        let sum = total * 5;
        setCost(sum)
    },[total])
    return(
        <ChooseItemToWashContext.Provider value={{cost, total, setTotal}} >
            {children}
        </ChooseItemToWashContext.Provider>
    );
}

export default ChooseItemToWashContextProvider;