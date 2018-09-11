import styled from 'styled-components';

const Circle = styled.span`
  background-color: ${props => props.color};
  border-radius: 50%;
  display: inline-block;
  height: 0.75em;
  margin-right: 0.25em;
  width: 0.75em;
`;

export default Circle;
