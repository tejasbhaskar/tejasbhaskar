
alert("Hi");
confirm("Myself tejas bhaskar.");
prompt("you are a hacker");
document.write("Welcome coder");
console.log("How are u chutiya");
alert("Hi Bhaskar");
document.write("Are you a coder","</br>");
confirm("Yes");
prompt(" Are you agree with  me");
console.log("How is the josh");
//arithmatic opeerater//
var a = 10
var b = 20
document.write(a+b,"</br>");
document.write(a-b,"</br>");
document.write(a*b,"</br>");
document.write(a/b,"</br>");
document.write(a==b,"</br>");
document.write(a>b,"</br>");
document.write(b>a,"</br>");
document.write(b/a,"</br>");
//conditionnal operater//
var x =8;
var y =6;
var cond1 = x>y;///true
var cond2 = x === 8; //true
console.log("cond1 && cond2 =",cond1 && cond2);
console.log("!(8<6) = ",!(x === 8)); // true
console.log("!(8>6) = ",!(x === y)); // 
//conditional operater//
var p=5
var q=6
var cond1=p<q;//true
var cond2=p==5;//true
document.write("cond1 && cond2 =",cond1 && cond2,"</br>");
document.write("!(5<6)=",!(p==5),"</br>");//true
document.write("!(5>6)=",!(p==q),"</br>");//true
//if/else statement//
let age=10
if(age>18){
    document.write("You can drive a car.");
}
else{
    document.write("What can  i hit a Slap under you ear.");
}
////////
let num = prompt("enter a number");
if(num % 5==0){
console.log("num is mul by 5");
}
else{
console.log("num is not mul by 5")
}
let score = 87;
let grade;
if(score>=90 && score<=100){
grade = "A"
}
else if(score>=70 && score<=89){
    grade = "B"
}
else if(score>=60 && score<=69){
    grade = "C"
}
else if(score>=50 && score<=59){
    grade = "FAIL"
}
console.log("According to your score,your grade was:");
//loop//
for(let i=1; i<=10; i++)
{
    console.log("WELCOME HACKER");
}
for(let i=1; i<=2; i++)
{
    document.write("WELCOME HACKER","</br>");

}
for(let i=1; i<=5; i++){
    document.write("i=",i,"</br>");
}
