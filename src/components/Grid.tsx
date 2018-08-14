import styled from 'styled-components';
import {spacing} from '../styles';

interface GridProps {
  columns: number;
}

const Grid = styled.ul`
  padding: 0;
  display: grid;
  grid-template-columns: ${(props: GridProps) =>
    templateColumns(props)};
  grid-gap: ${spacing.small} ${spacing.normal};
`;

const templateColumns = ({columns}) =>
  [...Array(columns)].map(() => '1fr').join(' ');

export default Grid;
