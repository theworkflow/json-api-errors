const Code = require('code')
const Lab = require('lab')

const JSONErrors = require('..')

const lab = exports.lab = Lab.script()

const describe = lab.describe
const it = lab.it
const expect = Code.expect

var Client = new JSONErrors()

describe('JSONErrors', () => {
  it('exports functions', (done) => {
    expect(Client.get).to.be.a.function()
    expect(Client.create).to.be.a.function()
    expect(Client.createSingle).to.be.a.function()
    expect(Client.add).to.be.a.function()
    expect(Client.clear).to.be.a.function()
    done()
  })
})
