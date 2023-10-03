const express = require('express')

const app = express()

require('dotenv').config()

app.use(express.json())

const connectDB = require('./connectMongo')

connectDB()

const BlogApi = require('./models/blog.model')

app.get('/api/posts/', async(req, res) => {
    try{
        const genMens = await BlogApi.find({})
        res.send(genMens)
    }catch(e){
        res.status(400).send(e)
    }
})

app.get('/api/posts/:id', async(req, res) => {
    try{
        const _id = req.params.id;
        const getMen  = await  BlogApi.findById(_id);
        res.send(getMen)
    }catch(e){
        res.status(400).send(e)
    }
})

app.post('/api/posts/', async(req, res) => {
    try{

        const addingRecord = new BlogApi(req.body)
        console.log(req.body)
        const addingRes = addingRecord.save();
        res.status(201).send(addingRes)
    }catch(e){
        console.log(e)
        res.status(400).send(e)
    }
})

app.patch('/api/posts/:id', async(req, res) => {
    try{
        const _id = req.params.id;
        const getMen  = await  BlogApi.findByIdAndUpdate(_id,req.body,{new:true});
        res.send(getMen)
    }catch(e){
        res.status(500).send(e)
    }
})

app.delete('/api/posts/:id', async(req, res) => {
    try{
        const _id = req.params.id;
        const getMen  = await  BlogApi.findByIdAndDelete(_id);
        res.send(getMen)
    }catch(e){
        res.status(400).send(e)
    }
})


app.get('/api/posts/latest/', async(req, res) => {
    try{
        const genMens = await BlogApi.find()
        res.send(genMens)
    }catch(e){
        res.status(400).send(e)
    }
})

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log("Server is running on port " + PORT)
})