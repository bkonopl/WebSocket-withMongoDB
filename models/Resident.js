const {Schema, model} = require('mongoose')

const ReseidentScheme = new Schema({
    name: String,
    msg: String,
})

const Resident = model('Resident', ReseidentScheme)
