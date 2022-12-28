
function obj() {
    var name = '이이이';

    // return function() { //getter역할
    //     return name;
    // }

    // return function(sn) { //setter역할
    //     name = sn;
    //     return name;
    // }

    return { //getName키(name을 반환하는 함수를 값으로 가짐), setName키(sn을 name으로 바꾸어 반환하는 함수를 값으로 가짐)를 가진 객체 반환
        getName : function() {
            return name;
        },
        setName : function(sn) {
            name = sn;
            return name;
        }
    }
}

// var getObj = obj();
// console.log(getObj());
// var setObj = obj();
// console.log(setObj('김김'));
var result = obj(); //obj return - 객체
result.setName('박박'); //setter
console.log(result.getName()); //getter
