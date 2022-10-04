import { ImageSourcePropType } from "react-native";

/* eslint-disable prettier/prettier */
export type UserIdType = {
  userId: string;
  tenantId?: string;
  landlordId?: string;
  gurantorId?: string;
  email?: string;
  title?: string;
  firstName?: string;
  surname?: string;
  password?: string;
  mobileNumber?: string;
  appointmentAvailabiilityDateTime?: Date;
  kycVerficationApproval?: Boolean;
  userFullAddress?: string;
  customerAccountManagerId?: customerAccountManagerId;
  createdDate?: Date;
  totalRent?: number;
  dob?: Date;
  userRating?: string;
  notifications?: Notifications;
  userChatId?: UserChatId;
};


export type Notifications = {
  type: string;
  message: string;
  reference: string;
  link: string;
  createdDate: string;
};
export type customerAccountManagerId = {
  customerAccountManagerId: string;
  csmFirstName: string;
  csmSurname: string;
  csmEmail: string;
  csmContactNumber: string;
};

export type UserChatId={
    userChatId:string
}

export type UserSettings={
  id:number,
  name:string,
  textColor:string,
  imagePath:ImageSourcePropType,
  navigation:string,
}

export type ServicesDetails={
  id: number;
  title: string;
  screen: string;
  description: string;
  price: string;
  flag: boolean;
  expiryDate: string
}