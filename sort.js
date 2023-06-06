db.students.find({})

//ascending oreder sorting
db.students.aggregate([{$sort : {"age" : 1}}])

//descending order sorting
db.students.aggregate([{$project :{"lastName":1 , "_id": 0}},{$sort : {"lastName" : -1}}])