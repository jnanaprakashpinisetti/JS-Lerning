// FILTER() **************

// var x = [10, 15, 20, 25, 30];
// var res = x.filter(function (value, index, array) {
//   return value % 2 === 0
// })

// console.log(res)


// REDUCE() **************

// var x = [5, 10, 15, 20, 25, 30];

// var res = x.reduce(function(v, i) {
//   console.log(v,i)
//   return  100 + v;
// })

// console.log(res)

// SORT() **************

// var x = [10, 1, 15, 30, 25, 2, 11, 111, 116];

// var res1 = x.sort();
// console.log("Res-1 only sort() 'Before other fun' = " + res1);

// var res2 = x.sort(function (a, b) {
//   if (a > b) {
//     return 1
//   } else {
//     return -1
//   }
// });

// var res4 = x.sort(function (a, b) {
//   return a - b
// });

// var students = [{
//     name: 'Prakash',
//     gender: 'male',
//     id: 'ST-11',
//     classNo: 10,
//     section: 'A',
//     rank: 'A+',
//     dob: 14 / 06 / 1990,
//     place: 'palakollu'
//   },
//   {
//     name: 'Kalyani',
//     gender: 'female',
//     id: 'ST-02',
//     classNo: 10,
//     section: 'A',
//     rank: 'A+',
//     dob: 23 / 03 / 1996,
//     place: 'Vanaparthi'
//   },

//   {
//     name: 'Bhanu',
//     gender: 'male',
//     id: 'ST-03',
//     classNo: 8,
//     section: 'B',
//     rank: 'B',
//     dob: 01 / 02 / 1999,
//     place: 'Vanaparthi'
//   },

//   {
//     name: 'Lavanya',
//     gender: 'female',
//     id: 'ST-03',
//     classNo: 9,
//     section: 'A',
//     rank: 'A+',
//     dob: 01 / 03 / 1997,
//     place: 'Vanaparthi'
//   },

//   {
//     name: 'Rama Lakshmi',
//     gender: 'female',
//     id: 'ST-02',
//     classNo: 9,
//     section: 'C',
//     rank: 'B',
//     dob: 23 / 03 / 1992,
//     place: 'Palakollu'
//   }
// ]

// students.sort(function (a, b) {
//   if (a.name > b.name) {
//     return 1;
//   } else {
//     return -1
//   }
// })
// console.log(students)

// var stydentConst = function (
//   name,
//   gender,
//   id,
//   classNo,
//   section,
//   rank,
//   dob,
//   place) {

//   this.name = name;
//   this.gender = gender;
//   this.id = id;
//   this.classNo = classNo;
//   this.section = section;
//   this.rank = rank;
//   this.dob = dob;
//   this.place = place;

// }


// var x = ['prakash', 'ramesh', 'bhanu','ravi', 'ram', 'raju', 'pk'];

// x.sort();
// console.log(x)


var x = ['prsh', 'ramesh', 'bhanu', 'ravi', 'ram', 'raju', 'pk'];

for (var i = 0; i < x.length; i++) {
  var j
  j = (x[i].length);
  
}