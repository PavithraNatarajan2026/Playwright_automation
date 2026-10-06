let arr = [10, 25, 5, 40, 15];
let largest = arr[0];
let second = arr[0];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
        second = largest;
   largest = arr[i];
 }
}console.log(second);
