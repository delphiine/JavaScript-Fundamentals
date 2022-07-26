const numbers = [
    '1763687364',
    '4763687363',
    '7867867862',
    'AAAA#####AAAA#87@768767382672',
    '4763687363',
    '4763687363'
];

const checkLength = (phoneNumber) => {
    if (phoneNumber.length > 10) {
        return false
    } else {
        return true
    }
}

const filterLongNumbers = (phoneNumbers) => {
    return phoneNumbers.filter(checkLength);
}
