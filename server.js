const express = require('express');
const next = require('next');
const routes = require('./routes');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const handler = routes.getRequestHandler(app);


app
  .prepare()
  .then(() => {
    const server = express();
    server.use(handler);

    // server.get('/tag/:slug', (req, res) => {
    //   const actualPage = '/tag'
    //   const queryParams = { tag: req.params.slug }
    //   app.render(req, res, actualPage, queryParams)
    // })

    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(3000, (err) => {
      if (err) throw err;
      console.log('> ready on http://localhost:3000');
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });