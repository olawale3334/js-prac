//create a new student and add to database
 // update a student data
 // delete a student
 // categories student from diff dept in a single range ------>below 18*/
 
  let highStudent=[
    {
        name:"benjamin",
        id:1,
         age:20,

         gender:"m",
         course: "banking"
         
    },
    {
        name:"dolapo",
        id:2,
         age:21,
         gender:"m",
         course: "banking"
         
    },
    {
        name:"jenifer",
        id:3,
         age:18,
         gender: 'f',
         course: "law"
         
    },
    {
        name:"peter",
        id:4,
         age:17,
         gender:"m",
         course: "banking"
         
    },
  ]
   let banking =[]
   let law =[]
   console.log(" list of high student", highStudent)

  function addNewstudent(name,age,gender,course){
         let id =highStudent.length +1
    let student ={
            name:name,
            id: id,
            age:age,
            gender:gender,
            course:course
        }
          highStudent.push(student)
    }  
    addNewstudent("adetola", 23, "f","law")
    addNewstudent("mike", 16, "m","banking")
    console.log("list of student after adding new students",highStudent)

  function updates(id) {
    for (student in highStudent){
        if (highStudent[student].id=== id){
            highStudent[student]
        } 
    } highStudent.push(student)
    console.log("list after updated", highStudent)
  }
 updates(highStudent)

 function departmentCheck(student){
    student.forEach(student => {
        if(student.course === "banking"){
            banking.push(student)
        } else if (student.course ==="law") {
            law.push(student)
        }
        
  console.log("student in banking",banking)
  console.log("student in law",law)
    });
 }
  departmentCheck(highStudent)

    function changeStudent (id){
          for(student in highStudent){
            if (highStudent[student].id===id){
                  highStudent[student].course = "Education dept"
            }
        }console.log( "list after change student dept",highStudent)
    } 
    changeStudent(6)

    function deleteD(id){
       highStudent.splice(id -1,1)
       console.log("after deleting a student",highStudent)
    }  
      deleteD(3)

      