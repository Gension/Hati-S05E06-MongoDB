const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    first_name: {
        type:String, require: true
    },
    last_name: { 
        type: String, require: true
    },
    email: {
        type: String, require: true
    },
    hospital: {
        type: Schema.ObjectId, ref: 'Hospital'
    }
});

module.exports = mongoose.model('User', userSchema);


// D'après la doc :

// const blogSchema = new Schema({
//   title: String, // String is shorthand for {type: String}
//   author: String,
//   body: String,
//   comments: [{ body: String, date: Date }],
//   date: { type: Date, default: Date.now },
//   hidden: Boolean,
//   meta: {
//     votes: Number,
//     favs: Number
//   }
// });