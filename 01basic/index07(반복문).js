
//while문
// var a = 1;
// while(a <= 10) {
//     console.log(a);
//     a++;
// }

//for문
// for(var i = 1; i <= 10; i++) {
//     console.log('i = ', i);
// }

//배열과 for문
// var arr = [1, 2, 3, 4, 5];
// for(var i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

//빈 배열을 하나 생성하고 1~10까지 값을 반복문으로 넣기
// var arr = [];
// for(var i = 1; i <= 10; i++) {
//     arr.push(i);
// }
// console.log(arr);

//구구단 2 ~ 9단 출력하기
for(var i = 2; i <= 9; i++) {
    for(var j = 1; j <= 9; j++) {
        console.log(i, ' x ', j, ' = ', i * j);
    }
}
