import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { Checkbox, Box, Image } from 'native-base';
import MainWithHeader from '../../components/layouts/mainWithHeader';
import PrevAndNextButtons from '../../components/ui/prevAndNextButtons';
import CardList from '../../components/ui/cardList';
import { UserProfileStackParamList } from '../../navigation/types'
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import ButtonCard from '../../components/ui/buttonCard';

type Props = StackNavigationProp<UserProfileStackParamList, 'EditProfile'>

const EditProfile = () => {
    const navigation = useNavigation<Props>();

    const cardsDetails = [
        {
            id: 1,
            title: 'Security details',
            text: 'Change',
            flag: false,
            screen: 'ChangePass',
        },
        {
            id: 2,
            title: 'Personal details',
            text: 'Edit',
            flag: false,
            screen: 'EditPersonalDetails',
        },
        {
            id: 3,
            title: 'Address details',
            text: 'Edit',
            flag: false,
            screen: 'EditAddress',
        },
        {
            id: 4,
            title: 'ID verification ',
            text: 'Verify',
            flag: false,
            screen: 'EditIdVerification',
        },
    ];

    return (
        <MainWithHeader title=""
        onClickBack={()=>navigation.goBack()}
        >
                <View>
                <FlatList
                data={cardsDetails}
                horizontal={false}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => {
                    return (
                        <ButtonCard
                            item={item}
                            navigation={() => navigation.navigate(item.screen)}
                        />
                    )
                }
                }
            />
                </View>
            
        </MainWithHeader>
    )
}
export default EditProfile
const styles = StyleSheet.create({
    imageStyle: {
        height: 80,
        width: 80,
        borderRadius: 80
    },
    userStyle: {
        alignItems: "center"
    },
    name: {
        fontSize: 13,
        marginTop: 5,
        fontWeight: '400'
    },
    landButton: {
        backgroundColor: "#429EA6",
        marginTop: 10,
        borderRadius: 7
    },
    landStyle: {
        marginVertical: 5,
        marginHorizontal: 10,

    },
 
    button: {
        backgroundColor: "#FD9926"
    }
})