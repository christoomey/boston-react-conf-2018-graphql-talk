import styled from 'styled-components';
import {spacing} from '../styles';

const Tile = styled.li`
  border-radius: 3px;
  border: 1px solid lightgray;
  list-style: none;
  margin-bottom: ${spacing.small};
  padding: ${props => props.full || spacing.small};
`;

export default Tile;
