import htm from 'htm'
import Nano, { Component } from '../lib/cjs/index.js'
import { wait, nodeToString } from './helpers.js'

const spy = jest.spyOn(global.console, 'error')

test('should render without errors', async (done) => {
  const html = htm.bind(Nano.h)

  const Root = () => {
    return html`<div id="root"><h1>Hello</h1></div>`
  }

  const res = Nano.render(Root)

  await wait()
  expect(nodeToString(res)).toBe('<div id="root"><h1>Hello</h1></div>')
  expect(spy).not.toHaveBeenCalled()
  done()
})
