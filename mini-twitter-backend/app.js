const mongoose = require('mongoose');

const { expressMiddleware, expressRequestIdMiddleware } = require('express-wolox-logger'),
  express = require('express'),
  bodyParser = require('body-parser'),
  path = require('path'),
  config = require('./config'),
  routes = require('./app/routes'),
  errors = require('./app/middlewares/errors'),
  DEFAULT_BODY_SIZE_LIMIT = 1024 * 1024 * 10,
  DEFAULT_PARAMETER_LIMIT = 10000;

const bodyParserJsonConfig = () => ({
  parameterLimit: config.common.api.parameterLimit || DEFAULT_PARAMETER_LIMIT,
  limit: config.common.api.bodySizeLimit || DEFAULT_BODY_SIZE_LIMIT
});

const bodyParserUrlencodedConfig = () => ({
  extended: true,
  parameterLimit: config.common.api.parameterLimit || DEFAULT_PARAMETER_LIMIT,
  limit: config.common.api.bodySizeLimit || DEFAULT_BODY_SIZE_LIMIT
});

const app = express();

app.use('/docs', express.static(path.join(__dirname, 'docs')));

// Client must send "Content-Type: application/json" header
app.use(bodyParser.json(bodyParserJsonConfig()));
app.use(bodyParser.urlencoded(bodyParserUrlencodedConfig()));
app.use(expressRequestIdMiddleware);

if (!config.isTesting) {
  app.use(expressMiddleware);
}

routes.init(app);

app.use(errors.handle);

mongoose
  .connect(process.env.DATABASE_URL, { useNewUrlParser: true })
  .then(database => console.log(`db conected ${database}`));

module.exports = app;
