function max(a, b) {
    return a > b ? a : b;
}


function eggDrop(n, k) {

    let eggFloor = new Array(n + 1).fill(0).map(() => new Array(k + 1).fill(0));

    let res;
    let i, j, x;

    for (i = 1; i <= n; i++) {
        eggFloor[i][1] = 1;
        eggFloor[i][0] = 0;
    }


    for (j = 1; j <= k; j++) {
        eggFloor[1][j] = j;
    }

    
    for (i = 2; i <= n; i++) {
        for (j = 2; j <= k; j++) {
            eggFloor[i][j] = Number.MAX_VALUE;
            for (x = 1; x <= j; x++) {
                res = 1 + max(eggFloor[i - 1][x - 1], eggFloor[i][j - x]);
                if (res < eggFloor[i][j]) {
                    eggFloor[i][j] = res;
                }
            }
        }
    }


    return eggFloor[n][k];
}


function testEggDrop() {
    const eggs = 2;
    const floors = 100;
    const result = eggDrop(eggs, floors);

    console.log(
        `Test: eggs = ${eggs}, floors = ${floors}, the highest floor an egg can be dropped from without breaking = ${result}th floor`
    );
}

testEggDrop();
