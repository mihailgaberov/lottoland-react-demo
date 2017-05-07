/**
 * Created by Mihail on 4/23/2017.
 */
import styled from 'styled-components'

const ContactsElement = styled.div`
 /* Adapt the element's position in respect of the parent element based on position prop */
  text-align: ${props => props.position};
  display: block;
  width: ${props => props.width};
  font-size: 1.2em;
  margin-bottom: 28px;
  
  @media only screen and (min-width: 680px) {
    display: flex;
    flex-direction: column;
    margin-bottom: 0;
  }
  
  a {
    color: white;
  }
  
  em {
    color: papayawhip;
    margin-right: .4em;
  }
`

export default ContactsElement