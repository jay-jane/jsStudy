
var arr = [1, 2, 3, 4, 5];
for(var i = 0; i < arr.length; i++) {
    if(arr[i] === 3) break;
    console.log(arr[i]);
}
console.log('-------------------------------');

var arr = [1, 2, 3, 4, 5];
for(var i = 0; i < arr.length; i++) {
    if(arr[i] === 3) continue;
    console.log(arr[i]);
}
console.log('-------------------------------');
