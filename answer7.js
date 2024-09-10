function getMaxValue(carrotTypes, capacity) {
    carrotTypes.sort((a, b) => (b.price / b.kg) - (a.price / a.kg));
    let maxValue = 0;

    for (let i = 0; i < carrotTypes.length; i++) {
        if (capacity === 0) break;

        let { kg, price } = carrotTypes[i];
        if (capacity >= kg) {
            maxValue += price;
            capacity -= kg;
        } else {
            maxValue += (price / kg) * capacity;
            capacity = 0;
        }
    }

    return maxValue;
}

console.log(getMaxValue([{ kg: 5, price: 100 }, { kg: 7, price: 150 }, { kg: 3, price: 70 }], 36)); // Output: max value the bag can hold
