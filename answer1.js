function findDuplicates(arr) {
    const duplicates = [];
    const seen = new Set();

    arr.forEach(item => {
        if (seen.has(item)) {
            if (!duplicates.includes(item)) {
                duplicates.push(item);
            }
        } else {
            seen.add(item);
        }
    });

    return duplicates;
}


console.log(findDuplicates([1, 2, 3, 4, 5, 2, 3, 6])); 
console.log(findDuplicates(['a', 'b', 'c', 'a', 'd']));
console.log(findDuplicates(['$', '$', 'c', 'd', 'x']));