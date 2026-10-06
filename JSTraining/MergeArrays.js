let arr1 = [10, 20, 30];
let arr2 = [40, 50, 60];
let arr3 = [];
for (let i = 0; i < arr1.length; i++) {
    arr3[i] = arr1[i];
}
for (let i = 0; i < arr2.length; i++) {
    arr3[arr1.length + i] = arr2[i];
}
console.log(arr3);
