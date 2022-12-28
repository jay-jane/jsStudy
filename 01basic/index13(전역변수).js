
var num1 = 50; //전역변수 - global
if(true) {
    var num2 = 100; //전역변수 취급
}
console.log(num2);

function add() {
    var num3 = 200; //지역변수
}
// console.log(num3); //err, 함수 안에서만 유효함

//let변수(es6) - 중괄호 스코프 (변수의 중복 선언x)
let x1 = 100;
if(true) {
    let x2 = 200; //지역변수 취급
}
// console.log(x2); //err

function add2() {
    var x3 = 200; //지역변수
}
