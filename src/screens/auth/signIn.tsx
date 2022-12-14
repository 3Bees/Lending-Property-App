import { StyleSheet, Image, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Box, Center, Text } from 'native-base';

import { Images } from '../../utils/imgDetails';
import MainHeading from '../../components/ui/mainHeading';
import InputBox from '../../components/ui/inputBox';
import { NavigationButton } from '../../components/ui/button';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

import { StackNavigationProp } from '@react-navigation/stack';
import {AuthStackParamList} from '../../navigation/types'
import { useNavigation } from '@react-navigation/native';
type Props = StackNavigationProp<AuthStackParamList,'signin'>

const SignIn = () => {

    const navigation = useNavigation<Props>();

    return (
        <Box flex={1} bg="#fff">
            <Image
                source={Images.LOGOFULL}
                style={styles.logoStyle}
            />
            <Text style={styles.title}>
                The better way for
                Landlording on the go
            </Text>
            <InputBox inputTitle="Email or Phone Number" dropdown={false} />
            <InputBox inputTitle="Password" dropdown={false} />
            <TouchableOpacity style={styles.forgotPasswordBtn}>
                <Text style={styles.forgotPasswordBtnTxt}>
                    Forgot Password?
                </Text>
            </TouchableOpacity>
            <NavigationButton
                text="Sign in"
                btnStyle={styles.btnStyle}
                txtStyle={{}}
                onPress={() => navigation.navigate('signin')}
            />
            <View style={styles.seperator}>
                <View style={styles.hairLine} />
                <Text style={styles.seperatorText}>
                    Or Sign up With
                </Text>
                <View style={styles.hairLine} />
            </View>
            <View style={styles.socialContainer}>
                <TouchableOpacity>
                    <Image source={Images.GOOLGEICON} style={styles.iconStyle} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={Images.FBICON} style={styles.iconStyle}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={Images.APPLEICON} style={styles.iconStyle}/>
                </TouchableOpacity>
            </View>
        </Box>
    );
};

export default SignIn;

const styles = StyleSheet.create({
    logoStyle: {
        height: responsiveHeight(20),
        width: responsiveWidth(50),
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop: responsiveHeight(5)
    },
    title: {
        color: 'black',
        textAlign: 'center',
        marginHorizontal: responsiveWidth(25),
        fontWeight: 'bold',
        fontSize: responsiveFontSize(2),
        marginBottom: responsiveHeight(2)
    },
    btnStyle: {
        backgroundColor: '#FD9926',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        width: '90%',
    },
    forgotPasswordBtn: {
        alignSelf: 'flex-end',
        marginRight: responsiveWidth(5),
        marginBottom: responsiveHeight(5)
    },
    forgotPasswordBtnTxt: {
        fontWeight: 'bold'
    },
    seperator: {
        flexDirection: 'row',
        marginVertical: responsiveHeight(5),
        alignItems: 'center',
        alignSelf: 'center'
    },
    hairLine: {
        backgroundColor: '#FD9926',
        width: responsiveWidth(25),
        height: 0.5
    },
    seperatorText: {
        marginHorizontal: responsiveWidth(2)
    },
    iconStyle:{
        height:responsiveHeight(8),
        width:responsiveWidth(15),
        resizeMode:'contain',
        marginHorizontal:responsiveWidth(2)
    },
    socialContainer:{
        flexDirection:'row',
        alignItems:'center',
        alignSelf:'center',
    }
});
