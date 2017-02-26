/**
 *  Copyright (c) 2015, Facebook, Inc.
 *  All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE-examples file in the root directory of this source tree.
 */

import express from 'express';
import graphqlHTTP from 'express-graphql';
import swapiSchema from '../schema';

const app = express();

const setCorsHeaders = (res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Accept, Content-Type, Authorization, Content-Length, X-Requested-With');
};

// Handle OPTION requests to enable CORS
app.options('/*', (req, res, next) => {
  setCorsHeaders(res);
  res.sendStatus(200);
});

// GET requests to /graphql should be redirected to graphiql interface
app.get('/graphql', (req, res) => res.redirect('/'));

// POST requests to /graphql should be handled by middleware
app.post('/graphql', (req, res) => {
  setCorsHeaders(res);
  setTimeout(() => graphqlHTTP({
    schema    : swapiSchema,
    graphiql  : false,
  })(req, res), 500);
});

// Requests to / shoud show graphiql interface
app.use('/', graphqlHTTP({
  schema    : swapiSchema,
  graphiql  : true,
}));

// Listen for incoming HTTP requests
const listener = app.listen(4000, () => {
  let host = listener.address().address;
  if (host === '::') {
    host = 'localhost';
  }
  const port = listener.address().port;
  console.log('Listening at http://%s%s', host, port === 80 ? '' : ':' + port);
});
