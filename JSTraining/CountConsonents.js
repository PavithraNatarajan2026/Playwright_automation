let str="Pavithra Natarajan";
let count=0;
for(let i=0;i<str.length;i++){
    if(str[i]!=="a" && str[i]!=="e" && str[i]!=="i" && str[i]!=="o" && str[i]!=="u" && str[i]!==" "){
        count++;
    }
}
console.log("The number of consonants in the string is: " + count);