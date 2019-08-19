// const controller = require('./controllers/controller');
const { healthCheck } = require('./controllers/healthCheck');
const { createPost, getPosts } = require('./controllers/post');

exports.init = app => {
  app.get('/health', healthCheck);
  app.post('/post', createPost);
  app.get('/post', getPosts);
};
