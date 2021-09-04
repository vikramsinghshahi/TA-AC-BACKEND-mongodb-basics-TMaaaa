//code 
show dbs

use sports

db.createCollection("cricket")
db.createCollection("football")
db.createCollection("TT")

show collections

db.cricket.insert({name:"rahul", age:"24", email:"123@gmail.com", bid_price:"30K"})

db.TT.reanmeCollection("tennis")

db.createCollection("khokho", {capped:true, size:1024, max:3})

show collections


db.cricket.remove({});

db.football.drop();

db.dropDatabase()

