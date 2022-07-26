const names = ['Anna', 'Laura', 'Josh', 'Min', 'Karla'];

const generateMessages = (nameArray) => {
    return nameArray.map((name) => {
    return`Hi ${name}! 50% off our best candies for you today!`;
    });
}

module.exports = generateMessages;
