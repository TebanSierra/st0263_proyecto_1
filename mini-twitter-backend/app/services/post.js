const Post = require('../models/post');

exports.savePost = post => {
  const newPost = new Post({
    author: post.author,
    comment: post.comment,
    topics: post.topics,
    createdAt: new Date()
  });
  return newPost.save().then(res => Promise.resolve(res));
};

exports.listPosts = () =>
  Post.find()
    .then(posts => Promise.resolve(posts))
    .catch(err => Promise.reject(err));
