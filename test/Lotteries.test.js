/**
 * Created by mgab on 17/05/2017.
 */
import React from 'react'
import expect from 'expect'
import { shallow } from 'enzyme'
import Lotteries from '../src/components/Lotteries'


const setup = () => {
  const props = {
    lotteries: [{
      "id": "austriaLotto_2628",
      "lotteryId": "austriaLotto",
      "drawingDate": "2017-05-17T17:30:00.000+0000",
      "closingDate": "2017-05-17T16:30:00.000+0000",
      "state": "IN_PLAY",
      "doubleJackpotAllowed": true,
      "jackpots": [
        {
          "lotteryId": "austriaLotto",
          "jackpot": 0,
          "marketingJackpot": 0
        }
      ],
      "drawingType": "WE"
    }]
  }

  const Wrapper = shallow(<Lotteries {...props} />)
  return { Wrapper, props }
}

describe('Test for Lotteries component', () => {
  it('should render self and subcomponents', () => {
    const { Wrapper } = setup();

    expect(Wrapper.find('div').length).toEqual(1);
  })
})