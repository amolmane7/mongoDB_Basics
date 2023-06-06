db

show dbs

//create database

use myDb

db

db.mycollection.insertOne({
                        "name" : "Aman"
                        })
                        
show dbs

//drop database

db.dropDatabase()

//create collection and drop collection

db.createCollection("myCollection")

db.myCollection2.insertOne({
                            "firstName" : "Amit" ,
                            "lastName"  : "Singh" 
})

//show all collections

show collections

//delete collection

db.myCollection2.drop()

show collections