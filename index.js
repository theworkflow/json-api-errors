'use strict'

const Hoek = require('hoek');

class JSONErrors {
  constructor() {
    this.errors = new Array();
  }

  get() {
    return { errors: this.errors };
  }

  create(id, message, meta) {
    var error = {};

    Hoek.assert(id !== undefined, 'id required');
    Hoek.assert(message !== undefined, 'message required');

    error.id = id;
    error.message = message;

    if (meta) error.meta = meta;

    return error;
  }

  createSingle(id, message, meta) {
    var errors = new JSONErrors();

    errors.add(id, message, meta);
    return errors.get();
  }

  add(id, message, meta) {
    var error = this.create(id, message, meta);
    this.errors.push(error);
  }

  clear() {
    this.errors = new Array();
  }
};

module.exports = JSONErrors;
