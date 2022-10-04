import { Images } from "../../utils/imgDetails"


export const PayData = [
    {
        id: 1,
        title: 'Credit Card',
        image: Images.MASTERCARD,
        flag: true
    },
    {
        id: 2,
        title: 'PayPal',
        image: Images.PAYPAL,
        flag: false
    },
    {
        id: 3,
        title: 'Google Play',
        image: Images.GOOGLEPLAY,
        flag: false

    },
    {
        id: 4,
        title: 'Stripe',
        image: Images.STRIP,
        flag: false

    },
]
export const cardsDetails = [
    {
        id: 1,
        title: 'Personal details',
        text: 'Add',
        screen: 'personaldetails',
        flag: false
    },
    {
        id: 2,
        title: 'Address details',
        text: 'Add',
        screen: 'addressdetails',
        flag: false
    },
];
export const fullDetailDataset = [
    {

        bedrooms: 2,
        bathrooms: 3,
        size: 1000,
        furnished: true,
        type: 'Appartment',
        garden: true
    },
]
export const propertyHome = [
    {
        id: 1,
        propertname: 'High Street Apartment',
        Tenant: 'Lisa White',
        Rent: '£1000 pcm',
        image: Images.BED,
        stutus: 'Vacant',
    },
    {
        id: 2,
        propertname: 'High Street Apartment',
        Tenant: 'Lisa White',
        Rent: '£1000 pcm',
        image: Images.BED,
        stutus: 'Vacant',
    },
]

export const propertyDetail = [
    {
        id: '1',
        image: 'https://randomuser.me/api/portraits/women/57.jpg',

    },
    {
        id: '2',
        image: "https://randomuser.me/api/portraits/women/49.jpg",
    }

]
export const buttonPropertyDetail = [
    {
        id: 1,
        title: "Chat",
        screen: "chatHome"
    },
    {
        id: 2,
        title: "Maintenance",
        screen: ""
    },
    {
        id: 1,
        title: "Tenancy",
        screen: "AddedTenantDetails"
    },

]
export const inboxData = [
    {
        id: 1,
        image: 'https://randomuser.me/api/portraits/women/57.jpg',
        name: 'Lisa White',
        status: "Available"
    },
    {
        id: 1,
        image: 'https://randomuser.me/api/portraits/women/33.jpg',
        name: 'Lisa Jacob',
        status: "Available"
    },
    {
        id: 1,
        image: 'https://randomuser.me/api/portraits/women/44.jpg',
        name: 'Marie Jacob',
        status: "Available"
    },
]
export const TenancyData = [
    {
        id: '1',
        image: 'https://randomuser.me/api/portraits/women/57.jpg',
        name: 'Lisa White',
        status: true
    },
    {
        id: '2',
        image: 'https://randomuser.me/api/portraits/women/33.jpg',
        name: 'Lisa Jacob',
        status: false
    },
    {
        id: '3',
        image: 'https://randomuser.me/api/portraits/women/44.jpg',
        name: 'Marie Jacob',
        status: false
    },
]
export const TenancyDataset = [
    {
        id: 1,
        title: 'Tenancy Start Date',
        description: "20/04/2022"
    },
    {
        id: 2,
        title: 'Deposit',
        description: "£500"
    },
    {
        id: 3,
        title: 'Rent',
        description: "£1,000"
    },
    {
        id: 4,
        title: 'Rent Due Date',
        description: "1st of each month"
    },
    {
        id: 5,
        title: 'Tenancy Due Date',
        description: "20/10/2022"
    },
    {
        id: 6,
        title: 'Break Clause',
        description: "No break clause"
    },
    {
        id: 7,
        title: 'Premises',
        description: "High Street Apartment"
    },
]
export const onBoardingItem = ['Tenant', 'Landlord']
export const genderData = ['Mr', 'Mrs', 'Miss', 'Ms']
export const optionData = ['Yes', 'No', 'Exempt']
export const BooleanData = ['Yes', 'No']
export const itemArray = [1, 2, 3]
export const privateData = ['Private', 'Shared']
export const furnishData = ['Furnished', 'Semi-Furnshed', 'Unfurnished']
export const studentData = [
    'Students',
    'Unemployed',
    'Smokers',
    'Pet owner',
]
export const billData = [
    'Electricity',
    'Gas',
    'TV Licence',
    'Council Tax',
    'WiFi',
    'Cleaning',
    'None of the above',
]
export const termsData = ['Rolling monthly contract', 'Fixed term']
export const tenancy = ['New tenancy', 'Existing tenancy']



