import {isValidPhoneNumber} from 'react-phone-number-input'

const personalDetailFormValidation = (values: any, data: any) => {
    const errorList: any = {}

    if (!values.firstName) {
        errorList.firstName = "First name is required"

    }


    if (!values.lastName) {
        errorList.lastName = "Last name is required"

    }

    if (!values.title) {
        errorList.title = "Title is required"

    }
    return errorList

};

export default personalDetailFormValidation
