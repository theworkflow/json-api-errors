const Code = require('code')
const Lab = require('lab')

const JSONErrors = require('..')

const lab = exports.lab = Lab.script()

const describe = lab.describe
const it = lab.it
const expect = Code.expect
const beforeEach = lab.beforeEach

var Client, err

describe('JSONErrors.create', () => {
  err = { id: 'CUSTOM_ERROR', message: 'This is a custom error' }

  beforeEach((done) => {
    Client = new JSONErrors()
    done()
  })

  describe('validation', () => {
    it('fails if no id is provided', (done) => {
      expect(() => {
        Client.create(null, err.message)
      }).to.throw()

      done()
    })

    it('fails if no message is provided', (done) => {
      expect(() => {
        Client.create(err.id, null)
      }).to.throw()

      done()
    })
  })

  it('creates an error object', (done) => {
    var error = Client.create(err.id, err.message)

    expect(error).to.equal(err)
    done()
  })

  it('adds meta to the error when specified', (done) => {
    var error = Client.create(err.id, err.message, 'meta')

    expect(error.meta).to.equal('meta')
    done()
  })
})
