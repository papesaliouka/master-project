import React, {useContext} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { appColors } from '../../infrastructure/colors';
import { ChooseItemToWashContext } from '../../screens/ChooseItemToWash/ChooseItemToWashContext';


const ItemPriceText = ({name}) => {
    const {cost} = useContext(ChooseItemToWashContext)
    return(
    <View style={styles.container}>
        <Text style={{marginVertical:10, color: appColors.thirdColor}}>{name}</Text>
        <Text style={{marginVertical:10, color: appColors.primaryColor, fontSize:20}}>${cost}</Text>
    </View>
)};

export default ItemPriceText;

const styles  = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginHorizontal:40,
        marginRight:70
    }
})