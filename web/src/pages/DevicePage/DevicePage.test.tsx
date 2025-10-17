import { render } from '@redwoodjs/testing/web'

import DevicePage from './DevicePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('DevicePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DevicePage roomId={'42'} />)
    }).not.toThrow()
  })
})
