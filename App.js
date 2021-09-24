import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {View} from 'react-native';
import SignInScreen from './src/screens/SignIn/SignInScreen';
import SignUpScreen from './src/screens/SignUp/SignUpScreen';
import ConfirmationScreen from './src/screens/Confirmation/ConfirmationScreen';
import HomeScreen from './src/screens/Home/HomeScreen';
import ButtonControl from './src/components/ButtonControl/ButtonControl.component';
import ChooseItemToWashScreen from './src/screens/ChooseItemToWash/ChooseItemTowashScreen';
import SelectLoadsScreen from './src/screens/SelectLoads/SelectLoadsScreen';
import WhereAreWePickingUpScreen from './src/screens/WhereAreWePickingUp/WhereAreWePickingUpScreen';

export default function App() {
  return (
    <View>
      <WhereAreWePickingUpScreen/>
      <StatusBar style="auto" />
    </View>
  );
}

