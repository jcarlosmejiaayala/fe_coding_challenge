import React from 'react'
import { shallow, mount } from 'enzyme'

import UserContent from 'Components/UserContent'

const props = {
  user: {},
  classes: {}
}

describe('<UserContent />', () => {
  it('Should be rendered succesfully', () => {
    const wrapper = shallow(<UserContent />)

    expect(wrapper).toHaveLength(1)
  })

  it('Should all props be passed through it', () => {
    const wrapper = mount(<UserContent {...props} />)

    expect(wrapper.props()).toEqual(props)
  })
})
