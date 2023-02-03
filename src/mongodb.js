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

const LogInSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
})

const collection = new mongoose.model("user", LogInSchema)

module.exports = collection
