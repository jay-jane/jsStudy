
function func1(x, y) {
    //arguments 키워드를 통해 매개변수를 찾아 사용할 수 있음
    console.log("매개변수의 길이 : " + arguments.length);
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
    return x + y;
}

//js에서는 매개변수에 큰 의미가 없다. 값에 이름을 붙이는 개념
console.log(func1(1));
console.log(func1(1, 2));
console.log(func1(1, 2, 3, 4, 5));
