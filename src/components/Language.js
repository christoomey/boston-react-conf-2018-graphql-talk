import React from 'react';
import gql from 'graphql-tag';

const Language = ({language}) => (
  <span style={{color: language.color}}>
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

export default Language;
