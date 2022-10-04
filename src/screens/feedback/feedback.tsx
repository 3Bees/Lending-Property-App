
import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { Checkbox, Box, Image } from 'native-base';
import MainWithHeader from '../../components/layouts/mainWithHeader';
import PrevAndNextButtons from '../../components/ui/prevAndNextButtons';
import InputBox from '../../components/ui/inputBox';
import { responsiveHeight,responsiveFontSize } from 'react-native-responsive-dimensions';
import { NavigationButton } from '../../components/ui/button';
import { UserProfileStackParamList } from '../../navigation/types'
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

type Props = StackNavigationProp<UserProfileStackParamList, 'Feedback'>


const Feedback = () => {
    const navigation = useNavigation<Props>();

    return (
        <MainWithHeader title="Feedback" onClickBack={()=>navigation.goBack()}>
            <>
                <View style={styles.body}>
                    <InputBox inputTitle="We want to know what you think......" dropdown={false} multilneFlag={true} inputHeight={responsiveHeight(20)} />
                </View>
                <NavigationButton
                    text="Submit Feedback"
                    btnStyle={styles.buttonStyle}
                    txtStyle={{}}
                    onPress={() => navigation.goBack()}
                />
            </>
        </MainWithHeader>
    )
}
export default Feedback
const styles = StyleSheet.create({

    body: {
        marginVertical: 10,
        marginTop: 40
    },
    button: {
        backgroundColor: "#FD9926"
    },
    alertsText:{
        alignSelf:'center',
        fontSize:responsiveFontSize(3.5),
        marginVertical:responsiveHeight(1)
    },
    buttonStyle: {
        backgroundColor: '#FD9926',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        width: '90%',
        marginTop:responsiveHeight(10)
    },
})
