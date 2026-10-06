let str= "programming is fun";
let maxChar= "";
let maxCount=0;
for(let i=0;i<str.length;i++){
    let count=0;
    for(let j=0;j<str.length;j++){
        if(str[i]===str[j]){
            count++;
        }
    }
    if(count===1){
        maxChar=str[i];
        break;
    }
}
console.log("The first non-repeated character is: " + maxChar);