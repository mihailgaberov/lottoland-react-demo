/**
 * Created by Mihail on 4/23/2017.
 */
import styled from 'styled-components'

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? 'palevioletred' : 'white'};
  color: ${props => props.primary ? 'white' : 'palevioletred'};

  font-size: 1em;
  font-family: Gotham;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  
  &:hover {
    color: ${props => props.primary ? 'palevioletred' : 'white'};
    background: ${props => props.primary ? 'white' : 'palevioletred'};
  }
`;

export default Button;