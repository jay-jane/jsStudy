
//closure - 내부 함수를 이용해서 외부 함수의 지역변수에 접근할 수 있게 함
function func1() {
    var a = 1; //지역변수
    return function() {
        return a;
    }

    // var b = function() {
    //     return a;
    // }
    // return b;
}
var result = func1(); //func1 내부의 함수 - function
var x = result(); //익명함수의 return 값 = a
console.log(x);

function compute() {
    var count = 0; //private변수같은 개념
    return function() {
        return ++count;
    }
}
var result2 = compute(); //result2는 내부함수
console.log(result2()); //1
console.log(result2()); //2
console.log(result2()); //3


//lexical scope - 함수의 선언위치에 따라 사용 가능한 스코프가 다름
// var a = 1;
// function x() {
//     a = 10;
//     console.log(a); //10
// }
// x();

// var b = 1;
// function y() {
//     var b = 10;
//     z();
// }
// function z() {
//     console.log(b);
// }
// y(); //1
