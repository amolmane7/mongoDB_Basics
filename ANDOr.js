use school

db

db.students.find()

//find document using AND operator

db.students.find({"firstName" : "Rohit" , "age" : "30"})

//find document using OR operator

db.students.find({$or : [ {"firstName" : "Amit"},{"age" : "30"} ]})


