import React from 'react'
import { shallow, mount } from 'enzyme'

import Followers from 'Components/Followers'
import FollowersList from 'Components/FollowersList'

const props = {
  user: {},
  followers: [],
  handleOnClickUpdateFollowers: jest.fn(),
  classes: {}
}

describe('<Followers />', () => {
  it('Should be rendered succesfully', () => {
    const wrapper = shallow(<Followers />)

    expect(wrapper).toHaveLength(1)
  })

  it('Should all props be passed through it', () => {
    const wrapper = mount(<Followers {...props} />)

    expect(wrapper.props()).toEqual(props)
  })

  it('Should <FollowersList /> be present', () => {
    const wrapper = mount(<Followers {...props} />)

    expect(wrapper.find(FollowersList)).toHaveLength(1)
  })
})
