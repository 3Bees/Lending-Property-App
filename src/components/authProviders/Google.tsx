import React, { useContext, useEffect, useState } from 'react';
import auth from '@react-native-firebase/auth';
import {
    GoogleSignin,
    statusCodes,
} from '@react-native-google-signin/google-signin';
import { FirebaseError } from '@firebase/util';

import { checkLoginData } from '../../backend/utility';
import { useLinkTo } from '@react-navigation/native';
import AuthButton from '../ui/authButton';

function Google(): JSX.Element | null {
    const [loading, setLoading] = useState(false);
    const link = useLinkTo()

    useEffect(() => {
        try {
            GoogleSignin.configure({
                scopes: ['profile', 'email'],
                webClientId: '1032232973030-vs9605dam99f5pan4c99sose5ech8liq.apps.googleusercontent.com',
                // offlineAccess: true,
            });
        } catch (error) {
            console.log(error)
        }
       
    }, []);

    async function handleGoogle() {
        if (!loading) {
            setLoading(true);
            try {
                await GoogleSignin.hasPlayServices();

                // await GoogleSignin.signIn();
                // const { accessToken, idToken } = await GoogleSignin.getTokens();
                // const credential = auth.GoogleAuthProvider.credential(
                //     idToken,
                //     accessToken,
                // );
                const { idToken } = await GoogleSignin.signIn();

                // Create a Google credential with the token
                const googleCredential = auth.GoogleAuthProvider.credential(idToken);
                const user = await auth().signInWithCredential(googleCredential);
                checkLoginData(user.user.uid, link)
            } catch (e) {
                setLoading(false);
                // const error = e as FirebaseError;
                // console.log('Message', error.message);
                // if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                //     console.log('User Cancelled the Login Flow');
                // } else if (error.code === statusCodes.IN_PROGRESS) {
                //     console.log('Signing In');
                // } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                //     console.log('Play Services Not Available or Outdated');
                // } else {
                //     console.log('Some Other Error Happened', error.message);
                // }
            }
        }
    }

    return (
        <AuthButton
            iconName="google"
            title="Continue with Google"
            btnStyle={{ backgroundColor: '#5686E9', width: '90%' }}
            onPress={() => handleGoogle()}
        />
    );
}
export default Google;
