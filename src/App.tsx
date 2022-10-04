/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import { View, StatusBar } from 'react-native';
import MainApp from './navigation/MainContainer';
import React, { createContext, ReactNode, useEffect, useState } from 'react';
import { NativeBaseProvider, Box, Text } from 'native-base';
import { useDispatch, Provider } from 'react-redux'
import store from './redux/store/index'
const App = () => {



    return (
      <Provider store={store}>
        <NativeBaseProvider>
          <StatusBar
            animated={true}
            backgroundColor="#fff"
            barStyle="dark-content"
            showHideTransition="fade"
            hidden={false}
          />
          <View
            style={{
              flex: 1,
              backgroundColor: '#fff',
              // justifyContent: 'center',
              // alignItems: 'center',
            }}>
            {/* <TabNavigator /> */}
            <MainApp/>
          </View>
        </NativeBaseProvider>
      </Provider>
    );
}

export default App;
