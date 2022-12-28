
//배열을 조작하는 다양한 함수 - MDN
var arr = [1, 2, 3, 4, 5];

//배열 마지막에 추가 - push
arr.push(6);
console.log(arr);

//배열 마지막 데이터 빼기 - pop()
arr.pop();
console.log(arr);

//배열의 첫 번째 자리에 추가 - unshift
arr.unshift(['추가된배열'], -1, 0);
console.log(arr);

//배열의 첫 번째 데이터 제거 -shift()
arr.shift();
console.log(arr);

//임의의 위치의 값을 추가/삭제 - splice
arr.splice(2, 1); //2번 인덱스부터 값을 1개 삭제
console.log(arr);

arr.splice(2, 1, 'a'); //2번 인덱스부터 값을 1개 삭제하고 'a' 삽입
console.log(arr);

arr.splice(2, 0, 1); //삭제 없이 2번 인덱스에 1 삽입
console.log(arr);

//배열 정렬 - sort
var arr2 = [2, 7, 1, 5, 3];
arr2.sort();
console.log(arr2);

if(arr2.indexOf('a') != -1) { //이런 식으로 사용 가능

}

//배열 탐색 - indexOf
console.log(arr2.indexOf(2)); //2가 있는 위치 반환 - 1
console.log(arr2.indexOf(2, 3)); //인덱스 3부터 2가 있는지 탐색 - 없으면 -1 반환

//배열 합치기 - concat
var arr = ['가', '나', '다'];
var newArr = arr.concat(arr2);
console.log(newArr);

//알아두어야 할 것들 : filter, foreach, join, map ...
