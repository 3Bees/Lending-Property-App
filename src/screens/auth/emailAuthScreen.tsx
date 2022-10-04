import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Box, Center, Image, Text} from 'native-base';

import {Images} from '../../utils/imgDetails';
import MainHeading from '../../components/ui/mainHeading';
import InputBox from '../../components/ui/inputBox';
import {NavigationButton} from '../../components/ui/button';
import { FontFamily } from '../../utils/fontDetails'
import { StackNavigationProp } from '@react-navigation/stack';
import {AuthStackParamList} from '../../navigation/types'
import { useNavigation } from '@react-navigation/native';

type Props = StackNavigationProp<AuthStackParamList,'emailAuthScreen'>


const EmailAuthScreen = () => {
  const navigation = useNavigation<Props>();

  return (
    <Box flex={1} bg="#fff" paddingTop={10} paddingBottom={10}>
      <Image
        source={Images.LOGO}
        alignSelf="center"
        mb={3}
        size={20}
        alt="witbit"
      />
      <Box alignSelf={'center'} my="2" alignItems={'center'}>
        <MainHeading
          title="What is your email address?"
          txtcontainer={{}}
          textStyle={{}}
        />
        <Text
          mt={4}
          fontSize="14px"
          maxWidth={'70%'}
          fontFamily={FontFamily.bold}
          textAlign="center"
          >
          Please provide your email, we’ll send you a link to sign in instantly
        </Text>
      </Box>
      <InputBox inputTitle="Email" dropdown={false} />
      <InputBox inputTitle="Password" dropdown={false} />
      <InputBox inputTitle="Re-enter Password" dropdown={false} />
      <Box flex={1} alignItems="center" justifyContent={'flex-end'} mb="2">
        <NavigationButton
          text="Next"
          btnStyle={styles.buttonStyle}
          txtStyle={{}}
          onPress={() => navigation.navigate('onboarding')}
        />
      </Box>
    </Box>
  );
};

export default EmailAuthScreen;

const styles = StyleSheet.create({
  buttonStyle:{
    backgroundColor: '#3F97A0',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
  }
});
