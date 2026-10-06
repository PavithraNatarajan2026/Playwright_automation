let arr = [1, 2, 3, 5];
let sum = 0;
let total = 0;
for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
}
for (let i = 1; i <= 5; i++) {
    total = total + i;
}console.log(total - sum);
