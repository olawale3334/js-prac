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
        course: "maths"
    }
]
console.log("list of student before adding ",studentsDb)

let maths = []
let psychology = []

function alloDept(student){
    student.forEach(student => {
        });

        if (student.course === "maths"){
            maths.push(student)
        } else if(student.course === "psychology") {
            psychology.push(student)
        }
    }
    console.log("Maths Department:", maths);
    console.log("Psychology Department:", psychology);


    

alloDept(studentsDb)

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




      function updatestuden(id){
            for(student in studentsDb){
                if (studentsDb[student].id==id){
                    studentsDb[student].course ="social studies"
                }
            } console.log( " student data after updating",studentsDb)
         }
         updatestuden(3)
         
         function deleteStudentid(studentId ){
          studentsDb.splice( studentId -1,1)
           console.log("student data base after deleting a student",studentsDb)
         }
         deleteStudentid(4)

         
        