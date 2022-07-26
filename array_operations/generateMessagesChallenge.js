const namesAndDiscounts = [
    { name: 'Anna', discount: 50 },
    { name: 'Laura', discount: 40 },
    { name: 'Josh', discount: 30 },
    { name: 'Min', discount: 50 },
    { name: 'Karla', discount: 60 }
  ];

const generateMessages = (nameArrayOfObjects) => {
    return namesAndDiscounts.map((object) => {
    return`Hi ${object.name}! 50% off our best candies for you today!`;
    });
}

module.exports = generateMessages;