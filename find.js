db
 
//find all data from collection

db.students.find()

//retrieve single document

db.students.findOne() 

//querying or filtering data from database

db.students.find({ age : {$gt : "25"}})

db.students.find({ age : {$lt : "27"}})



