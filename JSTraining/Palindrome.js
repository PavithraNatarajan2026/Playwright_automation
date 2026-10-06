let str="madam";
let reverse="";
for(let i=str.length-1;i>=0;i--){
    reverse+=str[i];
}if(str===reverse){
    console.log("The string is a palindrome");
}else{
    console.log("The string is not a palindrome");
}