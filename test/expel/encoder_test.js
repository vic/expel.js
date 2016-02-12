import {assert} from './test_helper'

describe('expel/encoder', () => {

  it('encodes atom', (done) => {
    assert.elixir(`:hello`, {atom: "hello"})
    .then(() => done())
  })

  it('encodes tuple', (done) => {
    assert.elixir(`{"hello", :world}`,
                 {tuple: [{binary: 'hello'}, {atom: 'world'}]})
    .then(() => done())
  })

})

