/* eslint-disable prettier/prettier */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LogInScreen from '../screens/auth/logInScreen';
import EmailAuthScreen from '../screens/auth/emailAuthScreen';
import OnboardingScreen from '../screens/auth/onboardingScreen';
import PersonalDetails from '../screens/auth/personalDetails';
import AddresDetails from '../screens/auth/addressDetails';
import IdVerification from '../screens/auth/idVerification';
import Splash from '../screens/auth/splash';
import Signin from '../screens/auth/signIn'

import {AuthStackParamList
} from './types'

const Stack = createStackNavigator<AuthStackParamList>();
const Auth = () => {
  return (

    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }} 
      initialRouteName='splash'>
      <Stack.Screen name="login" component={LogInScreen} />
      <Stack.Screen name="emailAuthScreen" component={EmailAuthScreen}/>
      <Stack.Screen name="onboarding" component={OnboardingScreen} />
      <Stack.Screen name="splash" component={Splash} />
      <Stack.Screen name="personaldetails" component={PersonalDetails} />
      <Stack.Screen name="addressdetails" component={AddresDetails} />
      <Stack.Screen name="idverification" component={IdVerification} />
      <Stack.Screen name="signin" component={Signin} />

      
    </Stack.Navigator>
  );
};
export default Auth
