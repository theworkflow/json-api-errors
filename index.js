'use strict'

const Assert = require('assert')

class JSONErrors {
  constructor () {
    this.errors = []
  }

  get () {
    return { errors: this.errors }
  }

  create (id, message, meta) {
    var error = {}

    Assert(id, 'id required')
    Assert(message, 'message required')

    error.id = id
    error.message = message

    if (meta) error.meta = meta

    return error
  }

  createSingle (id, message, meta) {
    var errors = new JSONErrors()

    errors.add(id, message, meta)
    return errors.get()
  }

  add (id, message, meta) {
    var error = this.create(id, message, meta)
    this.errors.push(error)
  }

  clear () {
    this.errors = []
  }
}

module.exports = JSONErrors
