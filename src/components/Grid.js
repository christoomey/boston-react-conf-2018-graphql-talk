import styled from 'styled-components';
import {spacing} from '../styles';

const Grid = styled.ul`
  padding: 0;
  display: grid;
  grid-template-columns: ${props =>
    templateColumns(props)};
  grid-gap: ${spacing.small} ${spacing.normal};
`;

const templateColumns = ({columns}) =>
  [...Array(columns)].map(() => '1fr').join(' ');

export default Grid;
