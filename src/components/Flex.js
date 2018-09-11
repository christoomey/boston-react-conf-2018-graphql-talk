import styled from 'styled-components';
import {spacing} from '../styles';

const Flex = styled.div`
  display: flex;
  ${props =>
    props.spaceBetween &&
    'justify-content: space-between'};
`;

export const Column = styled(Flex)`
  flex-direction: column;
  height: 100%;
`;

export const Row = styled(Flex)``;

export const PaddedRow = styled(Row)`
  margin-bottom: ${spacing.small};
`;
