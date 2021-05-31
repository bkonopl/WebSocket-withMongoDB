const {Schema, model} = require('mongoose')

const ReseidentScheme = new Schema({
    firstName: {
        type: String,
        required: true
    },
    secondName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    room: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    faculty: {
        type: String,
        required: true
    },
    group: {
      type: String,
      required: true
    },
    date: {
        type: String,
        required: true
    }
})

module.exports =  model('Resident', ReseidentScheme)
