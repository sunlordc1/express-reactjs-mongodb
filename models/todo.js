const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const TodoSchema = new Schema({
    title:String,
    completed:{
        type:Boolean,
        enum:[true,false],
        default:false
    },
},{
    collection:'todo'
})

const TodoModel = mongoose.model('todo',TodoSchema)

module.exports = TodoModel