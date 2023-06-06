db

//update document 

db.students.update({ "studentNo" : "2"},{$set : {"age" : "35"} })

db.students.find()

db.students.update({ "firstName" : "Ajay"},{$set : {"age" : "25"} })

db.students.find()

