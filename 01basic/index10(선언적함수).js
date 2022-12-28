
//함수 선언 이전에 호출하기
func1(); //호이스팅(Hoisting) - 선언적 함수에서 사용 가능

function func1() {
    console.log('1 실행');
}

function func2() {
    console.log('2 실행');
    return '2 반환';
}

var result = func2();
console.log(result);

function func3(a, b, c) {
    console.log('3 실행');
    return a + b + c;
}

var result2 = func3(1, 2, 3);
console.log(result2);

//함수를 변수에 저장하기
var a = func1;
console.log(typeof a);
a(); //메소드 호출
