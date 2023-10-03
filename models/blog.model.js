const mongoose = require('mongoose')
const { Schema } = mongoose

const bookSchema = new Schema({
  title: {
        type: String,
        required:true,
        unique :true
    },
    Context: {
        type: String,
        required:true 
    },
    Created_at: {
        type: String,
        
    },
    Updated_at: {
        type: String,
        
        
    },
    Catgory_id: {
        type: String,
        required:true,
        unique:true
        
    }
})

module.exports = mongoose.model('BlogApi', bookSchema)


