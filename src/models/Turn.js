const { Schema, model } = require('mongoose')

const turnSchema = new Schema({
    schedule: {
        type: String,
        required: true
    },
    rations_available: {
        type: String,
        default: "450"
    },
    entree_rations: {
        type: String,
        default: "450"
    },
    second_rations: {
        type: String,
        default: "450"
    },
    dessert_rations: {
        type: String,
        default: "450"
    },
    drink_rations: {
        type: String,
        default: "450"
    }
})

module.exports = model('Turns', turnSchema);