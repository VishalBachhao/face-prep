const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())
const mongooseUrl = "mongodb+srv://vishalwildrider:6yZfkOyIdxIrmxAJ@cluster0.visax7o.mongodb.net/vishal101194?retryWrites=true&w=majority"

mongoose.set('strictQuery', true)
mongoose.connect(mongooseUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("DB connected")
})

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const User = new mongoose.model("User", userSchema)

//Routes
app.post("/login", async function login (req, res) {

        const { email, password} = req.body
    if(!email || !password){
     return   res.status(400).send({status:false, message:'email and password is required'})
    }
  const usr =  await User.findOne({ email: email})
        if(!usr){ return res.status(404).send({status:false, message: "User not registered"})}
        if(password != usr.password ) {
        return  res.status(400).send({status:false, message: "Password didn't match"})}
        return  res.status(200).send({status:true, message: "login successful"})}    

    )


    app.post("/register", (req, res)=> {
        const { name, email, password} = req.body
       
        User.findOne({email: email}, (err, user) => {
            if(user){
                res.send({message: "User already registerd"})
            } else {
                const user = new User({
                    name,
                    email,
                    password
                })
                user.save(err => {
                    if(err) {
                        res.send(err.message)
                    } else {
                        res.send( { message: "Successfully Registered, Please login now." })
                    }
                })
            }
        })
        
    })

app.listen(5000,() => {
    console.log("BE started at port 5000")
})