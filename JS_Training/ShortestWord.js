let str="JavaScript is awesome";
let words=str.split(" ");
let shortestWord=words[0];
for(let i=1;i<words.length;i++){
    if(words[i].length<shortestWord.length){
        shortestWord=words[i];
    }
}
console.log("The shortest word is: " + shortestWord);