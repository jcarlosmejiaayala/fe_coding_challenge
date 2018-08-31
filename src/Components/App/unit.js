import React from 'react'
import { shallow } from 'enzyme'
import { MuiThemeProvider } from '@material-ui/core/styles'

import App from 'Components/App'
import { Provider } from 'Store'

describe('<App />', () => {
  it('Should be rendered succesfully', () => {
    const wrapper = shallow(<App />)

    expect(wrapper).toHaveLength(1)
  })

  it('Should children be passed as prop', () => {
    const wrapper = shallow(<App />)

    expect(wrapper.props()).toHaveProperty('children')
  })

  it('Should <Provider/> be preset', () => {
    const wrapper = shallow(<App />)

    expect(wrapper.find(Provider)).toHaveLength(1)
  })

  it('Should <MuiThemeProvider /> be present', () => {
    const wrapper = shallow(<App />)

    expect(wrapper.find(MuiThemeProvider)).toHaveLength(1)
  })
})
