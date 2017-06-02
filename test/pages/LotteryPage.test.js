/**
 * Created by mgab on 17/05/2017.
 */
import React from 'react'
import expect from 'expect'
import { shallow , mount } from 'enzyme'
import LotteryPage from '../../src/components/pages/LotteryPage'
import Lotteries from '../../src/components/Lotteries'
import Wrapper from '../../src/components/common/styled-components/Wrapper'
import Button from '../../src/components/common/styled-components/Button'

const setup = () => {
  const props = {
    logout: expect.createSpy(),
    dispatch: expect.createSpy(),
  }

  const store = {
    subscribe: () => {/* mock store */},
    dispatch: () => {/* mock store */},
    getState: () => {/* mock store */},
  }
  const Wrapper = mount(<LotteryPage {...props} store={store} />)
  return { Wrapper, props }
}

describe('Test for LotteryPage component', () => {
  it('should render self', () => {
    const { Wrapper } = setup()
    expect(Wrapper.length).toEqual(true)
    expect(Wrapper.find('div').length).toEqual(4)
  })

  it('should render Wrapper component', () => {
    const wrapper = shallow(<Wrapper />)
    expect(wrapper.length).toEqual(1)
  })

  it('should render Lotteries component', () => {
    const wrapper = shallow(<Lotteries />)
    expect(wrapper.length).toEqual(1)
  })

  it('should render Button component', () => {
    const wrapper = shallow(<Button />)
    expect(wrapper.length).toEqual(1)
  })
})