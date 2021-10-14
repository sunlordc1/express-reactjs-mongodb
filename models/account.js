const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const AccountSchema = new Schema({
    username:String,
    password:String,
    refreshToken:{
        type:String,
        default:null
    },
    
},{
    collection:'account'
})

const AccountModel = mongoose.model('account',AccountSchema)

module.exports = AccountModel