const { Schema, model } = require('mongoose')

const User = model('User', Schema({
    username: String,
    password: String,
    email: String,
    avatar: String,
    adress: String,
    phone: Number,
    age: Number,
}))

module.exports = User