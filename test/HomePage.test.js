/**
 * Created by mgab on 16/05/2017.
 */
import React from 'react'
import expect from 'expect'
import { Link } from  'react-router-dom'
import { shallow } from 'enzyme'
import HomePage from '../src/components/pages/HomePage'
import Wrapper from '../src/components/common/styled-components/Wrapper'
import Title from '../src/components/common/styled-components/Title'
import Highlighted from '../src/components/common/styled-components/HighlightedArea'
import ContactsElement from '../src/components/common/styled-components/ContactsElement'

describe('Test for HomePage component', () => {
  it('should render self and subcomponents', () => {
    const wrapper = shallow(<HomePage />)
    expect(wrapper.length).toEqual(true)
    expect(wrapper.find('.fa-home').length).toEqual(1)
    expect(wrapper.find('.fa-twitter-square').length).toEqual(1)
    expect(wrapper.find('.fa-github-square').length).toEqual(1)
    expect(wrapper.find(Link).length).toEqual(1)
    expect(wrapper.find(Link).props().to).toEqual('lotteries')
    expect(wrapper.find('div').length).toEqual(4)
  })

  it('should render Wrapper component', () => {
    const wrapper = shallow(<Wrapper />)
    expect(wrapper.length).toEqual(1)
  })

  it('should render Title component', () => {
    const title = shallow(<Title />)
    expect(title.length).toEqual(1)
  })

  it('should render Highlighted component', () => {
    const highlighted = shallow(<Highlighted />)
    expect(highlighted.length).toEqual(1)
  })

  it('should render ContactsElement component', () => {
    const contacts = shallow(<ContactsElement />)
    expect(contacts.length).toEqual(1)
  })
})