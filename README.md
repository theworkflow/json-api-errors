# JSON API Errors

Create errors using [JSON API errors format](http://jsonapi.org/format/#errors)

[![npm package](https://nodei.co/npm/json-api-errors.png?downloads=true&downloadRank=true&stars=true)][package]


[![version](https://img.shields.io/npm/v/json-api-errors.svg?style=flat-square)][version]
[![build](https://img.shields.io/travis/theworkflow/json-api-errors/master.svg?style=flat-square)][build]
[![license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)][license]
[![climate](https://img.shields.io/codeclimate/github/theworkflow/json-api-errors.svg?style=flat-square)][climate]
[![coverage](https://img.shields.io/codeclimate/coverage/github/theworkflow/json-api-errors.svg?style=flat-square)][coverage]

### Installation

`$ npm install json-api-errors`

### Usage

#### `Errors.createSingle(id, message, [meta])`

Create a single errors object.

- `id` (String)
 - required
- `message` (String)
 - required
- `meta` (Object | String)
 - optional

```javascript
const Errors = require('json-api-errors')

var errors = new Errors()
var err = errors.createSingle('CUSTOM_ERROR', 'Custom error message')

console.log(err)
// {
//   errors: [{ id: 'CUSTOM_ERROR', message: 'Custom error message' }]
// }
```

#### `Errors.add(id, message, [meta])`

Add an error to the errors array

- `id` (String)
 - required
- `message` (String)
 - required
- `meta` (Object | String)
 - optional

```javascript
const Errors = require('json-api-errors')

var errors = new Errors()
errors.add('CUSTOM_ERROR', 'Custom error message')
```

#### `Errors.get()`

Retreive all errors. Errors are returned in a JSON format

```javascript
const Errors = require('json-api-errors')

var errors = new Errors()
errors.add('CUSTOM_ERROR', 'Custom error message')

var errs = errors.get()
// {
//   errors: [{ id: 'CUSTOM_ERROR', message: 'Custom error message' }]
// }
```

#### `Errors.clear()`

Remove all errors

```javascript
const Errors = require('json-api-errors')

var errList, errors = new Errors()

errors.add('CUSTOM_ERROR', 'Custom error message')

errList = errors.get()
console.log(errList.errors) // Length is 1

errors.clear()
errList = errors.get()

console.log(errList.errors) // Length is 0
```

### Tests

`$ npm test`

[package]: https://nodei.co/npm/json-api-errors
[version]: https://www.npmjs.com/package/json-api-errors
[build]: https://travis-ci.org/theworkflow/api-util
[license]: https://raw.githubusercontent.com/theworkflow/json-api-errors/master/LICENSE
[climate]: https://codeclimate.com/github/theworkflow/json-api-errors
[coverage]: https://codeclimate.com/github/theworkflow/json-api-errors/coverage