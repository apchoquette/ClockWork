const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema ({
    googleID: String,
    department: String

})

mongoose.model('users', userSchema);
console.log('Mongo Schema created/validated');