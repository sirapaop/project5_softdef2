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


    //profile
    name:{
        type: String,
        require: true
    },
    thainame:{
        type: String,
        require: true
    },
    studentId:{
        type: String,
        require: true
    },
    mentor:{
        type: String,
        require: true
    },
    deptment:{
        type: String,
        require: true
    },
    university:{
        type: String,
        require: true
    },

    //contract
    phone:{
        type: String,
        require: true
    },
    line:{
        type: String,
        require: true
    },
    fb:{
        type: String,
        require: true
    },
    ig:{
        type: String,
        require: true
    },

    // personal information
    hbd:{
        type: String,
        require: true
    },
    blood:{
        type: String,
        require: true
    },
    address:{
        type: String,
        require: true
    },
    allergies:{
        type: String,
        require: true
    },


})

const collection = new mongoose.model("user", LogInSchema)


module.exports = collection

