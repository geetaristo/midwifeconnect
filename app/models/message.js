// app/models/post.js
var mongoose = require('mongoose');


// define the schema for our user model
var postSchema = mongoose.Schema({
    subject:String,
    message:String,
    dateandtime: Date,
    sender:String,
    receiver:String,
    reply:Number,
    attachments: []

});

userSchema.methods.isReply(){
    var reply = true;

    if (this.local.reply === undefined){
        reply = false;
    } else if(this.local.reply === null){
        reply = false;
    } else if(this.local.reply === 0) {
        reply = false;
    }

    return reply;
}

// create the model for posts and expose it to our app
module.exports = mongoose.model('Post', postSchema);