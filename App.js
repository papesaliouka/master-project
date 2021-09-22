import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {View} from 'react-native';
import SignInScreen from './src/screens/SignIn/SignInScreen';
import SignUpScreen from './src/screens/SignUp/SignUpScreen';
import ConfirmationScreen from './src/screens/Confirmation/ConfirmationScreen';
import HomeScreen from './src/screens/Home/HomeScreen';
import ButtonControl from './src/components/ButtonControl/ButtonControl.component';
import ChooseItemToWashScreen from './src/screens/ChooseItemToWash/ChooseItemTowashScreen';

export default function App() {
  return (
    <View>
      <ChooseItemToWashScreen/>
      <StatusBar style="auto" />
    </View>
  );
}

