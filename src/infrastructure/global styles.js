import {StyleSheet} from 'react-native';
import {appColors} from './appColors';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: appColors.backgroundColor,
  },
  headerTitle: {
    fontSize: 20,
    color: appColors.backgroundColor,
  },
  bottomSheet:{
    marginHorizontal: 2,
  },
  bottomSheetContent: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    //backgroundColor: '#333'
  }
});

export const snapPoints = ['0.5%', '35%', '55%', '65%'];
