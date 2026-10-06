let arr = [40, 10, 30, 20, 50];
for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] < arr[j]) {
            let a = arr[i];
            arr[i] = arr[j];
            arr[j] = a;
        }
 }
}console.log(arr);
