import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Auth from './AuthNavigator'
import App from './TabNavigaor';
import { useDispatch } from 'react-redux';
import { getUserDoc } from '../backend/fireStoreActions';
import { loggedInUser } from '../redux/actions/userActions';
import auth from '@react-native-firebase/auth';


const MainStack = createStackNavigator();

const MainApp = () => {
    const [listenUser, setListenUser] = useState(false);

    const dispatch = useDispatch()
    useEffect(() => {
       
        const authListener = auth().onAuthStateChanged(async (user: any) => {
            try {
                setListenUser(true);
                const userId = await getUserDoc(user.uid);
                if (userId) {
                    dispatch(loggedInUser(userId));
                } else {
                    dispatch(loggedInUser({ userId: user.uid, email: user.email, createdAt: user.metadata?.creationTime }))
                }
            } catch (error) {
                console.log(error);
                
            }
          
        })

        return () => {
            if (authListener) {
                authListener();
            }
        };
    }, [listenUser]);


    return (
        <NavigationContainer>
            <MainStack.Navigator screenOptions={{
                headerShown: false,
            }}
                initialRouteName='Auth'
            >
                <MainStack.Screen name={'Auth'} component={Auth} />
                <MainStack.Screen name={'App'} component={App} />

            </MainStack.Navigator>
        </NavigationContainer>

    )
}
export default MainApp