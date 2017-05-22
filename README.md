# verbose-api
API GraphQL API for verbose cms [express](https://github.com/verbosejs/verbose-express) for [node](http://nodejs.org).

  [![NPM Version][npm-image]][npm-url]
  [![NPM Downloads][downloads-image]][downloads-url]
  [![Linux Build][travis-image]][travis-url]
  [![Test Coverage][coveralls-image]][coveralls-url]
  [![Known Vulnerabilities](https://snyk.io/test/github/verbosejs/verbose-api/badge.svg)](https://snyk.io/test/github/verbosejs/verbose-api)

```js
const express = require('express');
const verboseApi = require('verbose-api');
const app = express();

app.use(verboseApi());

app.get('/', function (req, res) {
  res.send('Hello World');
})

app.listen(3000);
```

## Installation

```bash
$ yarn add verbose-api
# or
$ npm install verbose-api
```

## Features

  * Graph QL
  
## API

### verboseApi(options)

Boots up the API, routes and connects to database.

- `options` an object that is passed to `verbose-api` on setup 

### verboseApi.version

Returns the current version of the verbose api you are using

## Options

```js
var express = require('express')
var verboseApi = require('verbose-api')

var app = express()
app.use(verboseApi({options}))
```

#### options.something
Type: `Boolean`
Default value: true

A boolean value to turn off something special off


## Docs & Community

  * [Verbose CMS for Express](https://github.com/verbosejs/verbose-express)
  * [Verbose CMS Admin Dashboard](https://github.com/verbosejs/verbose-dashboard)

## Development Guide

Below it a quick start guide to development on `verbose-api`.  The following will spawn a demo express app with the app
intergrated using [nodemon](https://github.com/remy/nodemon).  Any changes to the app code will restart the app.

You can use either a local build or a docker-compose build.  The docker-compose build is useful if you want to target different node versions

  Clone the Repo

```bash
$ git clone git@github.com:verbosejs/verbose-api.git
```

  Install dependecies 

```bash
$ yarn install
# or
$ npm install
```

Run the development express app

```bash
$ npm run dev
# or
$ docker-compose up
```
You should now be able to see the app on http://locahost:3000

## Tests

  To run the test suite, first install the dependencies, then run `npm test`:

```bash
$ yarn install
$ npm test
```

## License

  [MIT](LICENSE)

[npm-image]: https://img.shields.io/npm/v/verbose-api.svg
[npm-url]: https://npmjs.org/package/verbose-api
[downloads-image]: https://img.shields.io/npm/dm/verbose-api.svg
[downloads-url]: https://npmjs.org/package/verbose-api
[travis-image]: https://img.shields.io/travis/verbosejs/verbose-api/master.svg
[travis-url]: https://travis-ci.org/verbosejs/verbose-api
[coveralls-image]: https://img.shields.io/coveralls/verbosejs/verbose-api/master.svg
[coveralls-url]: https://coveralls.io/r/verbosejs/verbose-api?branch=master
