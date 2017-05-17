/**
 * Created by mgab on 17/05/2017.
 */
import React from 'react'
import expect from 'expect'
import { shallow, mount } from 'enzyme'
import Lotteries from '../../src/components/Lotteries'
import Title from '../../src/components/common/styled-components/Title'
import StyledLotteries from '../../src/components/common/styled-components/Lotteries'


const setup = () => {
  const props = {
    lotteriesData: [{
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

  const Wrapper = mount(<Lotteries {...props} />)
  return { Wrapper, props }
}

describe('Test for Lotteries component', () => {
  it('should render self and subcomponents', () => {
    const { Wrapper } = setup();
    expect(Wrapper.find('div').length).toEqual(3);
  })

  it('should render Title component', () => {
    const title = shallow(<Title />)
    expect(title.length).toEqual(1)
  })

  it('should render StyledLotteries component', () => {
    const styledLotteries = shallow(<StyledLotteries />)
    expect(styledLotteries.length).toEqual(1)
  })

  it('should use the lotteries data to show them', () => {
    const { Wrapper } = setup()
    const LotteriesWrapper = Wrapper.find('Lotteries').props()
    expect(LotteriesWrapper.lotteriesData).toEqual([{
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
    }])
  })
})