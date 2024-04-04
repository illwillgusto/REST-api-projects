// a model for our data
// this will tell MongoDB what our data should look like 'the blueprint'

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    age: { type: Number }
});

const User = mongoose.model('User', userSchema);

module.exports = User;