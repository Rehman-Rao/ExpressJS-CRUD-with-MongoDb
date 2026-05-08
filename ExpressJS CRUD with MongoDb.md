What is CRUD?
            Datebase
                |
                |
    _________________________
    Create Read Updtae Delete
                |
               CRUD


Express Js with MongoDb
We use a Special pkg for use Mongo, Mongoos Pkg

Step 1
npm install mongoose
Step 2
const mongoose = require('mongoose')
Step 3
mongoose.connect('mongodb://127.0.0.1:27017/database-name')
Step 4
const test = mongoose.model('user', mongoose.Schema({
    name:{
        type: String
    },
    age:{
        type: Number
    }
}));


MongoDb Commands
1) Create - insertOne() OR insertMany() 
2) Read - find() OR findOne()
3) Update - updateOne() OR updateMany()
4) Delete - deleteOne() OR deleteMany()
5) create()
6) findById() - help to short Query did same thing
7) findByIdAndupdate()
8) findByIdAndDelete()