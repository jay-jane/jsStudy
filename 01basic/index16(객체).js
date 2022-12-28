
//객체의 표현 { }
var person = {name : '이이이', age : 20, info : [1, 2, 3]};
console.log(typeof person); //객체(object)

//객체 데이터 접근 방법
//1. 객체이름.키
console.log('이름 : ' + person.name);
console.log('나이 : ' + person.age);
console.log('정보 : ' + person.info);

//2. 객체이름[키]
console.log(person['name']);
console.log(person['age']);
console.log(person['info']);

//객체 안의 객체
var exam = {kor: 90, eng: 80, math: 70};
var kim = {name: '김김', exam: exam}; //exam이라는 객체를 exam키에 넣음

console.log(kim.exam.kor);
console.log(kim.exam['eng']);
console.log(kim['exam']['math']);
