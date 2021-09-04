

const mongoose = require('mongoose')

const {Schema} = mongoose;

const PersonSchema = new mongoose.Schema({
    name: {type:String,required:true},

    age: {type:Number},

    favoriteFoods: [String]
})

const PersonDB = mongoose.model("Person",PersonSchema)


module.exports = PersonDB