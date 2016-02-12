import Promise from 'bluebird'
import ld from 'lodash'
import {assert} from 'chai'
import {unify, _, variable as $} from 'junify'
import {expelElixir} from '../../src/expel/encoder'

function assertUnify(value, expected) {
  const match = unify(value, expected)
  if (match === false) {
    assert.fail(value, expected, `
    Expected

    ${JSON.stringify(value)}

    to match pattern

    ${JSON.stringify(expected)}`)
  }
  return match
}

function assertElixir(code, pattern) {
  return expelElixir(code).then((encoded) => {
    const json = encoded[0]
    return assertUnify(json, {file: "stdio", code: pattern})
  }, assert.fail)
}

assert.unify = assertUnify
assert.elixir = assertElixir

export {
  Promise,
  ld,
  unify, _, $,
  assert,
  expelElixir
}
