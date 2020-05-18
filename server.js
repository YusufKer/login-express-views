const express = require('express')
const app = express()
const bcrypt = require('bcrypt')

const users = []

app.set('view-engine','ejs')
app.use(express.urlencoded({extended:false}))

//Home Route
app.get('/',(req,res)=>{
    res.render('index.ejs',{name:"Yusuf"})
})

//Login Route
app.get('/login',(req,res)=>{
    res.render('login.ejs')
    console.log("Request made to login page")
})
app.post('/login',(req,res)=>{
    res.render('login.ejs')
})

//Register Route
app.get('/register',(req,res)=>{
    res.render('register.ejs')
    console.log("Request made to Register page")
})
app.post('/register', async (req,res)=>{
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        users.push({
            id:Date.now().toString(),
            name:req.body.name,
            email:req.body.email,
            password: hashedPassword
        })
    } catch{
        res.redirect('register')
    }
    console.log(users)
})

app.listen(3000)