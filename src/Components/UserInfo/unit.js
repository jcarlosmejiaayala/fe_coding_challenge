import React from 'react'
import { shallow, mount } from 'enzyme'

import UserInfo from 'Components/UserInfo'

const props = {
  user: { avatarUrl: '', login: '', followers: 0 },
  classes: {}
}

describe('<UserInfo />', () => {
  it('Should be rendered succesfully', () => {
    const wrapper = shallow(<UserInfo />)

    expect(wrapper).toHaveLength(1)
  })

  it('Should all props be passed through it', () => {
    const wrapper = mount(<UserInfo {...props} />)

    expect(wrapper.props()).toEqual(props)
  })
})
