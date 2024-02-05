const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require('./models/Users')

const app = express()
app.use(cors())
app.use(express.json())



mongoose.connect("mongodb+srv://princekumarsingh3625:tEyL9zRm3q0SAZqF@cluster0.yns896b.mongodb.net/crud_op-main?retryWrites=true&w=majority").then(()=>{
    console.log("mongodb connected successfully")
}).catch((err)=>{
    console.log(err);
})

app.get('/', (req, res) => {
    UserModel.find({})
        .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.post("/ShowModal", (req, res) => {
    UserModel.create(req.body)
        .then(users => res.json(users))
    .catch(err=> res.json(err))
})

app.get('/getUser/:id', (req, res) => {
    const id = req.params.id;
   // console.log(id)
    UserModel.findById({_id: id })
        .then(users => res.json(users))
    .catch(err =>res.json(err))
})

app.put('/ShowModal2/:id', (req, res) => {
    const id = req.params.id;
    UserModel.findByIdAndUpdate({ _id: id }, {
        Roll: req.body.Roll,
        Name: req.body.Name,
        semester: req.body.semester,
        Branch: req.body.Branch
    })
        .then(users => { res.json(users);})
        .catch(err => { res.json(err);})
})

app.delete('/deleteUser/:id', (req, res) => {
    const id = req.params.id;
    UserModel.findByIdAndDelete({ _id: id })
        .then(res => res.json(res))
    .catch(err=>res.json(err))
})

app.listen(5500, () => {
    console.log("server is running well")
})