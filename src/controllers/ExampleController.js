const express = require('express');
const router = express.Router();

// post Model
const Post = require('../models/ExampleModel');

// route: /api/posts

// List 
router.get('/', (req, res) => {
    Post.find(function (err, posts) {
        if (err) {
            return res.status(500).json({
                message: 'Error getting objects.'
            });
        }
        return res.json(posts);
    });
});

// Show 
router.get('/:id', (req, res) => {
    var id = req.params.id;
    Post.findOne({
        _id: id
    }, function (err, post) {
        if (err) {
            return res.status(500).json({
                message: 'Error getting object.'
            });
        }
        if (!post) {
            return res.status(404).json({
                message: 'Post not found'
            });
        }
        return res.json(post);
    });
});

// Create
router.post('/', (req, res) => {

    Post.create(req.body, function (err, post) {
        if (err) {
            return res.status(500).json({
                message: 'Error creating Post',
                error: err
            });
        }
        return res.status(200).json({
            message: "Post created",
            post
        });

    });
});


module.exports = router;