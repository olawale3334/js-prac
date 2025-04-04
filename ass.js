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

// function countVowels(str) {
//     let vowels = 'aeiouAEIOU';
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//       if (vowels.includes(str[i])) {
//         count++;
//       }
//     }
//     return count;
//   }

//   const input1 = 'Hello World';
// const input2 = 'Jennifer';
// const vowelCount1 = countVowels(input1);
// const vowelCount2 = countVowels(input2);

// console.log(`Number of vowel alphabets in "${input1}": ${vowelCount1}`);
// console.log(`Number of vowel alphabets in "${input2}": ${vowelCount2}`);

// 
function calculateAverage(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    return sum / numbers.length;
  }
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const average = calculateAverage(numbers);
console.log(average); // Output: 5.5
