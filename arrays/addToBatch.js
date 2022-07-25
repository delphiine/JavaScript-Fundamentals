const addToBatch = (array, number) => {
    if (array.length >= 5) {
        console.log(array)
    } else {
        console.log(array.concat(number))
    };
}
