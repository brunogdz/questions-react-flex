function q2(arr) {
    for (let i = 0; i < arr.length; i++) {
      setTimeout(() => {
        console.log(arr[i], new Date());
      }, 2 ** i * 1000);
    }
  }