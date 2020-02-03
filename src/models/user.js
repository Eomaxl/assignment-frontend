const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    customerID:
    {
        type:Number
    },
    name:
    {
        firstName:{type:String,required:true},
        lastName :{type:String,required:true}
    },
    birthday:
    {
        type:String
    },
    gender:
    {
        type:String
    },
    lastContact:
    {
        type:Date
    },
    customerLifetimeValue:
    {
        type:Number
    }
},{
    timestamp: true
})

const User = mongoose.model('CustomerDetailsCollection',UserSchema)

module.exports = User;