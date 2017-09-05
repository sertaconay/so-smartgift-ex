const express = require('express');
const next = require('next');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const tagController = require('./controllers/tagController');
const { catchErrors } = require('./helpers/errorHandler');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

// cannot run in every node version
const [major, minor] = process.versions.node.split('.').map(parseFloat);
if (major < 7 || (major === 7 && minor <= 5)) {
  console.log('cannot run this app');
  process.exit();
}

require('dotenv').config({ path: 'variables.env' });

async function mongoConnect() {
  await mongoose.connect(process.env.DATABASE, { useMongoClient: true });
}
mongoose.Promise = global.Promise; // mongoose needs to use ES6 promises
mongoConnect().catch(error => console.error(error.stack, 'error'));

// import model
require('./models/Tag');

app
  .prepare()
  .then(() => {
    const server = express();

    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({ extended: true }));

    server.post('/tag', catchErrors(tagController.addTag));
    server.get('/api/v1/search/tag', catchErrors(tagController.getTag));
    server.get('/api/v1/search/tags', catchErrors(tagController.getTags));

    server.get('/tag/:slug', (req, res) => {
      const actualPage = '/tag';
      const queryParams = { tag: req.params.slug };
      app.render(req, res, actualPage, queryParams);
    });

    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.listen('7698', (err) => {
      if (err) throw err;
      console.log('express running on http://localhost:7698');
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
