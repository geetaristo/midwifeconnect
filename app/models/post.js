// app/models/post.js
var mongoose = require('mongoose');


// define the schema for our user model
var postSchema = mongoose.Schema({

    subject:String,
    message:String,
    dateandtime: Date,
    poster:String,
    reply:Number,
    attachments: []

});


// create the model for posts and expose it to our app
module.exports = mongoose.model('Post', postSchema);