function fist(fullName, age, dateOf){
    console.log('hello'+ fullName+'your age is='+age + 'and your barthdate is='
        +dateOf);
}
fist('soriatullah', 23, 1997);
let a= 5;
let b= 10;
console.log( a + b );
if(a==5 && b==9){
    console.log("everithing is ok");

}else if (a==5 || b == 10){
    for(a=0; a<5; a++){
        console.log("this for loop is ok");
        console.log(a);
    }
}else{
    console.log("this code is not ok");
}
function subscribe(x, y){
        console.log("you are subscribe");
        console.log(subscribe(5,5));
        return;
}
 document.getElementById("button_style").addEventListener("click", subscribe);


 let math= function(number){
    return number+ 10;
 }
 console.log(math(10));
  console.log(math(50));
  