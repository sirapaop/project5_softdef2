const mongoose = require("mongoose")
const dbConfig = require('../config/mongodb.config.js')
//mongoose.connect("mongodb://localhost:27017/userlogin")

mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.url)
.then(() =>{
    console.log("mongodb connected");
})

.catch(()=>{
    console.log("failed to connect");
})


// model user

const LogInSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    name:{
        type: String,
        require: true
    },
    Thainame:{
        type: String,
        require: true
    },
    studentId:{
        type: String,
        require: true
    },
    year:{
        type: String,
        require: true
    },
    deptment:{
        type: String,
        require: true
    },
    address:{
        type: String,
        require: true
    },

})

const collection = new mongoose.model("user", LogInSchema)

module.exports = collection

