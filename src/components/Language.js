import React from 'react';
import gql from 'graphql-tag';
import styled from 'styled-components';

const Language = ({language}) => (
  <span>
    <Circle color={language.color} />
    {language.name}
  </span>
);

export const LANGUAGE_FRAGMENT = gql`
  fragment Language on Language {
    id
    name
    color
  }
`;

const Circle = styled.span`
  background-color: ${props => props.color};
  border-radius: 50%;
  display: inline-block;
  height: 0.75em;
  margin-right: 0.25em;
  width: 0.75em;
`

export default Language;
