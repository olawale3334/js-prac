let studentsDb = [
    {
        name: "Sule",
        id : 1,
        age: 22,
        gender: "m",
        course: "maths"
    },
    {
        name: "Chidinma",
        id : 2,
        age: 26,
        gender: "f",
        course: "psychology"
    },
    {
        name: "Janet",
        id : 3,
        age: 24,
        gender: "f",
        course: "psychology"
    },
    {
        name: "Ojetola",
        id : 4,
        age: 19,
        gender: "m",
        course: "psychology"
    }
]

let maths = []
let psychology = []

// function alloDept(arrStu){
//     for (let student in arrStu){
//         if (arrStu[student].course === "maths"){
//             maths.push(arrStu[student])
//         } else if(arrStu[student].course === "psychology") {
//             psychology.push(arrStu[student])
//         }
//     }
//     console.log("Maths Department:", maths);
//     console.log("Psychology Department:", psychology);
// }

// alloDept(studentsDb)

function addStudent( name,age,gender,course){
       let id = studentsDb.length +1
    let students = {
        name : name,
        id :  id,
        age : age,
        gender: gender,
        course : course

    }  
      studentsDb.push(students)
     
       
}
 addStudent("promise",12,"m", "maths")
 console.log("update after adding a new student", studentsDb)

     function updatestudentId(id){
         for (student in studentsDb){
            if (studentsDb[student].id == id){
                studentsDb[student]
            }
         } console.log(studentsDb)
         studentsDb.push(student)
         
     } 
         function deleteStudent( ){
        
            let student = studentsDb.pop()
            
               console.log("student after deleting ", studentsDb)
         }
         deleteStudent()