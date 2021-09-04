//code 
show dbs

use sports

db.createCollection("cricket")
db.createCollection("football")
db.createCollection("TT")

show collections

db.cricket.insert({name:"rahul", age:"24", email:"123@gmail.com", bid_price:"30K"})

