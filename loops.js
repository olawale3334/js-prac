  
 // nested loops the first loop outer while the second  is inner loops 
// for (let i =1; i <=5; i++){
//     console.log(i)
//     for (let s =1;s<=4;s++){
       
//         console.log("inner loops")
//     }
// }
 
// function checkoutVowel(str){
//     let vowel = 'aeiouAEIOU';
//     let result= []
//     for (let i =0; i<vowel.length; i++ ){
//         for (let l = 0; l < str.length; l++){
//             if (str[i] === vowel[l] ){
//                 result.push(str[i])
//                 console.log(result)
//             }
//         }
//     }
// }checkoutVowel("manuel")

// while loops
// let i = 0;
// while ( i <= 10){
//     console.log(i)
//     i++
// }

// let favFood = [ "pounded yam", 'plantain','potatoes', 'eba',];

// let i = 0;
// while(i<= favFood.length){
//     console.log(`fav food is as follows: ${favFood[i]}`)
//     i++
// }

// do while loops the code runs the do code first 
//   let a = 0;
//   do{
//     console.log(`the numbers${a}`)
//     a++
//   } while(a<=10)

// for in loops example
// let character = {
//     name:'ola',
//     age: 9,
//     gender:"male"
// }
// for (let x in character){
//     console.log(` ${character[x]}`)
// }
 // for of loops

//  let num= "blockfuselabs"
//  for( l of num){
//     console.log(l)
//  }

// let favFood = [ "pounded yam", 'plantain','potatoes', 'eba',];
//  for(x of favFood){
//     if(x=== "eba"){
//         break
//     }else{
//         console.log(x)
//     }
//  }
   

//  const cube =[
//     [
//         [1,2,3],
//         [4,5,6],
//         [7,8,9]
//     ],
//     [
//         [110,11,12],
//         [13,14,15],
//         [16,17,18]
//     ],
//     [
//         [19,20,21],
//         [22,23,24],
//         [25,26,27]
//     ],
//  ];
//    for(let i =0; i < cube.length; i++){
//       for ( let j=0; j< cube[i].length;j++){
//         for (let k =0; k< cube[i][j].length;k++){
//             console.log(cube [i][j])
//         }
//       }
//    }

//example of nested loops

let numberId =[
{
      name:"favor",
      age: 29,
      gender: "m",
      course: "maths"
},
{
    name:"lucky",
    age: 39,
    gender: "m",
    course: "maths"
},
{
    name:"john",
    age: 19,
    gender: "m",
    course: "english"
},
{
    name:"palmer",
    age: 12,
    gender: "m",
    course: "english"
},
{
    name:"mike",
    age: 23,
    gender: "m",
    course: "maths"
},
{
    name:"jenifer",
    age: 19,
    gender: "f",
    course: "english"
},
] 
let maths =[]
let english =[]
 function departmentCheck(arrOfstudent){
   for ( let student in arrOfstudent){
    if(arrOfstudent[student ].course === "maths"){
        maths.push(arrOfstudent[student])
    } else if (arrOfstudent[student].course === "english"){
        english.push(arrOfstudent[student])
    }
   } console.log("student in department of maths are:", maths)
   console.log("student in department of maths are:", english)
 }
  
 departmentCheck(numberId)

 // create a new student and add to database
 // update a student data
 // delete a student
 // categories student from diff dept in a single range ------>below 18
 

