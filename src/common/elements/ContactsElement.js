/**
 * Created by Mihail on 4/23/2017.
 */
import styled from 'styled-components'

const ContactsElement = styled.div`
 /* Adapt the element's position in respect of the parent element based on position prop */
  text-align: ${props => props.position};
  display: flex;
  width: ${props => props.width};
  flex-direction: column;
  font-size: 1.2em;
  
  a {
    color: white;
  }
  
  em {
    color: papayawhip;
    margin-right: .4em;
  }
`

export default ContactsElement