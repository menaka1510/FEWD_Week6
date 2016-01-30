var myArr=['hello',1.4,'true'];

//for loop to print the array values in increasing order
for(var i = 0; i < myArr.length; i++){
    console.log(myArr[i]);
}

//while loop to print the array values in reverse order
var n = myArr.length;
while(n--){
    console.log(myArr[n]);
}

//for loop to print the array values in reverse order
for(var i = myArr.length-1; i > -1; i--){
    console.log(myArr[i]);
}

//forEach element in the array, the inline function is run
myArr.forEach(function(value,index){
    console.log(value,"is at position",index);
})

//Using Switches
var x="hi";
switch(x){
     case "hello":
        console.log("hello");
        break;
     case "hi":
        console.log("Hi");
        break;
     default:
        console.log("Morning!");
}

//Using 'this'
function doSomething(){
    return this;
}
console.log(doSomething()=== window);
