db

db.students.find({})

//using limit select only three documents and using project select two fields firstname and age

db.students.aggregate([{$project : {"firstName":1 , "age" : 1 , "_id":0}},{$limit : 3}])

//using skip , skip document according to condition and limit is for select number of documents

db.students.aggregate([{$project : {"firstName":1 , "age" : 1 , "_id":0}},{$skip : 2},{$limit : 2}])

