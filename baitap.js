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
 //bt14 callback function bi
 function double(num) {
     return num * 2 ;

 }
 function sumAndDo(arr,callback) {
     var value = 0;
     for (const key of arr) {
         value = callback(key);
         console.log(value); 
     }
     
}
console.log("Bài tập 14a" + "\n");
sumAndDo([5,5,5],double);
console.log("Bài tập 14a" + "\n");
function transform(arr,callback) {
    var result = [];
    for (var i = 0;i < arr.length ; i++) {
        result.push(callback(arr[i]));
    }
    return result

}
function duyetMang(num) {
        return num * 2
   
}
var output = transform([1,2,3,4,5],duyetMang);
console.log(output);
//bt 15
console.log("Bài tập 15a" + "\n");
function tripple(num) {
    return num * 3 ;
}
var numbersBt15 = [10, 5, 8];
var newNumbersBt15 = numbersBt15.map(function(value,index){
    return value = tripple(value)
});
console.log(newNumbersBt15);
// function sochan(start,end) {
// for ( start ;start <= end; start++) {
//     if (start % 2 == 0) {
//         console.log(start);
//     }
// }
// }
// function sole(start,end) {
//     for ( start ;start <= end; start++) {
//         if (start % 2 > 0) {
//             console.log(start);
//         }
    
