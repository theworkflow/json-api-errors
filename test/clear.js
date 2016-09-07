const Code = require('code')
const Lab = require('lab')

const JSONErrors = require('..')

const lab = exports.lab = Lab.script()

const describe = lab.describe
const it = lab.it
const expect = Code.expect
const beforeEach = lab.beforeEach

var Client, err

describe('JSONErrors.clear', () => {
  err = { id: 'CUSTOM_ERROR', message: 'This is a custom error message' }

  beforeEach((done) => {
    Client = new JSONErrors()
    Client.add(err.id, err.message)
    done()
  })

  it('clears out errors', (done) => {
    var errors

    Client.clear()
    errors = Client.get()
    expect(errors.errors).to.have.length(0)
    done()
  })
})
