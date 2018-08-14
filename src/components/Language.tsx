import * as React from 'react';
import gql from 'graphql-tag';
import styled from 'styled-components';
import {Language} from '../gqlTypes';
import {SFCWithQuery} from './SFCWithQuery';

const Language: SFCWithQuery<{language: Language}> = {
  component: ({language}) => (
    <span>
      <Circle color={language.color || 'gray'} />
      {language.name}
    </span>
  ),
  fragment: gql`
    fragment Language on Language {
      id
      name
      color
    }
  `,
};

const Circle = styled.span`
  background-color: ${(props: CircleProps) =>
    props.color};
  border-radius: 50%;
  display: inline-block;
  height: 0.75em;
  margin-right: 0.25em;
  width: 0.75em;
`;

interface CircleProps {
  color: string;
}

export default Language;
