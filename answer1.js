function findDuplicates(arr) {
    const duplicates = [];
    const seen = new Set();

    arr.forEach(item => {
        if(typeof(item) == "object"){
            let i = (`${JSON.stringify(item)}`)
            console.log(i)
            seen.add(i)
        }
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


// console.log(findDuplicates([1, 2, 3, 4, 5, 2, 3, 6])); 
// console.log(findDuplicates(['a', 'b', 'c', 'a', 'd']));
// console.log(findDuplicates(['$', '$', 'c', 'd', 'x']));
console.log(findDuplicates([
    1,
    2,
    3,
    -1,
    "Metrobi",
    10,
    { a: 1, b: 2 },
    5,
    2,
    3,
    "Metrobi",
    2,
    { a: 1, b: 2 },
    { a: 1, b: 2, c: 3 },
    "B",
  ]))