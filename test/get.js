const Code = require('code')
const Lab = require('lab')

const JSONErrors = require('..')

const lab = exports.lab = Lab.script()

const describe = lab.describe
const it = lab.it
const expect = Code.expect
const beforeEach = lab.beforeEach
const afterEach = lab.afterEach

var Client, err, errObject

describe('JSONErrors.get', () => {
  err = { id: 'CUSTOM_ERROR', message: 'This is a custom error message' }
  errObject = { errors: [{ id: err.id, message: err.message }] }

  beforeEach((done) => {
    Client = new JSONErrors()
    Client.add(err.id, err.message)
    done()
  })

  afterEach((done) => {
    Client.clear()
    done()
  })

  it('returns errors as object', (done) => {
    var errors = Client.get()

    expect(errors).to.be.an.object()
    expect(errors).to.equal(errObject)
    done()
  })
})
