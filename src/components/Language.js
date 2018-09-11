import React from 'react';
import gql from 'graphql-tag';
import Circle from './Circle';

const Language = ({language}) => (
  <span>
    <Circle color={language.color} />
    {language.name}
  </span>
);

Language.fragment = gql`
  fragment Language on Language {
    id
    name
    color
  }
`;

export default Language;
