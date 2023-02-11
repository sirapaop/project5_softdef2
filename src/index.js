const express = require("express")
const app = express()
const cookieParser = require("cookie-parser")
const sessions = require('express-session')
const path = require("path")
const hbs = require("hbs")
const collection = require("./mongodb")

//const user = require("../model/user")

const tempelatePath = path.join(__dirname, '../views')


const oneDay = 1000 * 60 * 60 * 24;
app.use(sessions({
    secret: "Thisismysecretekey",
    saveUninitialized: true,
    cookie: {maxAge: oneDay},
    resave: false
}));


app.use(express.json())
app.use(express.urlencoded({extended: true}));

app.set('view engine','hbs');
app.set("views", tempelatePath)

app.use(express.static(__dirname));
app.use(express.urlencoded({extended:false}))
app.use(express.static(path.join("public")));
app.use(express.static(path.join("src")));
app.use(cookieParser());


const myusername = 'admin'
const mypassword = '12345'
var session;

app.get("/",(req,res) =>{
    // res.send("Hello")
    session = req.session;
    if(session.userid){
        res.send("error");
    }else
    res.render("login")   
})


app.get("/signup",(req,res) =>{
    res.render("signup")
})

app.get("/profile",(req,res) =>{
    res.render("profile")
})

app.get("/grade",(req,res) =>{
    res.render("grade")
})

app.get("/simulation",(req,res) =>{
    res.render("simulation")
})


app.post("/signup", async (req,res)=>{

const data ={
    email:req.body.email,
    password:req.body.password,
    studentId:req.body.studentId,
    name:req.body.name,
    deptment:req.body.deptment
}

await collection.insertMany([data])

res.render("login")

})

app.post("/login", async (req,res)=>{

    try{
        const check = await collection.findOne({email:req.body.email})
        if(check.password === req.body.password){
            res.render("home", {user: check})
  
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
