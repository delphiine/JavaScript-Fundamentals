const notifyByEmail = (emailAddress) => {
    return `Email sent to: ${emailAddress}`;
}

const notifyByText = (phoneNumber) => {
    return `Text sent to: ${phoneNumber}`;
}

const notify = (contactMethod, notifyFunction) => {
    return notifyFunction(contactMethod);
}

