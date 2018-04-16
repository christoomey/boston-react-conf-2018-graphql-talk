import styled from 'styled-components';

const Flex = styled.div`
  display: flex;
  ${props => props.spaceBetween && 'justify-content: space-between'};
`

export const Column = styled(Flex)`
  flex-direction: column;
`;

export const Row = styled(Flex)`
`;
