const addressEditFormValidation = (values: any) => {
    const errorList: any = {}
    if (!values.postCode) {
        errorList.postCode = "Post Code is required"
    }
    
    if (! values.address) {
        errorList.address = 'No post code added'
    }

    return  errorList

};

export default addressEditFormValidation
