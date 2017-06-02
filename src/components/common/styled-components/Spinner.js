/**
 * Created by mgab on 02/06/2017.
 */
import styled from 'styled-components'

const imgPath = require('../../../../images/loader.gif')
const Spinner = styled.div`
    width: 200px;
    height: 200px;
    margin: 0 auto;
    background-image: url(${imgPath});
    background-color: papayawhip;
`

export default Spinner