const Code = require('code');
const Lab = require('lab');

const JSONErrors = require('..');

const lab = exports.lab = Lab.script();

const describe = lab.describe;
const it = lab.it;
const expect = Code.expect;

var Client, err, errObject;

describe('JSONErrors.createSingle', () => {
  err = { id: 'CUSTOM_ERROR', message: 'This is a custom error'};
  errObject = { errors: [{ id: err.id, message: err.message }] };
  Client = new JSONErrors();

  it('creates a single errors object', (done) => {
    var errors = Client.createSingle(err.id, err.message);

    expect(errors).to.equal(errObject);
    done();
  });
});
