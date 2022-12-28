
var num1 = 1;
if(num1 >= 10) {
    console.log('10보다 큼');
} else {
    console.log('10보다 작음');
}

//형 변환 parseInt(값), parseFloat(값)
var a = parseInt(Math.random() * 101); // 0~100 랜덤
console.log(a);

if(a >= 90) {
    console.log('A');
} else if(a >= 80) {
    console.log('B');    
} else {
    console.log('E');
}

var b = '가';
switch (b) {
    case '가':
        console.log('가임');
        break;
    case '나':
        console.log('나임');
        break;
    default:
        console.log('나머지');
        break;
}
