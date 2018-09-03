import React from 'react'
import { shallow, mount } from 'enzyme'

import SearchForm from 'Components/SearchForm'

const props = {
  handleOnSubmit: jest.fn(),
  classes: {}
}

describe('<SearchForm />', () => {
  it('Should be rendered succesfully', () => {
    const wrapper = shallow(<SearchForm />)

    expect(wrapper).toHaveLength(1)
  })

  it('Should all props be passed through it', () => {
    const wrapper = mount(<SearchForm {...props} />)

    expect(wrapper.props()).toEqual(props)
  })

  it('Should Submit form be called', () => {
    const wrapper = mount(<SearchForm {...props} />)

    wrapper.find('form').simulate('submit')

    expect(props.handleOnSubmit).toHaveBeenCalled()
  })
})
