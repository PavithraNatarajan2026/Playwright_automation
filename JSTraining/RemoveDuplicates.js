const str="Programming is fun";
let result="";
for(let i=0;i<str.length;i++){
    if(!result.includes(str[i])){
        result=result + str[i];
    }
}
console.log("Duplicates are removed and the string is : " +result);