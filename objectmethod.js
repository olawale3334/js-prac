 

// assign 
// let obj1 ={name:'ola'}
// let obj2 ={track:'web2'}
// let obj3 ={mode:'game'}
// console.log(obj1);
// //u can change the target

// Object.assign(obj1,obj2,obj3)
// console.log(obj1);

// create

// let obj1 ={name:'ola'}
// let obj2 ={track:'web2'}
// let obj3 ={mode:'game'}
//  Object.assign(obj2,obj3,obj1)
// let obj4 = Object.create(obj2)
// console.log(Object.getPrototypeOf(obj4));

// let obj1 ={
//     user:['ola', 'user', 'another user'],
//     fruites:['mango', 'apple', 'orange'],
//     animas:['lion', 'elephant', 'tiger'],
//     cars:["lambo", 'benz', 'bmw']
// }
//  let keys = Object.keys(obj1)
//  let values = Object.values(obj1)


// if (keys.includes('cars') && obj1.cars.includes('bmw')){
//     console.log("bmw exist");
  
// } else {
//     console.log("car  not exist");
    
// }

// freeze
let fruite = { 
    fruite1:'mango',
     fruite2:'apple',
     fruite3: 'orange'
}
  Object.freeze(fruite)
  
  //console.log(fruite)
  if (Object.isFrozen(fruite)){
    console.log("fruite is in state of lock down" ,fruite);
    
  } else {
    fruite.fruite1 = 'melon'
  }


//  let values = Object.values(fruite)
//  if (values.includes('apple')){
//     console.log('apple exist')
//  }