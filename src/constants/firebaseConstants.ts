export const TENANT_ID_STRING: string = 'tenantId'
export const TENANCY_ID_STRING: string = 'tenancyId'
export const USER_ID_STRING: string = 'userId'
export const LANDLORD_ID_STRING: string = 'landlordId'
export const GUARANTOR_ID_STRING: string = 'guarantorId'
export const PARTNER_ID_STRING: string = 'partnerId'
export const PROPERTY_ID_STRING: string = 'propertyId'
export const NOTIFICATIONS_STRING: string = 'notifications'
export const APPOINTMENT_ID_STRING: string = 'appointmentId'
export const LANDLORD_STRING: string = "landlord"
export const TENANT_STRING: string = "tenant"
export const PROPERTY_COMPLIANCE_DOCUMENTS= 'propertyComplianceDocuments'
export const GUARANTOR_STRING: string = "guarantor"
export const PARTNER_STRING: string = "partner"


export const kycFields = {
    userId: 'User Id',
    landlordId: 'Landlord Id',
    tenantId: 'Tenant Id',
    gurantorId: 'Gurantor Id',
    email: 'Email',
    title: 'Title',
    firstName: 'First Name',
    surname: 'Surname',
    gdprApproval: 'GDPR approval',
    termsOfUseApproval: 'Terms of use approval',
    moblieNumber: 'Mobile Number',
    kycVerficationApproval: 'Id Verification',
    userFullAddress: 'Full address',
    customerAccountManagerId: 'Customer Account Manager',
    paymentMethods: 'Payment Method',
    dob: 'Date of birth',
    paymentId: 'Payment Method',
}
export const propertyUtilties: any = {
    electricity: "Electricity",
    gas: "Gas",
    tvLicence: "TV Licence",
    councilTax: "Council Tax",
    wiFi: "WiFi",
    cleaning: "Cleaning"
}


export const buildingType: any = [
    "Detached",
    "Semi detached",
    "Terraced",
    "Townhouse",
    "Bungalow",
    "Mobile Home",
    "Flat",
    "Maisonette",
    "Studio",
    "Bedsit",
];

export const buildingRents: any = ["100", "200", "300"]

export const tenancyDetailsDocument = {
    advertisedMonthlyRent: 'advertisedMonthlyRent',
    advertisedDeposit: 'advertisedDeposit',
    advertisedTenancyRenewal: 'advertisedTenancyRenewal',
    maxTenants: 'maxTenants',
    advertisedTenancyTerm: 'advertisedTenancyTerm',
    propertyUtilities: 'propertyUtilities'
}