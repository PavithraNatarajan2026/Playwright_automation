const str="Programminh";
for(let i=0;i<str.length;i++){
    for(j=i+1;j<str.length;j++){
        if(str[i]===str[j]){
            console.log("The duplicate characters present in input is:" +str[i]);
        }
    }
}