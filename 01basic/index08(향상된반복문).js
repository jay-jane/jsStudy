
//for ~ in
var arr = [1, 2, 3, 4, 5];
for(var i in arr) {
    console.log(i); //i = 인덱스 번호
    console.log(arr[i]) //배열의 값
}

//객체 생성
var obj = {a : '1', b : '2'}; // 키 : 값
for(var i in obj) {
    console.log(i); //i = 키
    console.log(obj[i]); //객체의 값
}
