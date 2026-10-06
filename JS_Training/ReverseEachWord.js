let str = "Pavithra Natarajan";
let words = str.split(" ");
let result = "";
for (let i = 0; i < words.length; i++) {
    let reverse = "";
for (let j = words[i].length - 1; j >= 0; j--) {
      reverse = reverse + words[i][j];
    }
    result = result + reverse +" ";
}
console.log(result);
