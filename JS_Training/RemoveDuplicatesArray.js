let arr = [10, 20, 30, 20, 40, 10];
let result = [];
for (let i = 0; i < arr.length; i++) {
    let duplicate = false;
    for (let j = 0; j < i; j++) {
        if (arr[i] === arr[j]) {
            duplicate = true;
        }
    }
    if (duplicate === false) {
        result[result.length] = arr[i];
    }
}
console.log(result);
