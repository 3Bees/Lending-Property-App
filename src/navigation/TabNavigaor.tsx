import * as React from 'react';
import {Text, View, Image, Platform} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Images} from '../utils/imgDetails';
import MainWithHeader from '../components/layouts/mainWithHeader';
import {UserProfile,PropertiesNavigator,HomeMainStack,SettingsFlow} from './ScreenNavigation';
import AlertHome from '../screens/alert/alertHome';

function SettingsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{color: '#000'}}>Settings</Text>
    </View>
  );
}



const Tab = createBottomTabNavigator();

export default function App() {
  return (
      <Tab.Navigator
      initialRouteName='HomeScreen'
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarLabel: () => {
            return null;
          },
          tabBarStyle: {
            borderTopColor: '#FD9926',
            paddingVertical:10,
            borderTopWidth: 1,
            paddingTop: Platform.OS === 'ios'?10:0,
          },

          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            if (route.name === 'Alert') {
              iconName = focused ? Images.ALERTF : Images.ALERT;
            } else if (route.name === 'OnboardingProperty') {
              iconName = focused ? Images.INFOICONF : Images.INFOICON;
            } else if (route.name === 'Settings') {
              iconName = focused ? Images.BARICONF : Images.BARICON;
            } else if (route.name === 'UserProfile') {
              iconName = focused ? Images.USERICON : Images.USERICONF;
            }
            return <Image source={iconName} style={{height:30,width:30,resizeMode:'contain'}}/>;
          },
        })}>
        <Tab.Screen name="Alert" component={AlertHome} />
        <Tab.Screen name='OnboardingProperty' component={PropertiesNavigator} />
        <Tab.Screen name="Settings" component={SettingsFlow} />
        <Tab.Screen name="UserProfile" component={UserProfile} />
      </Tab.Navigator>
  );
}