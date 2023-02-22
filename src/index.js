const express = require("express")
const app = express()
const cookieParser = require("cookie-parser")
const sessions = require('express-session')
const path = require("path")
const hbs = require("hbs")
const multer = require("multer")
const collection = require("./mongodb")
const { default: mongoose } = require("mongoose")

//const user = require("../model/user")

const tempelatePath = path.join(__dirname, '../views')

app.use(express.json())
app.use(express.urlencoded({extended: true}));

app.set('view engine','hbs');
app.set("views", tempelatePath)

app.use(express.static(__dirname));
app.use(express.urlencoded({extended:false}))
app.use(express.static(path.join("public")));
app.use(express.static(path.join("src")));
app.use(cookieParser());

app.use(express.static('public'))


const myusername = 'admin'
const mypassword = '12345'
var session;

let storage = multer.diskStorage({
    destination:'public/image',
    filename: (req, file, cb) =>{
        cb(null, Date.now() + file.originalname)
    
    }
})

let upload = multer({
    storage: storage,
    fileFilter:(req, file, cb) =>{
        if(
            file.mimetype == 'image/jpeg'||
            file.mimetype == 'image/jpg' ||
            file.mimetype == 'image/png' ||
            file.mimetype == 'image/gif' 
        ){
            cb(null, true)     
        }
        else{
            cb(null, false)
            cb(new Error('Only jpeg, jpg, png, gif image allow!!'))
        }       
    }
})

let myschema = mongoose.Schema({
    Picture : String
})

let mymodel = mongoose.model('table', myschema)


app.post("/singlepost/", upload.single('profile_pic'), (req, res) =>{
 
    req.file
    mymodel.create({Picture: req.file.filename})
    res.send(req.file.filename)
    .then((x) =>{
        res.redirect('/view')
        
    })
    .catch((y) =>{
        console.log(y)
    })
    
})

const oneDay = 1000 * 60 * 60 * 24;
app.use(sessions({
    secret: "Thisismysecretekey",
    saveUninitialized: true,
    cookie: {maxAge: oneDay},
    resave: false
}));


app.get("/",(req,res) =>{
    // res.send("Hello")
    session = req.session;
    if(session.userid){
        res.send("error");
    }else
    res.render("login")   
})

app.get("/view",(req,res) =>{
    mymodel.find({},function(err, store){
        res.render("home", {x:store})
        console.log(store)
    })
})

app.get("/signup",(req,res) =>{
    res.render("signup")
})

app.get("/profile", async(req,res) =>{
    session = req.session
    if(session.name){
        const check = await collection.findOne({name:session.name})
        res.render("profile",{user: check});
    }
    else{
        console.log("fail")
    }
})

app.get("/grade", async (req,res) =>{
    session = req.session
    if(session.name){
        const check = await collection.findOne({name:session.name})
        res.render("grade",{user: check});
    }
    else{
        console.log("fail")
    }
    
})

app.get("/simulation",(req,res) =>{
    res.render("simulation")
})

app.get("/login", (req,res) =>{
    res.render("login")
})

app.get("/home", async(req,res) =>{
    session = req.session
    if(session.name){
        const check = await collection.findOne({name:session.name})
        res.render("home",{user: check});
    }
    else{
        console.log("fail")
    }
    
    
})

app.post("/home", async(req,res) =>{
    
    session = req.session
    if(session.name){
        const check = await collection.findOne({name:session.name})
        // res.render("home",{user: check});
        mymodel.find({}, function(err, store){
            res.render("home", {x:store, user: check})
            console.log(store)
        })
    }
    else{
        console.log("fail")
    }
    
    
})

app.post("/signup", async (req,res)=>{

const data ={
    email:req.body.email,
    password:req.body.password,
    studentId:req.body.studentId,
    name:req.body.name,
    // deptment:req.body.deptment
}

await collection.insertMany([data])

res.render("login")

})

app.post("/login", async (req,res)=>{

    try{
        const check = await collection.findOne({email:req.body.email})
        if(check.password === req.body.password){
            session= req.session
            session.name = check.name
            res.render("home", {user: check})
  
        }
        else{
            res.render("login", {error: "password is wrong"}) 
        }

    }
    catch{
        res.render("login", {error: "Invalid username/password combination"})
        //res.send("wrong detail")
    }

    })

app.post("/profile/:UserId", async (req,res) =>{
    collection.findByIdAndUpdate(req.params.UserId, {$set:{       
        email:req.body.email,
        name:req.body.name,
        thainame:req.body.thainame,
        studentId:req.body.studentId,
        mentor:req.body.mentor,
        nickname:req.body.nickname,
        deptment:req.body.deptment,
        university:req.body.university,
        
    
        phone:req.body.phone,
        line:req.body.line,
        fb:req.body.fb,
        ig:req.body.ig,
    
        hbd:req.body.hbd,
        blood:req.body.blood,
        address:req.body.address,
        allergies:req.body.allergies,

        subject1:req.body.subject1,
        subject2:req.body.subject2,
        subject3:req.body.subject3,
        subject4:req.body.subject4,
        subject5:req.body.subject5,
        subject6:req.body.subject6,
        subject7:req.body.subject7,
        subject8:req.body.subject8,

        unit1:req.body.unit1,
        unit2:req.body.unit2,
        unit3:req.body.unit3,
        unit4:req.body.unit4,
        unit5:req.body.unit5,
        unit6:req.body.unit6,
        unit7:req.body.unit7,
        unit8:req.body.unit8,

        grade1:req.body.grade1,
        grade2:req.body.grade2,
        grade3:req.body.grade3,
        grade4:req.body.grade4,
        grade5:req.body.grade5,
        grade6:req.body.grade6,
        grade7:req.body.grade7,
        grade8:req.body.grade8,

        gpa:req.body.gpa,
        gpax:req.body.gpax
        
    }},{new: true})
    .then(data =>{
        if(!data){
            return res.status(404).json({
                msg: "ไม่พบ :" + req.params.UserId
            })
        }
        else{
            console.log("update finish")
            res.redirect("/home")
        }
    }).catch(err =>{
        return res.status(500).json({
            msg: "ไม่สามารถอัปเดตได้ :" +err.message
        })
    })   
})






app.listen(3000, ()=>{
    console.log("port connect");
})
