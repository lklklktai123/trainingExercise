//bt 1 
var x = 10;
var y = 5;
var c1 = x + y;
var c2 = x++;
var c3 = y--;
var c4 = 0 ; 
c4 +=y;
var c5 = x * y;
var c6 = x / y ;
console.log("Bài tập 1" + "\n");
console.log(c1 + " ",c2 + " ",c3 + " ",c4 + " ",c5 + " ",c6 + " ");
console.log("-------------------------------------");
// bt 2
var information = "THÔNG TIN CÁ NHÂN";
var name = "Phan Nguyễn Thành Tài";
var dayOfBirth = "19/01/1996";
var gender = "Nam";
var phone = "0965143263";
var address = "119/49A Nguyễn Hồng Đào quận Tân Bình";
console.log("Bài tập 2" + "\n");
console.log(information + "\n",name+ "\n",dayOfBirth + "\n",gender + "\n",phone+ "\n",address);
console.log("-------------------------------------");
// bt3 
var informationObject = {
     name : "Phan Nguyễn Thành Tài",
     dayOfBirth : "19/01/1996",
     gender : "Nam",
     phone : "0965143263",
     address : "119/49A Nguyễn Hồng Đào quận Tân Bình"

}
console.log("Bài tập 3" + "\n");
console.log(informationObject.name + "\n",informationObject.dayOfBirth + "\n",informationObject.gender 
+ "\n",informationObject.phone + "\n",informationObject.address + "\n")
console.log("-------------------------------------");
// bt 4
var cat = {
    name : "cat",
    age : 12
}
var dog = {
    name : "dog",
    age : 5
}
var vet = {
    name : "vet",
    age : 1
}

var listanimal = [cat,dog,vet];
console.log("Bài tập 4" + "\n");
console.log(listanimal[0].name + " " + listanimal[0].age + "\n" + listanimal[1].name + " " + listanimal[1].age + "\n" 
+ listanimal[2].name + " " + listanimal[2].age + "\n");
console.log("-------------------------------------");
// bt 5
var edge = 10;
var h = 20;
s = edge * h;
p = edge * 3 ;
console.log("Bài tập 5" + "\n");
console.log("Diện tích: " + s + "\n" + "Chu vi: " + p);
console.log("-------------------------------------");
// bt 6
a = 10;
x1 = --a + a++
console.log("Bài tập 6" + "\n");
console.log("--a lấy 10 -1 xong gán cho a a++ lấy 9 gán cho a xong mới + 1 sau =>> --a + a++ :" + x1);
console.log("-------------------------------------");
// bt 7 
console.log("Bài tập 7" + "\n");
console.log("Có 3 cách :" + "\n" + "1: lấy a = a *2" + "\n" + "2: Lấy a = a + a" + "\n" + "3 : a += a");
console.log("-------------------------------------");
// bt 8
function getBoxVolume(w,h,l) {
    return w * h * l
}
console.log("Bài tập 8" + "\n");
console.log(getBoxVolume(10, 20, 30) + " " +  getBoxVolume(4, 5, 6)); // 6000 ; 120
console.log("-------------------------------------");
// bt 9
var rectangle = {
    width : 10,
    height : 5,
    get  getWidth() {return this.width},
    get  getHeight() { return this.height},
    get getArea() { return this.getWidth * this.getHeight  }
} 
console.log("Bài tập 9" + "\n");
console.log("Chiều rộng : " + rectangle.getWidth + " Chiều dài : " + rectangle.getHeight + "\n" + "Diện tích: " + rectangle.getArea);
console.log("-------------------------------------");
// bt 10
console.log("Bài tập 10" + "\n");
console.log(" ý 1 :Khi so sánh 2 object vs nhau về cơ bản là chúng so sánh xem 2 object có được tham chiếu đến cùng một vị trí trong bộ nhớ hay không." + "\n" 
+ "vì không tham chiếu trên cùng 1 ví trí trong bộ nhớ nên chúng không bằng nhau");
console.log("ý 2: Khi so sánh 2 chuổi string mà là kỉ tự kiểu số chúng sẽ so sánh kí tự đầu tiên của chuổi đó => '1000' < '200' vì 1 < 2 => a > b là false ");
console.log("-------------------------------------");
//bt 11
//11.a 
var bt11A = [1, 2, 4, 8, 16];
console.log("Bài tập 11.a" + "\n");
for (const key of bt11A.reverse()) {
    console.log(key);
}
console.log("-------------------------------------");
//11.b
var bt11B1 = [1, 2, 3, 4, 5];
var bt11B2 = [10, 20, 30];
console.log("Bài tập 11.b" + "\n");
for (const keyBt11B1 of bt11B1) {
    for (const keyBt11B2 of bt11B2) {
        console.log(keyBt11B1 * keyBt11B2);
    }
}
console.log("-------------------------------------");
//11.c
function calculate(start,end) {
    var value = start;
    for (start ;start < end -1;start++) {
        console.log(value *= start+1);
    }

}
console.log("Bài tập 11.c" + "\n");
calculate(3,5);
console.log("-------------------------------------");

//12
function multiply(arr) {
    var value = 1;
    for (const key of arr) {
    console.log(value *= key);     
    }
}
console.log("Bài tập 12a" + "\n");
 multiply([4,3,4,5]);
 var apartment = {
    bedroom: {
      area: 20,
      bed: {
        type: 'twin-bed',
        price: 100
      }
    }
  };
  
 console.log("Bài tập 12b" + "\n");
 function showArray(value) {
    for (const key in value) {
         console.log(key);
          if (typeof(value[key]) === "object") {
             showArray(value[key])
             
          }
    }
 }
 showArray(apartment);
 console.log("-------------------------------------");
 //bt13
 console.log("Bài tập 13" + "\n");
 function removeArr(arr,n) {
    var value = arr.length - n;
    console.log(value);
    for (var i = 0 ;i <= value -1 ; i ++) {
            arr.splice(-1,1);
    }
    console.log(arr);
    
}
 removeArr([1,2,3,4,5],4)
 console.log("-------------------------------------");
