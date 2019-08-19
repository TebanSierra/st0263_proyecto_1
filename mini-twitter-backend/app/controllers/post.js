const { savePost, listPosts } = require('../services/post');
const errors = require('../errors');

exports.createPost = (req, res, next) => {
  const post = req.body;
  return savePost(post)
    .then(() => res.send({ msg: 'Post creado' }))
    .catch(err => next(errors.badRequestError(err.message)));
};

exports.getPosts = (req, res, next) => {
  console.log('Ya estoy aqui en el controlador');
  listPosts()
    .then(posts => res.send({ posts }))
    .catch(err => next(errors.badRequestError(err.message)));
};