//     }
//     }
// function insoTheoDieuKien(callback) {
//     for (var index = 1 ; index<= 100;index++) {
//         const dk = callback(index);
//         if (dk) {
//             console.log(index)
//         }
//     }
// }
// insoTheoDieuKien(function(index) {
// if (index % 2 == 0) {
//     return true;
// } else {
//     return false
// }
// })
// const  bb = [1,2,3,4];
// const newbb = bb.map(function(value,index){
//     return value *2;
// })
// console.log(newbb);
var namesOnly = ([
    {
      name: "Angelina Jolie",
      age: 80
    },
    {
        name: "Eric Jones",
        age: 2
      },
      {
        name: "Paris Hilton",
        age: 5
      },
      {
        name: "Kayne West",
        age: 16
      },
      {
        name: "Bob Ziroll",
        age: 100
      }
    ])
    var newNamesOnly = namesOnly.map(function(value,index){
        return value.name
    })
    console.log("Bài tập 15b" + "\n");
    console.log(newNamesOnly);
    console.log("-------------------------------------");
    var arrayHeightWidth = ([
        {
          witdh: 4,
          height : 6
        },
         {
          witdh: 5,
          height : 7
        },
        {
          witdh: 1,
          height : 3
        },
        {
          witdh: 5,
          height : 10
        },
        {
          witdh: 10,
          height : 10
        }
      ]) 
      function renderAcreage(arr) {
        var newArr = arr.map(function(value,index){
            return value.witdh * value.height
        })
        return newArr;
    }
    console.log(renderAcreage(arrayHeightWidth))
    console.log("-------------------------------------");
    //bt 16
    var arrBt = [1,21,3,41,5,61,7,81,91,101]
    function fiveAndGreaterOnly(arr) {
		var newArr = arr.filter(function (value,index){
            return value > 5
        })
        return newArr
    }
    console.log("Bài tập 16a" + "\n");
    console.log(fiveAndGreaterOnly(arrBt))
    console.log("-------------------------------------");
    function evensOnly(arr) {
        var newArrBt = arrBt.filter(function (value,index) {
            if (value % 2 == 0) {
                return value;
            }
        })
        return newArrBt
    }
    console.log("Bài tập 16b" + "\n");
    console.log(evensOnly(arrBt));
    console.log("-------------------------------------");
    function findFirstEvenNumber(array) {
		return array.find(element => element % 2 == 0);
    }
    console.log("Bài tập 16c" + "\n");
    console.log(findFirstEvenNumber(arrBt));
    console.log("-------------------------------------");
    function findDivisibleNum(array, x) {
        return array.find(element => element % x == 0);
    }
    console.log("Bài tập 16d" + "\n");
    console.log(findDivisibleNum(arrBt,5));
    console.log("-------------------------------------");

    var categories = [
        { id: 1, name: 'Đồ điện tử'},
        { id: 2, name: 'Đồ gia dụng'},
        { id: 3, name: 'Nội thất'}
      ];
    var listProducts = [
        {id: 1, categoryId: 1, name: 'Tivi'},
        {id: 2, categoryId: 1, name: 'Tủ lạnh'},
        {id: 3, categoryId: 3, name: 'Ghế sofa'},
        {id: 4, categoryId: 1, name: 'Máy giặt'},
        {id: 5, categoryId: 2, name: 'Chén bát'},
        {id: 6, categoryId: 2, name: 'Nồi cơm điện'},
        {id: 7, categoryId: 3, name: 'Cửa kính'},	
        {id: 8, categoryId: 1, name: 'Điều hoà'},
        {id: 9, categoryId: 3, name: 'Bàn tròn'},
        {id: 10, categoryId: 2, name: 'Lò vi sóng'},
    ]
    function filterProductsByCategoryId(products, categoryId) {
        var filterProduct = products.filter(function (value,index){
            return value.categoryId === categoryId
        });
        return filterProduct
    }
    console.log("Bài tập 16e" + "\n");
    console.log(filterProductsByCategoryId(listProducts,3))
    console.log("-------------------------------------");
    //bt17
    console.log("Bài tập 17a" + "\n");
    var voters = [
      {name:'Bob' , age: 30, voted: true},
      {name:'Jake' , age: 32, voted: true},
      {name:'Kate' , age: 25, voted: false},
      {name:'Sam' , age: 20, voted: false},
      {name:'Phil' , age: 21, voted: true},
      {name:'Ed' , age:55, voted:true},
      {name:'Tami' , age: 54, voted:true},
      {name: 'Mary', age: 31, voted: false},
      {name: 'Becky', age: 43, voted: false},
      {name: 'Joey', age: 41, voted: true},
      {name: 'Jeff', age: 30, voted: true},
      {name: 'Zack', age: 19, voted: false}
    ];
    function totalVotes(arr) {
      var total = voters.reduce(function(total,curentValue){
        return total += curentValue.voted
      },0)
      return total
    }
    console.log(totalVotes(voters));
    console.log("-------------------------------------");
     function countOccurrences(arr){
      return arr.reduce((total,curr) => {
        if (total[curr]) {
          total[curr] += 1
        } else {
          total[curr] = 1
        }
        return total
    },{});
    }
    console.log("Bài tập 17b" + "\n");
    console.log(countOccurrences(["a","b","c","a","a","b"]));
    console.log("-------------------------------------");
    // bt 18
    function sortNumbers(arr) {
      return arr.sort();
    }
    console.log("Bài tập 18a" + "\n");
    console.log(sortNumbers([5, 1, 3, 2])); // [1, 2, 3, 5]
    console.log("-------------------------------------");
    function lengthSort(arr) {
      return arr.sort(function(a,b){
          return a.length - b.length
      });
    }
    console.log("Bài tập 18b" + "\n");
    console.log(lengthSort(["aaaa","bbb"]));
    console.log("-------------------------------------");
    function alphabetical(arr) {
      return arr.sort(function(a,b){
        return a > b
      })
    }
    console.log("Bài tập 18c" + "\n");
    console.log(alphabetical(["n","b","c","d","e","f","a"]));
    console.log("-------------------------------------");
    var arrBt18 = [
      {
        name: "Quiet Samurai",
        age: 22
      },
      {
        name: "Arrogant Ambassador",
        age: 100
      },
      {
        name: "Misunderstood Observer",
        age: 2
      },
      {
        name: "Unlucky Swami",
        age: 77
      }
    ]
    function byAge(arr){
      return arr.sort(function(a,b){
        return a.age - b.age
      })
    }
    console.log("Bài tập 18c" + "\n");
    console.log(byAge(arrBt18))
    console.log("-------------------------------------");
    var students = [
      { name: 'A', score: 100 },
      { name: 'B', score: 10 },
      { name: 'C', score: 101 },
      { name: 'D', score: 50 },
      { name: 'E', score: 75 }
    ];
    function getTopStudents(students) {
      return students.sort(function(a,b){
        return b.score - a.score
      }).slice(0,3);
    }
    console.log(getTopStudents(students))
    console.log("-------------------------------------");
    const number = [1,2,3,4,5,6,8,8]
    console.log(number.indexOf(8,-1))

    //bt19
    function removeDuplicate(arr) {
      var newArr = [];
      newArr = arr.filter(function(item, pos) {
        return arr.indexOf(item) == pos;
      })
      return newArr
    }
    console.log(removeDuplicate([1, 1, 2, 3, 3])) // [1, 2, 3]
    function average(arr) {
      var average = 0
      for (const iterator of arr) {
        average += iterator 
      }
      return Math.round(average / arr.length)
    }
    console.log(average([8, 8 , 6.75]))
    
            
    
    

        
      

        
    

      
    
    
    
            

      

