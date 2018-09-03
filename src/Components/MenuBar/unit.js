import React from 'react'
import { shallow } from 'enzyme'

import MenuBar from 'Components/MenuBar'

describe('<MenuBar />', () => {
  it('Should be rendered succesfully', () => {
    const wrapper = shallow(<MenuBar />)

    expect(wrapper).toHaveLength(1)
  })
})
