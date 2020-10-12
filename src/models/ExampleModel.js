const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const PostsSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    author: String,
    autoIndex: true,
    timestamps: true
});

module.exports = Posts = mongoose.model('Post', PostsSchema);