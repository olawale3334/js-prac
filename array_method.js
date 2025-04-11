// index of is use to check if an array contain a value. if it does it return the value but it not it return -1
  let supers = ["superman","batman", "flash","aquaman",]
// console.log(supers.includes("flash")) it shows true but if it doesnt exit in our array it shows  false 

 //console.log(supers.indexOf('flash'))
 //console.log(supers.shift())
// console.log(supers);
  // console.log(supers.unshift('thor'));
  
 //  merging of 2 arrays using concat
 let newsuper = supers.concat(["professor","hacker", "blockchain"])
  console.log(newsuper);
  console.log(supers.join('|'))
//  split turn a string to an array
//    let supers = "superman , batman, flash";
//    let supersArray =supers.split(',')
//    console.log(supersArray)
     
 // console.log(supers.reverse())
 //supers.sort();
 //console.log(supers);
 
   //let fruits =[ "apple","orange","banna"]
//     fruits.unshift("cherry","pinapple")
//    console.log(fruits)
//    fruits.push( "plum","grape")
//    console.log(fruits)
//    fruits.splice(1,1, "lemon")
//    console.log(fruits)
//     fruits.sort()
//     console.log(fruits)


// array iterator methods
//let supers=[ 'superman', 'batman', 'flash', 'aquaman',
//'thor', 'spiderman','wolveline','cyclos','professor x']
//  supers.forEach(
//     function(value,index,array){
//         console.log(value)
//     }
//  );

//map ============> is use map our values to new array wihout affecting our array
// function uperCase(value){
//    return value.toUpperCase();
// }
// let supersCap = supers.map(uperCase)
// console.log(supersCap);
//  let num = [1,2,3]
// function double(x){
//     return  x * 3;
//  }
//  let doubleN = num.map(double)
//  console.log(doubleN)
//  console.log(num);

// filter ==============>
//   let num =[1,2,3,50,54,77,34,98,13,100] ;
//  let evenN = num.filter(
//     function(value){
//         return value %2 === 0;
//     }
//  ) 
//  console.log(evenN)