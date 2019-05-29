import {sleep} from '../../index'

// ReferenceError: regeneratorRuntime is not defined
// solution: 
// yarn add --dev @babel/plugin-transform-runtime @babel/runtime
// babel.config.js add:
// plugins: ["@babel/plugin-transform-runtime"]
test('test sleep', async () => {
  const start: number = new Date().getTime()
  await sleep(3)
  const end: number = new Date().getTime()
  expect(end - start).toBeGreaterThanOrEqual(3000)
})
