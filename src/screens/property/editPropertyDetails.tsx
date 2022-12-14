import { StyleSheet, View } from 'react-native';
import React from 'react';
import { TextArea, Box, Text } from 'native-base';

import MainWithHeader from '../../components/layouts/mainWithHeader';
import PrevAndNextButtons from '../../components/ui/prevAndNextButtons';
import InputBox from '../../components/ui/inputBox';
import { NavigationButton } from '../../components/ui/button';
import { RadioButton } from '../../components/ui/radioButton';
import { BooleanData, furnishData, privateData } from '../../assets/dataset/dataset';
import { PropertiesStackParamList } from '../../navigation/types'
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { responsiveHeight } from 'react-native-responsive-dimensions';

type Props = StackNavigationProp<PropertiesStackParamList, 'EditPropertyDetails'>


const EditPropertyDetails = () => {
    const navigation = useNavigation<Props>();
    const findAddress = () => { };
    return (
        <MainWithHeader title={'Add information and start managing your property'}
            onClickBack={() => navigation.goBack()}
        >
            <InputBox inputTitle="Listing Title" dropdown={false} />
            <InputBox inputTitle="Postcode" dropdown={false} />
            <NavigationButton
                text="Find my address"
                btnStyle={styles.btnStyle}
                txtStyle={styles.txtStyle}
                onPress={() => findAddress}
            />
            <InputBox inputTitle="Select Address" dropdown={true} />
            <RadioButton
                title="Is this a private property or a shared property?"
                items={privateData}
                dir="row"
                onChange={function (e: any): void {
                    throw new Error('Function not implemented.');
                }}
                value={''}
                name={''}
            />
            <InputBox
                inputTitle="What type of residential property do you have?"
                dropdown={true}
            />
            <InputBox
                inputTitle="How many bedrooms are in the property?"
                dropdown={true}
            />
            <RadioButton
                title="Is the property furnished?"
                items={furnishData}
                dir="column"
                onChange={function (e: any): void {
                    throw new Error('Function not implemented.');
                }}
                value={''}
                name={''}
            />
            <InputBox
                inputTitle="How many bathrooms are in the property?"
                dropdown={true}
            />
            <RadioButton
                title="Does the property have a garden?"
                items={BooleanData}
                dir="row"
                onChange={function (e: any): void {
                    throw new Error('Function not implemented.');
                }}
                value={''}
                name={''}
            />
            <Box alignSelf="center" alignItems={'center'} w="100%" my={4}>
                <Text ml="-4" my="2" fontSize={'14px'} fontWeight="500">
                    How would you best describe your property?
                </Text>
                <TextArea h={'40'} w="90%" bg={'#E8E8E8'} autoCompleteType={undefined} />
            </Box>
            <InputBox inputTitle="Youtube embedded link" dropdown={false} />
            <Box alignItems={'center'} marginTop={35} >
                <NavigationButton
                    text="Save"
                    btnStyle={styles.buttonStyle}
                    onPress={() => { }}
                />
                <View style={{ height: responsiveHeight(20) }} />
            </Box>
        </MainWithHeader>
    );
};

export default EditPropertyDetails;

const styles = StyleSheet.create({
    btnStyle: {
        backgroundColor: '#FD9926',
        width: '90%',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginVertical: 10,
    },
    txtStyle: {
        color: '#000',
        fontWeight: 'bold',
    },
    buttonStyle: {
        backgroundColor: '#FD9926',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        width: '90%',
      }
});
