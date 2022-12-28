
//배열의 선언 방법
var arr = [1, 2, 3]; // []로 바로 선언하기
console.log(arr);

var arr2 = ['a', 'b', 'c'];
console.log(arr2);

var arr3 = [1, 2, 3, 'a', 'b'];
console.log(arr3);

//배열 값 사용하기
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
arr[0] = 100; //배열 값 변경
console.log(arr[0]);
console.log('----------------------');

var arr2 = new Array(10); //크기가 10인 빈 배열
console.log(arr2);

var arr3 = new Array(2, 4, 6); //크기가 3이고 초기값으로 2, 4, 6을 갖고 있는 배열
console.log(arr3);

//배열의 길이 확인 - length
console.log('배열의 길이 = ', arr3.length);
