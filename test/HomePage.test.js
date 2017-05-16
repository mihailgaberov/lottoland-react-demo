/**
 * Created by mgab on 16/05/2017.
 */
import React from 'react';
import expect from 'expect';
import { Link } from  'react-router-dom';
import { shallow } from 'enzyme';
import HomePage from '../src/components/pages/HomePage';

describe('Test for HomePage component', () => {
  it('should render the HomePage component', () => {
    const wrapper = shallow(<HomePage />);
    expect(wrapper.length).toEqual(true);
    expect(wrapper.find('.fa-home').length).toEqual(1);
    expect(wrapper.find('.fa-twitter-square').length).toEqual(1);
    expect(wrapper.find('.fa-github-square').length).toEqual(1);
    expect(wrapper.find(Link).length).toEqual(1);
    expect(wrapper.find(Link).props().to).toEqual('lotteries');
  });
});