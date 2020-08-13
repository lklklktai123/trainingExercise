// 1: khai bao bien
var a =5;
console.log(a);
// mo terminal
// ctr + ~
// mutable : co the gan lai du lieu
//imutable : ko the gan lai gia tri example: const
const b = 10;
console.log(b);
// 2: kieu du lieu 


//
c = 6 - 5 + 6 - 5 + 6 - 6 -7 +5 


var test = [22,33,44,55,66,77]
for (const key of test) {
   console.log(key);
}
var a = {
    name: "tai",
    tt : ""
}
for (const key in a) {
    console.log(key);
}
// iterrable la cach duyet du lieu ma dai dien cua no la array
// =>> không sử dụng object khi duyệt for of

var bt11 = [1, 2, 4, 8, 16];
for (var i = bt11.length  ;i >= 0 ;i--) {
    console.log(bt11[i]);
}
bt11.splice(-1,1);
console.log(bt11);
// them phan tu o cuoi 
// number.push(10);
//xoa phan tu o cuoi Number.pop();
//them phan tu o cuoi Number.unshift(10);
//xoa pt o o dau Number.shift
//xoa pt o giua 
//number.splice(1,1);
// them pt o giua 
//Number.splice(1,0,"bla bla");
// reduce
const number = [1,2,3,4,5,6,7,8]
const total = number.reduce(function(total,curentValue){
console.log(total,curentValue);
return total + curentValue;
},0)
