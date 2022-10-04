/* eslint-disable prettier/prettier */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/AntDesign';
import { StackScreenProps } from '@react-navigation/stack';
import PropertyInformation from '../screens/property/propertyInformation';
import PropertyImagesPreview from '../screens/property/propertyDetails3';
import AddPropertyImages from '../screens/property/addPropertyImages';
import AddPropertyDetails from '../screens/property/addPropertyDetails';
import Documents from '../screens/documents/documents';
import Camera from '../components/ui/camera';
import EPCReportScreen from '../screens/documents/ecpReportScreen';
import PropertyHome from '../screens/property/propertyHome';
import InsuranceDoc from '../screens/documents/insuranceDoc';
import GasSafety from '../screens/documents/gasSafety';
import EICRDocument from '../screens/documents/eicrReport';
import HMODocument from '../screens/documents/hmoLicence';
import SelectiveLicence from '../screens/documents/selectiveLicence';
import FloorPlan from '../screens/documents/floorPlan';
import FullDetails from '../screens/tenancy/fullDetails';
import PropertyHomeDetails from '../screens/property/propertyHomeDetail';
import VideoTour from '../screens/tenancy/videoTour';
import FloorPlanDetails from '../screens/tenancy/floorPlan'
import EditProperty from '../screens/property/editProperty'
import EditPropertyDetails from '../screens/property/editPropertyDetails'
import InvitePartner from '../screens/property/invitePartner'
import SettingsHome from '../screens/options/moreOptions'
import HomeScreen from '../screens/home/home'
import ReferFriend from '../screens/referal/referFriend';
import MySettings from '../screens/settings/mySettings';
import UserDetails from '../screens/userProfile/userDetails';
import ChangePass from '../screens/userProfile/changePass';
import EditAddress from '../screens/userProfile/editAddress';
import EditIdVerification from '../screens/userProfile/editIDVerfication';
import EditPersonalDetails from '../screens/userProfile/editPersonalDetail';
import EditProfile from '../screens/userProfile/editProfile';
import Feedback from '../screens/feedback/feedback'
import PrivacyPolicy from '../screens/privacyPolicy/privacyPolicy'
import PropertyServicesList from '../screens/propertyServices/propertyServicesList/propertyServicesList'
import PropertyServicesDetails from '../screens/propertyServices/propertyServiceDetails/propertServicesDetails'
import PropertySelection from '../screens/propertyServices/propertySelection/propertySelection'
import {
  PropertiesStackParamList,
  PropertOnboardingStackParamList,
  PropertyDocumentsStackParamList,
  SettingsStackParamList,
  HomeStackParamList,
  UserProfileStackParamList,
  
} from './types'

const Properties = createStackNavigator<PropertiesStackParamList>();
const PropertOnboarding = createStackNavigator<PropertOnboardingStackParamList>();
const PropertyDocuments = createStackNavigator<PropertyDocumentsStackParamList>();
const SettingsStack = createStackNavigator<SettingsStackParamList>();
const HomeStack = createStackNavigator<HomeStackParamList>();
const UserProfileStack = createStackNavigator<UserProfileStackParamList>();


const DocumentsProperty = () => {
  return (
    <PropertyDocuments.Navigator
      initialRouteName='DocumentsList'
      screenOptions={{
        headerShown: false,
      }}>
      <PropertyDocuments.Screen name="DocumentsList" component={Documents} />
      <PropertyDocuments.Screen name="EPCReport" component={EPCReportScreen} />
      <PropertyDocuments.Screen name="InsuranceDoc" component={InsuranceDoc} />
      <PropertyDocuments.Screen name="GasSafety" component={GasSafety} />
      <PropertyDocuments.Screen name="EICRDocument" component={EICRDocument} />
      <PropertyDocuments.Screen name="HMO" component={HMODocument} />
      <PropertyDocuments.Screen name="SelectiveLicence" component={SelectiveLicence} />
      <PropertyDocuments.Screen name="FloorPlan" component={FloorPlan} />
      <PropertyDocuments.Screen name="VideoTour" component={VideoTour} />


    </PropertyDocuments.Navigator>
  );
};



const OnboardingProperty = () => {
  return (
    <PropertOnboarding.Navigator
      initialRouteName='Property'
      screenOptions={{
        headerShown: false,
        headerTitle: '',
      }}>
      <PropertOnboarding.Screen name='Property' component={PropertyInformation} />
      <PropertOnboarding.Screen name='AddPropertyDetails' component={AddPropertyDetails} />
      <PropertOnboarding.Screen name='AddPropertyImages' component={AddPropertyImages} />
      <PropertOnboarding.Screen name="PropertyImagesPreview" component={PropertyImagesPreview} />
      <PropertOnboarding.Screen name="Documents" component={DocumentsProperty} />
    </PropertOnboarding.Navigator>
  );
};

export const UserProfile = () => {
  return (
    <UserProfileStack.Navigator
      initialRouteName='UserSettings'
      screenOptions={{
        headerShown: false,
      }}>
      <UserProfileStack.Screen name="UserSettings" component={MySettings} />
      <UserProfileStack.Screen name="UserDetails" component={UserDetails} />
      <UserProfileStack.Screen name="ChangePass" component={ChangePass} />
      <UserProfileStack.Screen name="EditIdVerification" component={EditIdVerification} />
      <UserProfileStack.Screen name="EditAddress" component={EditAddress} />
      <UserProfileStack.Screen name="EditPersonalDetails" component={EditPersonalDetails} />
      <UserProfileStack.Screen name="EditProfile" component={EditProfile} />
      <UserProfileStack.Screen name="Feedback" component={Feedback} />
      <UserProfileStack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
    </UserProfileStack.Navigator>
  );
};


export const SettingsFlow = () => {
  return (
    <SettingsStack.Navigator
      initialRouteName='SettingsHome'
      screenOptions={{
        headerShown: false,
      }}>
      <SettingsStack.Screen name="SettingsHome" component={SettingsHome} />
      <SettingsStack.Screen name="ReferFriend" component={ReferFriend} />
      <SettingsStack.Screen name="OnboardingProperty" component={OnboardingProperty} /> 
    </SettingsStack.Navigator>
  );
};


export const HomeMainStack = () => {
  return (
    <HomeStack.Navigator
      initialRouteName='HomeScreen'
      screenOptions={{
        headerShown: false,
      }}>
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} />      
    </HomeStack.Navigator>
  );
};

export const PropertiesNavigator = () => {
  return (
    <Properties.Navigator
      initialRouteName='PropertyHome'
      screenOptions={{
        headerShown: false,
      }}>
      <Properties.Screen name="PropertyHome" component={PropertyHome} />
      <Properties.Screen name='AddProperty' component={OnboardingProperty} />
      <Properties.Screen name='PropertyHomeDetails' component={PropertyHomeDetails} />
      <Properties.Screen name="FloorPlanDetails" component={FloorPlanDetails} />
      <Properties.Screen name="EditProperty" component={EditProperty} />
      <Properties.Screen name="EditPropertyDetails" component={EditPropertyDetails} />
      <Properties.Screen name="FullDetails" component={FullDetails} />
      <Properties.Screen name="InvitePartner" component={InvitePartner} />
      <Properties.Screen name="PropertyServicesList" component={PropertyServicesList} />
      <Properties.Screen name="PropertyServicesDetails" component={PropertyServicesDetails} />
      <Properties.Screen name="PropertySelection" component={PropertySelection} />

      
    </Properties.Navigator>
  );
};

