  /*grading system
  100-90 =A
  80-98=B
  70-89 =C
  60-79 = D
  BELOW 60 =f*/
//    let score = 59
//    let grade
//  if (score >=90 && score <=100 ){
//     grade ="A"
//  } else if (score >=80 && score <=89){
//     grade = "B"
//  } else if (score >= 70 && score <=79){
//     grade ="C"
//  } else if (score >=60 && score <=69 ){
//     grade = "D"
//  } else {
//     grade = "F"
//  }
//  console.log(grade) 

// let score =  60
//  let grade
// if ( score >= 90 && score <= 100){
//     grade = "A"
// } else if (score >= 80 && score <=89 ){
//     grade = "B"
// } else if (score >= 70 && score <=79){
//     grade = "C"
// } else if (score >=60 && score <=69){
//     grade ="D"
// } else if (score >=0 && score <=59)  {
//     grade = "F"
// }
// console.log(grade)

 //

//  function vowelNumber (letter){
//      const vowel = 'A,E,O,I,U,a,e,i,o,u';
//      const  result =
             
//              vowel.includes(letter);  
//              console.log(result)
//  }
 
// vowelNumber('z')


// let array =[];
// let sum =0;
// let num =10;
// let average =sum/num;
// for(let i = 0; i<=num; i++){
//        array.push(i)
//       sum += num[i]
     
//       console.log(array)
//       console.log(average)
//} 

// function minNumbers(arr){

//     let min = arr[0]

//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] < min){
//             min = arr[i]
//         }
//     }

//     return min;
// }


// let numbers =  [29,13,75,7,50,42]

// console.log(minNumbers(numbers));


//

function countVowels(str) {
    let vowels = 'aeiouAEIOU';
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (vowels.includes(str[i])) {
        count++;
      }
    }
    return count;
  }

  const input1 = 'Hello World';
const input2 = 'Jennifer';
const vowelCount1 = countVowels(input1);
const vowelCount2 = countVowels(input2);

console.log(`Number of vowel alphabets in "${input1}": ${vowelCount1}`);
console.log(`Number of vowel alphabets in "${input2}": ${vowelCount2}`);

// 
// function calculateAverage(numbers) {
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//       sum += numbers[i];
//     }
//     return sum / numbers.length;
//   }
//   const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const average = calculateAverage(numbers);
// console.log(average); // Output: 5.5



// assignment task 2

// let moviesDb =[
//   {
//     title:"Archemy of soul",
//     id : 1,
//     Genre: "action",
//     year: 2026,
//    watched: 'true'
    
//   },
//   {
//     title:"taxi driver",
//     id : 2,
//     Genre: "action",
//     year: 2022,
//     watched: 'false'

    
//   },
//   {
//     title:"Archalugo",
//     id : 3,
//     Genre: "love",
//     year: 2025,
//     watched: 'false'
//   },
//   {
//     title:"all of us are dead",
//     id : 4,
//     Genre: "horror",
//     year: 2023,
//    watched: 'true'
//   },
//   {
//     title:"uncanny counter",
//     id : 5,
//     Genre: "action",
//     year: 2022,
//     watched: 'false'
//   },
// ]
// let watch =[]
// let unwatched =[]
     
// function addMovie( title,id, Genre,year,watched){
    
//    let movie = {
//      title: title,
//      id: id,
//      Genre:Genre,
//      year: year,
//      watched: watched
// }
//   moviesDb.push(movie)
// }
// addMovie("Night agent",6,"action",2022, 'true')
// addMovie("Vicenzo casanova",7,"action",2021, 'true')
// console.log("moive watchlist after adding a new moives",moviesDb )

// function markASWuw(mark){
//      for ( let movie in mark) {
//        if (mark[movie].watched === 'true'){
//          watch.push(mark[movie])
//        } else if (mark[movie].watched === 'false'){
//           unwatched.push(mark[movie])
//       }
//      }  console.log("result after mark as watched", watch)
//      console.log("result after mark as unwatched", unwatched)
// }
//   markASWuw(moviesDb)

//   moviesDb.forEach(movie => {
//     console.log( `watched:${movie.watched} `)
//   });
//           function deleteM() {
//             moviesDb.pop()
//             console.log( "movie list after deleting one",moviesDb)
            
//           }
//           deleteM()
//        moviesDb.sort((first,second) => first.year-second.year )
//        console.log(" watchlist after sorted by year",moviesDb)


        // task 1
         let todosApps = [
          {
            title:"pray",
            id : 1,
           completed: 'true'
            
          },
          {
            title:"pray",
            id : 2,
           completed: 'true'
            
          },
          {
            title:"wash",
            id : 3,
           completed: 'false'
            
          },
          {
            title:"go to gym",
            id : 4,
           completed: 'false'
            
          },
         
          ]
          console.log(todosApps)
            id = todosApps.length +1
         function addTask ( title,completed){
             let newadded = {
              title:title,
              id:id,
              completed:completed
             }  
             todosApps.push(newadded)
            }  
            addTask("coding","true")
            console.log("todos after adding a new todos",todosApps)
            


            let done=[]
            let undone=[]

            function markASWuw(mark){
              for ( let hello in mark){
                if ( mark[hello].completed === 'true'){
                  done.push(mark[hello])
                } else if(mark[hello].completed === 'false'){
                  undone.push(mark[hello])
                }
              }
            }
            markASWuw(todosApps)
            console.log("after mark as done",done)
            console.log("after mark as undone",undone)


            function deleteTask() {
              todosApps = todosApps.filter((todosApps, i) => todosApps.id !== 4);
              console.log(todosApps)
            }
            deleteTask()