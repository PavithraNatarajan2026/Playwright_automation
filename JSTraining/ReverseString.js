let name = "Pavithra Natarajan"
let word ="";
let reversed ="";
for (let i = name.length-1;i>=0;i--){
  if(name[i] === " "){
   reversed += word + " ";
   word =" ";
  }else{
    word +=name[i];
  }
}
reversed+=word;
console.log(reversed)