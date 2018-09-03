import React from 'react'
import { shallow, mount } from 'enzyme'

import FollowersList from 'Components/FollowersList'

const props = {
  followers: [],
  classes: {}
}

describe('<FollowersList />', () => {
  it('Should be rendered succesfully', () => {
    const wrapper = shallow(<FollowersList />)

    expect(wrapper).toHaveLength(1)
  })

  it('Should all props be passed through it', () => {
    const wrapper = mount(<FollowersList {...props} />)

    expect(wrapper.props()).toEqual(props)
  })
})
