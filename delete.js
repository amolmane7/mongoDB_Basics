db

//delete document one at a time

db.students.deleteOne({"firstName" : "Rohit"})

db.students.find()

db.students.deleteMany({$or : [{"age" : "26"},{"age" : "30"}]})

db.students.insertMany([{"studentNo" : "1" , "firstName" : "Rahul" , "lastName": "Sharma" ,"age" : "26"},
                        {"studentNo" : "5" , "firstName" : "Ajinkya" , "lastName": "Rahane" ,"age" : "29"},
                        {"studentNo" : "4" , "firstName" : "Virat" , "lastName": "Kohli" ,"age" : "30"},
                        {"studentNo" : "2" , "firstName" : "Rohit" , "lastName": "Kumar" ,"age" : "36"},
                        ])
                        
 db.students.find()