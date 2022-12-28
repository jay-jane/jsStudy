
//변수에 바로 함수를 지정할 수 있다***
var a = function() {
    console.log('a 함수');
}
a();

var b = function(x, y) {
    return x + y;
}
var result = b(1, 2);
console.log('b함수 실행 결과 : ', result);

//즉시 실행 함수
(function() {
    console.log('--------');
    console.log('즉시실행');
    console.log('--------');
})();

//1. 익명함수로 변경하기
function method(x) {
    if(x % 2 == 0) {
        return '짝수'
    } else {
        return '홀수'
    }
}

var m = function(x) {
    return x % 2 == 0 ? '짝수' : '홀수';
}
console.log(m(1));
console.log(m(2));

//2. 매개 변수를 3개 받아서 평균을 반환하는 익명함수를 선언
var f = function(v1, v2, v3) {
    return parseFloat(v1 + v2 + v3) / 3;
}
console.log(f(5, 10, 19));
