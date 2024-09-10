async function printWithDelays(arr) {
    let delay = 1000; 

    for (let item of arr) {
        await new Promise(resolve => setTimeout(resolve, delay));
        console.log(item);
        delay *= 2; 
    }
}

printWithDelays(['a', 'b', 'c', 'd']);
