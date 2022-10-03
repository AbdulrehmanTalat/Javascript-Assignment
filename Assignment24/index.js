let myStr = "Hello world";
if(myStr != "Hello world"){
    console.log(true);
}else if(myStr == "Hello world"){
    console.log(true);
}
if(myStr.toLocaleLowerCase() == "hello world"){
    console.log(true);
}
let myNumber = 9;
if(myNumber == 9){
    console.log(true);
}
if(myNumber != 9){
    console.log(false);
}
if(myNumber > 4 && myNumber < 10){
    console.log(true);
} 
if(myNumber > 8 && myNumber == 9){
    console.log(true);
} 
if(myNumber < 10 && myNumber == 9){
    console.log(true);
}
if(myNumber > 10 && myNumber < 11){
    console.log(true)
}
if(myNumber > 10 || myNumber < 11){
    console.log(true)
}
let myArray = [1,2,3,4,5,6];
if(myArray.indexOf(3) != -1){
    console.log(true);
}
if(myArray.indexOf(7) == -1){
    console.log(true);
}