
/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import MainHeading from '../../components/ui/mainHeading';
import { RadioButton } from '../../components/ui/radioButton';
import InputBox from '../../components/ui/inputBox';
import { DatePicker } from '../../components/ui/datePicker';
import { genderData } from '../../assets/dataset/dataset';
import MainWithHeader from '../../components/layouts/mainWithHeader';
import { StackNavigationProp } from '@react-navigation/stack';
import { AuthStackParamList } from '../../navigation/types'
import { useNavigation } from '@react-navigation/native';
import { Box, FormControl } from 'native-base';
import OnBoardingLayout from '../../components/layouts/onBoarding';
import { Notifications } from '../../types/types';
import type { UserIdType } from '../../types/types';
import { useDispatch, useSelector } from 'react-redux';
import personalDetailFormValidation from '../../components/form-validations/personalDetailFormValidation';
import ErrorMsg from '../../components/ui/errorMsg';
import { useFormik } from 'formik'
import { setPersonalDetailsInformation } from '../../redux/actions/userActions';
import { NavigationButton } from '../../components/ui/button';
import { responsiveHeight } from 'react-native-responsive-dimensions';


type Props = StackNavigationProp<AuthStackParamList, 'personaldetails'>


const PersonalDetails = () => {
  const navigation = useNavigation<Props>();

  const dispatch = useDispatch()
  const { userId } = useSelector((state: any) => state.user);


  const intialValues = {
    title: userId.title,
    firstName: userId.firstName,
    lastName: userId.lastName,
    dob: userId.dob
  }

  const { handleChange, handleSubmit, handleBlur, values, errors } = useFormik({
    initialValues: intialValues,
    validate: values => personalDetailFormValidation(values, intialValues),
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: values => {
      dispatch(setPersonalDetailsInformation({ values }))
    }
  })

  return (
    <MainWithHeader onClickBack={() => navigation.goBack()} >
      <Box>
        <MainHeading
          title="Personal details"
          txtcontainer={{ alignSelf: 'center' }}
        />
        <FormControl>
          <Box mt={5}>
            <RadioButton
              title="What is your title?"
              items={['Mr', 'Mrs', 'Miss', 'Ms']}
              dir="column"
              onChange={handleChange}
              value={values.title}
              name={'title'} />
          </Box>
          <InputBox inputTitle="First name" dropdown={false}
            onChange={handleChange('firstName')}
            value={values.firstName}
          />
          {errors.firstName && <ErrorMsg>{errors.firstName}</ErrorMsg>}
          <InputBox inputTitle="Surname" dropdown={false}
            onChange={handleChange('lastName')}
            value={values.lastName}
          />
          {errors?.lastName && <ErrorMsg>{errors.lastName}</ErrorMsg>}
          <DatePicker />
        </FormControl>
        <NavigationButton
          text="Save"
          btnStyle={styles.buttonStyle}
          txtStyle={{}}
          onPress={() => navigation.navigate('onboarding')}
        />
      </Box>
    </MainWithHeader>
  );
};

export default PersonalDetails;

const styles = StyleSheet.create({
  dateStyle: {
    color: "black",
    fontSize: 14
  },
  dateView: {
    width: '90%',
    backgroundColor: "#E5E5E5",
    height: 40,
    marginTop: 10,
    borderRadius: 10,
    justifyContent: "center",
    paddingLeft: 10,
    alignSelf: "center"
  },
  TextStyle: {
    fontSize: 14,
    fontWeight: '400',
    marginTop: 10,
    width: "88%",
    alignSelf: "center"

  },
  buttonStyle: {
    backgroundColor: '#3F97A0',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: responsiveHeight(4),
    width: '90%',
  }
});
