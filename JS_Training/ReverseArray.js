let arr = [10, 20, 30, 40, 50];
let result = [];
for (let i = arr.length - 1; i >= 0; i--) {
    result[result.length] = arr[i];
}

console.log(result);