export const SettingsData = [
    { 
        id:1,
        name:'Account',
        textColor:'black',
        imagePath:Images.USERSETTINGS,
        navigation:'UserDetails',
    },
    {
        id:2,
        name:'Privacy Policy',
        textColor:'black',
        imagePath:Images.PRIVACY,
        navigation:'PrivacyPolicy',

    },
    {
        id:3,
        name:'Leave Feedback',
        textColor:'black',
        imagePath:Images.FEEDBACK,
        navigation:'Feedback',

    },
    {
        id:4,
        name:'Log out',
        textColor:'#FD9926',
        imagePath:Images.LOGOUT,
        navigation:'Auth',

    },
    
]

export const Initials = ['Mr', 'Mrs', 'Miss', 'Ms']

export const alertData = [
    {
        id: 1,
        title: "Payment details require updating"
    },
    {
        id: 2,
        title: "ID require verifaction"
    },
    {
        id: 3,
        title: "Property maintenance job logged"
    },
    {
        id: 4,
        title: "Viewing appointment requested"
    },
]
export const MyProperties = [
    {
        id: 1,
        title: "My Appartment 1"
    },
    {
        id: 2,
        title: "My Appartment 2"
    },
    {
        id: 3,
        title: "My Appartment 3"
    },
]

export const ServicesList = [
    {
      id: 1,
      title: 'Property Photography',
      screen: 'PropertyServicesDetails',
      price: '£50',
      description:`Whether you’re letting or selling you’re property, the standard in house property photography can leave your listing lost within the hundreds of properties available online. 

      With us you can use an experienced photographer to take only the best photographs of your property fully staged to ensure it appeals to the right tenant.`,
      flag: false,
      expiryDate:'13/07/2022'
    },
    {
      id: 2,
      title: 'Inventory Report',
      screen: 'PropertyServicesDetails',
      price: '£100',
      description:`Upon our inspection of the contents and condition of the property, we combine the use of highly detailed descriptions along with clear photographs to compile a professional report. This will provide you with a clear impartial snapshot of the property at the time of inspection. 

      Whether you have a studio apartment, stately home, student lets or an HMO our inventory reports can be tailored to meet the needs of the property.`,
      flag: false,
      expiryDate:'13/07/2022'

    },
    {
      id: 3,
      title: 'Gas Safety Certificate',
      screen: 'PropertyServicesDetails',
      description:`As a landlord, you’re legally required to provide an official Gas Safety Certificate for your rental property before a tenant moves in. 

      Wether your report is due now or sometime in the future you can schedule a professional engineer below and ensure your property is safe and compliant. `,
      price: '£80',
      flag: false,
      expiryDate:'13/07/2022'

    },
    {
      id: 4,
      title: 'EICR Report',
      screen: 'PropertyServicesDetails',
      description:`An Electrical Installation Condition Report (EICR) is an official document that is produced following an assessment an electrical installation, either domestic, commercial or industrial premises require inspection with varying degrees of frequency depending on the premises.

      Under the ‘Landlord and Tenants Act (1985) landlords must ensure that the electrical installation in a rented property is maintained safely throughout a tenancy. To ensure this, we recommend an EICR test at change of tenancy or at least every 5 years.
      `,
      price: '£250',
      flag: false,
      expiryDate:'13/07/2022'

    },
    {
      id: 5,
      title: 'ECP Report',
      screen: 'PropertyServicesDetails',
      description:`Energy Performance Certificate is legally required for all properties advertised on the market. It will give potential buyers and tenants with an indication of how energy efficient your property is and the typical energy costs. `,
      price: '£70',
      flag: false,
      expiryDate:''

    },
    {
      id: 6,
      title: 'Floor Plan',
      screen: 'PropertyServicesDetails',
      description:`Floor plans are essential for effectively marketing your property as you can illustrate the relationship between rooms and spaces. 

      We can quickly create detailed 2D floor plans which are accurate to scale and can even include furniture if necessary. `,
      price: '£50',
      flag: false,
      expiryDate:''

    },
  
  ];