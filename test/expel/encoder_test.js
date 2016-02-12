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

  it('encodes call eq', (done) => {
    assert.elixir(`:hello == :world`,
                  {tuple: [{atom: "=="},
                           {list: [{tuple: [{atom: 'line'}, {integer: 1}]}]},
                           {list: [{atom: 'hello'}, {atom: 'world'}]}
                          ]})
      .then(() => done())
  })

})

