import Nano, { Component } from '../lib/cjs/index.js'
import { wait } from './helpers.js'

const spy = jest.spyOn(global.console, 'error')

test('should render without errors', async (done) => {
  class Test extends Component {
    render() {
      return <p style={{ color: 'red', fontSize: 22 }}>hello world</p>
    }
  }
  const res = Nano.render(<Test />)

  await wait()
  expect(res.outerHTML).toBe('<p style="color:red;font-size:22;">hello world</p>')
  expect(spy).not.toHaveBeenCalled()
  done()
})
