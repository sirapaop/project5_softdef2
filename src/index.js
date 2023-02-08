const express = require("express")
const app = express()
const path = require("path")
const hbs = require("hbs")
const collection = require("./mongodb")
//const user = require("../model/user")

const tempelatePath = path.join(__dirname, '../views')


app.use(express.json())
app.set('view engine','hbs');
app.set("views", tempelatePath)
app.use(express.urlencoded({extended:false}))
app.use(express.static(path.join("public")));
app.use(express.static(path.join("src")));
app.get("/",(req,res) =>{
    // res.send("Hello")
    res.render("login")
})

app.get("/signup",(req,res) =>{
    res.render("signup")
})

app.post("/signup", async (req,res)=>{

const data ={
    email:req.body.email,
    password:req.body.password,
    studentId:req.body.studentId,
    name:req.body.name,
    Thainame:req.body.Thainame,
    deptment:req.body.deptment
}

await collection.insertMany([data])

res.render("home")

})

app.post("/login", async (req,res)=>{

    try{
        const check = await collection.findOne({email:req.body.email})
        if(check.password === req.body.password){
            res.render("home")
  
        }else{
            res.render("login", {error: "password is wrong"}) 
        }

    }
    catch{
        res.render("login", {error: "Invalid username/password combination"})
        //res.send("wrong detail")
    }
    
    })



app.listen(3000, ()=>{
    console.log("port connect");
})
