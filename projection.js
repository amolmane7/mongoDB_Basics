show dbs

//selecting firstname from all the documents
 
db.students.find({},{"firstName" : 1 , "_id" : 0})

//fetching ages of all students
db.students.find({},{"age" : 1 , "_id" : 0})