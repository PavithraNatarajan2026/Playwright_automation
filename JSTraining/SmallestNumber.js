let arr = [10, 25, 5, 40, 15];
let smallest = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
        smallest = arr[i];
 }
}console.log(smallest);
