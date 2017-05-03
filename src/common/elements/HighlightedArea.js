/**
 * Created by Mihail on 4/23/2017.
 */
import styled from 'styled-components'

const HighlightedArea = styled.div`
  background: #075975;
  color: white;
  display: block;
  padding: 2em;
  
  @media only screen and (min-width: 680px) {
    display: flex;
    justify-content: space-between;
  }
`

export default HighlightedArea